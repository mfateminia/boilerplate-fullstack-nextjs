import express from 'express';
import { TestRouter } from './modules/test/router';
import graphqlHTTP from 'express-graphql';
import { buildSchema } from 'graphql';
import { testGraphqlSchema } from './modules/test-graphql/graphql-schema';
import { testGraphqlRoot } from './modules/test-graphql/graphql-router';

export const router = express.Router();

TestRouter(router);

const graphqlSchema = `
    ${testGraphqlSchema}
`;

const graphqlRoot = {
    ...testGraphqlRoot
}

router.use('/graphql', graphqlHTTP({
    schema: buildSchema(graphqlSchema),
    rootValue: graphqlRoot,
    graphiql: true,
  }))