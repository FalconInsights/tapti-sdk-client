# Tapti Client SDK

## Overview

The Tapti Client SDK is a JavaScript library designed to facilitate interaction with Tapti APIs on the client side.

## Installation

To install the Tapti Client SDK, you can use npm:

```bash
npm install tapti-sdk-client
```


## Usage

### Importing the SDK

To use the SDK, you need to import it into your project. You can import all the functions and types provided by the SDK as follows:

```typescript
import { TaptiClient } from 'tapti-sdk-client';
```

### Initializing the SDK

To initialize the SDK, you need to create an instance of the `TaptiSDK` class. You must provide a `userSDKToken` as part of the options:


```typescript
const taptiSDK = new TaptiSDK({
    userSDKToken: 'your-user-sdk-token'
});
```


### Connecting an Account

The SDK provides a method to initiate the OAuth flow for connecting a user's account. You can specify the platform you want to connect to:


```typescript
taptiSDK.connectAccount({ platform: 'youtube' })
  .then(response => {
    if (response.success) {
      console.log('Account connected successfully:', response.message);
    } else {
      console.error('Failed to connect account:', response.message);
    }
  })
  .catch(error => {
    console.error('Error during account connection:', error);
  });
```