import { TaptiSDKOptions, OAuthResponse, connectAccountOptions } from './types';
import { openWindow } from './utils';
import { SDKConfig } from '@/config'


export class TaptiSDK {
    private accessGatewayUrl: string;
    private userSDKToken: string;
    private origin: string;

    constructor(options: TaptiSDKOptions) {
        if (!options.userSDKToken) {
            throw new Error('User SDK Token is required.');
        }

        this.accessGatewayUrl = SDKConfig.accessGatewayBaseURL;
        this.userSDKToken = options.userSDKToken;
        this.origin = typeof window === 'undefined' ? '' : window.location.href;
    }

    public connectAccount(options: connectAccountOptions = {}): Promise<OAuthResponse> {
        const { platform } = options;
        const url = new URL(`${this.accessGatewayUrl}/oauth-gateway`);
        const params = new URLSearchParams({
            userSDKToken: this.userSDKToken,
            platform: platform || ""
        });
        url.search = params.toString();
        return openWindow(url.toString(), this.origin);
    }
}
