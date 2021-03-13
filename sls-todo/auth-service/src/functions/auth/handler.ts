import 'source-map-support/register';
import { verify } from 'jsonwebtoken';
import type { ValidatedEventAPIGatewayAuthEvent } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { Decoded } from '../../interfaces';

const auth: ValidatedEventAPIGatewayAuthEvent = async (event) => {
  if (!event.authorizationToken) {
    throw 'Unathorized';
  }

  try {
    const token = event.authorizationToken.replace('Bearer ', '');
    const claims = (verify(
      token,
      process.env.AUTH0_PUBLIC_KEY
    ) as unknown) as Decoded;
    const policy = generatePolicy(claims.sub, event.methodArn);
    return {
      ...policy,
      context: claims,
    };
  } catch (error) {
    console.log(error);
    throw 'Unauthorized';
  }
};

const generatePolicy = (principalId: string, methodArn: string) => {
  const apiGatewayWildcard = methodArn.split('/', 2).join('/') + '/*';

  return {
    principalId,
    policyDocument: {
      Version: '2012-10-17',
      Statement: [
        {
          Action: 'execute-api:Invoke',
          Effect: 'Allow',
          Resource: apiGatewayWildcard,
        },
      ],
    },
  };
};

export const main = middyfy(auth);
