import { defineAuth } from '@aws-amplify/backend-auth';

export const auth = defineAuth({
  loginWith: {
    email: true,
    phone: false,
    socialProviders: {
      apple: {
        clientId: 'YOUR_APPLE_CLIENT_ID',
        teamId: 'YOUR_APPLE_TEAM_ID',
        keyId: 'YOUR_APPLE_KEY_ID',
        privateKey: 'YOUR_APPLE_PRIVATE_KEY'
      },
      google: {
        clientId: 'YOUR_GOOGLE_CLIENT_ID',
        clientSecret: 'YOUR_GOOGLE_CLIENT_SECRET'
      }
    }
  }
}); 