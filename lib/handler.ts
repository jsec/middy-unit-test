import { type APIGatewayProxyResult } from 'aws-lambda';

import { middify } from '../util/middify';
import { type ProxyIntegrationEvent, type TestObject } from './types';

// TODO: add httpResponse and httpError helpers
// httpResponse is just the json helper
// httpError might be the translate error helper,
// but check the error handler middleware to see if we need
// to throw a createError instance instead
export const handler = middify(
  async (event: ProxyIntegrationEvent<TestObject>): Promise<APIGatewayProxyResult> => {
    return {
      statusCode: 200,
      body: JSON.stringify(event.body)
    };
  }
);
