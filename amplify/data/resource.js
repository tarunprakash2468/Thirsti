import { defineData } from '@aws-amplify/backend-data';

export const data = defineData({
  schema: `
    type Rating @model @auth(rules: [{ allow: owner }]) {
      id: ID!
      rating: Int!
      comment: String
      userId: String!
      createdAt: AWSDateTime!
    }
  `,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    userPool: {
      signInOptions: {
        socialProviders: ['apple', 'google']
      }
    }
  }
}); 