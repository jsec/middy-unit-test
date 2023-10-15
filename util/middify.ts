import middy from '@middy/core';
import httpCors from '@middy/http-cors';
import httpErrorHandler from '@middy/http-error-handler';
import httpEventNormalizer from '@middy/http-event-normalizer';
import httpHeaderNormalizer from '@middy/http-header-normalizer';
import httpJsonBodyParser from '@middy/http-json-body-parser';
import { type APIGatewayProxyEvent, type Handler } from 'aws-lambda';

export const middify = (handler: Handler) => {
  return middy<APIGatewayProxyEvent>(handler)
    .use(httpHeaderNormalizer())
    .use(httpEventNormalizer())
    .use(httpCors())
    .use(
      httpJsonBodyParser({
        disableContentTypeError: false
      })
    )
    .use(
      httpErrorHandler({
        fallbackMessage: 'Internal Server Error'
      })
    );
};
