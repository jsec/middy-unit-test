import { type APIGatewayProxyEvent, type Callback, type Context } from 'aws-lambda';

import eventFixture from './data/proxy-request.json';

describe('testing handler', () => {
  it('doesnt force me to stupidly type the handler', async () => {
    const fixture = eventFixture as APIGatewayProxyEvent;
    const testBody = {
      message: 'Hello from Lambda!'
    };
    const testEvent = {
      ...fixture,
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
    const result = await mod.handler(
      testEvent,
      {} as unknown as Context,
      {} as unknown as Callback<void>
    );

    console.log('result: ', result);
    expect(result.statusCode).toEqual(200);
  });
});

