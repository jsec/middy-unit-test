import { type APIGatewayProxyEvent, type Context } from 'aws-lambda';

import { handler } from '../lib/handler';
import { type TestObject } from '../lib/types';
import eventJson from './data/proxy-request.json';

describe('testing handler', () => {
  it('doesnt force me to stupidly type the handler', async () => {
    const testBody: TestObject = {
      message: 'Hello from Lambda!'
    };

    const baseEvent = eventJson as APIGatewayProxyEvent;
    const testEvent = {
      ...baseEvent,
      body: JSON.stringify(testBody),
      multiValueQueryStringParameters: {},
      pathParameters: {},
      queryStringParameters: {},
      rawHeaders: {
        'Content-Type': 'application/json'
      },
      headers: {
        'Content-Type': 'application/json'
      }
    };

    const context: Partial<Context> = {
      awsRequestId: '1234'
    };

    const result = await handler(testEvent, context as Context);

    console.log('result: ', result);
    expect(result.statusCode).toEqual(200);
  });
});
