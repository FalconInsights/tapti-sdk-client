export interface myPackageProps {
    name: string
}

export interface TaptiSDKOptions {
    userSDKToken: string;
}

type AccountPlatforms = 'youtube' | 'instagram' | ''

export interface connectAccountOptions{
    platform ?: AccountPlatforms
}

export interface OAuthResponse {
    success: boolean;
    message: string;
}
