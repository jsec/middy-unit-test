import { type APIGatewayProxyEvent } from 'aws-lambda';

type EventBody<T = unknown> = {
  body: T;
};

export type ProxyIntegrationEvent<T = unknown> = Omit<APIGatewayProxyEvent, 'body'> & EventBody<T>;

export type TestObject = {
  message: string;
};
