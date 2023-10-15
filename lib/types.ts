import { type APIGatewayProxyEvent } from 'aws-lambda';

type ProxyIntegrationParams = {
  paths?: Record<string, string>;
  routePath?: string;
};

type EventBody<T = unknown> = {
  body: T;
};

export type ProxyIntegrationEvent<T = unknown> = Omit<APIGatewayProxyEvent, 'body'> &
  ProxyIntegrationParams &
  EventBody<T>;

export type TestObject = {
  message: string;
};
