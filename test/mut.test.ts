import { type APIGatewayProxyEvent, type Callback, type Context } from 'aws-lambda';

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

    const mod = await import('../lib/handler');
    // FIXME: Add a default context, and see if we can
    // remove the callback
    const result = await mod.handler(
      testEvent,
      {} as unknown as Context,
      {} as unknown as Callback<void>
    );

    console.log('result: ', result);
    expect(result.statusCode).toEqual(200);
  });
});
