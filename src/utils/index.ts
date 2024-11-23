import { SDKConfig } from '@/config';
import { OAuthResponse } from '@/types';

export function openWindow(url: string, origin: string) {
    return new Promise<OAuthResponse>((resolve) => {

        // creating a new URL
        const newTabURL = new URL(url);
        // adding origin params to the new URL without replacing existing ones
        const params = new URLSearchParams(newTabURL.search);
        params.set('origin', origin); // Safely add or update the 'origin' parameter
        newTabURL.search = params.toString();

        const newTab = window.open(newTabURL, '_blank');
        const messageHandler = (event: any) => {
            if (event.origin !== SDKConfig.accessGatewayBaseURL) return;
            clearInterval(tabCheckInterval);
            const { success, message } = event.data;
            window.removeEventListener('message', messageHandler);
            newTab?.close()
            if (success) {
                resolve({ success, message });
            } else {
                resolve({ success, message });
            }
        };

        window.addEventListener('message', messageHandler);

        const tabCheckInterval = setInterval(() => {
            if (newTab?.closed) {
                clearInterval(tabCheckInterval);
                window.removeEventListener('message', messageHandler);
                resolve({ success: false, message: "Oauth Flow closed" });
            }
        }, 1000);
    });
}