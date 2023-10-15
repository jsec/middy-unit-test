import { type APIGatewayProxyEvent, type APIGatewayProxyResult, type Handler } from 'aws-lambda';

import { middify } from '../util/middify';

// TODO: the body type is still a string, we need it to be
// a strongly typed object
const myHandler: Handler<APIGatewayProxyEvent, APIGatewayProxyResult> = async gatewayEvent => {
  const response = {
    message: 'Hi From lambda!'
  };
  return {
    statusCode: 200,
    body: JSON.stringify(response)
  };
};

export const handler = middify(myHandler);
