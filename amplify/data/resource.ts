import { defineData } from '@aws-amplify/backend-data';

export const data = defineData({
  schema: `
    type Rating @model {
      id: ID!
      establishment: String!
      ice: Int!
      temperature: Int!
      quantity: Int!
      cost: Int!
      aesthetics: Int!
      createdAt: AWSDateTime!
    }
  `,
}); 