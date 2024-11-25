export class SDKConfig {
  private static instance: SDKConfig;
  private static accessGatewayBaseUrl: string = 'https://oauth.tapti.ai';

  private constructor() {
    // Private constructor to prevent direct instantiation
  }

  public static getInstance(): SDKConfig {
    if (!SDKConfig.instance) {
      SDKConfig.instance = new SDKConfig();
    }
    return SDKConfig.instance;
  }

  public static get accessGatewayBaseURL(): string {
    return SDKConfig.accessGatewayBaseUrl;
  }

  public static set accessGatewayBaseURL(url: string) {
    SDKConfig.accessGatewayBaseUrl = url;
  }
}
