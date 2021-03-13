import type { APIGatewayProxyEvent, Handler } from 'aws-lambda';

import { Decoded } from '../interfaces';
interface StatementPolicy {
  Action: string;
  Effect: string;
  Resource: string;
}
interface APIGatewayProxyResultAuth {
  principalId: string;
  policyDocument: {
    Version: string;
    Statement: StatementPolicy[];
  };
  context: Decoded;
}

type ValidatedAPIGatewayAuthEvent = APIGatewayProxyEvent & {
  authorizationToken: string;
  methodArn: string;
};

export type ValidatedEventAPIGatewayAuthEvent = Handler<
  ValidatedAPIGatewayAuthEvent,
  APIGatewayProxyResultAuth
>;

export const formatJSONResponse = (response: Record<string, unknown>) => {
  return {
    statusCode: 200,
    body: JSON.stringify(response),
  };
};
