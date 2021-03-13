import 'source-map-support/register';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { middyfy } from '@libs/lambda';

const privateRoute: APIGatewayProxyHandler = async (event, _context) => {
  return {
    statusCode: 200,
    headers: {
      /* Required for CORS support to work */
      'Access-Control-Allow-Origin': '*',
      /* Required for cookies, authorization headers with HTTPS */
      'Access-Control-Allow-Credentials': true,
    },
    body: JSON.stringify({
      event,
      _context,
    }),
  };
};
export const main = middyfy(privateRoute);
