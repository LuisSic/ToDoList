import type { AWS } from '@serverless/typescript';

import { privateRoute, publicRoute, auth } from './src/functions';

const serverlessConfiguration: AWS = {
  service: 'auth-service',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
  },
  plugins: ['serverless-webpack'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      AUTH0_PUBLIC_KEY: '${file(secret.pem)}',
    },
    lambdaHashingVersion: '20201221',
    region: 'us-east-2',
  },
  functions: { auth, privateRoute, publicRoute },
  resources: {
    Resources: {
      GatewayResponse: {
        Type: 'AWS::ApiGateway::GatewayResponse',
        Properties: {
          ResponseParameters: {
            'gatewayresponse.header.Access-Control-Allow-Origin': "'*'",
            'gatewayresponse.header.Access-Control-Allow-Headers': "'*'",
          },
          ResponseType: 'EXPIRED_TOKEN',
          RestApiId: {
            Ref: 'ApiGatewayRestApi',
          },
          StatusCode: '401',
        },
      },
      AuthFailureGatewayResponse: {
        Type: 'AWS::ApiGateway::GatewayResponse',
        Properties: {
          ResponseParameters: {
            'gatewayresponse.header.Access-Control-Allow-Origin': "'*'",
            'gatewayresponse.header.Access-Control-Allow-Headers': "'*'",
          },

          ResponseType: 'UNAUTHORIZED',
          RestApiId: {
            Ref: 'ApiGatewayRestApi',
          },
          StatusCode: '401',
        },
      },
    },
  },
};

module.exports = serverlessConfiguration;
