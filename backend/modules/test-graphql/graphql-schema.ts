export const testGraphqlSchema = `
  type Query {
    name: String
    age: Int
    country: String
    address: Address
  }

  type Address {
    city: String
    street: String
    number: Int
  }
`;