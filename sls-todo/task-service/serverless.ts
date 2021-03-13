import type { AWS } from '@serverless/typescript';
import { TaskTableIAM } from './src/iam';
import { TaskTable } from './src/resources';
import {
  createTask,
  getTask,
  getTasks,
  updateStatusTask,
} from './src/functions';

const serverlessConfiguration: AWS = {
  service: 'task-service',
  frameworkVersion: '2',
  custom: {
    webpack: {
      webpackConfig: './webpack.config.js',
      includeModules: true,
    },
    TaskTable: {
      name: { Ref: 'TaskTable' },
      arn: {
        'Fn::GetAtt': ['TaskTable', 'Arn'],
      },
    },
    authorizer:
      'arn:aws:lambda:#{AWS::Region}:#{AWS::AccountId}:function:auth-service-${self:provider.stage}-auth',
  },
  plugins: ['serverless-webpack', 'serverless-pseudo-parameters'],
  provider: {
    name: 'aws',
    runtime: 'nodejs14.x',
    stage: "${opt:stage,'dev'}",
    region: 'us-east-2',
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      TASK_TABLE_NAME: '${self:custom.TaskTable.name}',
    },
    lambdaHashingVersion: '20201221',
    iamRoleStatements: [TaskTableIAM],
  },
  resources: {
    Resources: {
      TaskTable,
    },
  },
  functions: { createTask, getTask, getTasks, updateStatusTask },
};

module.exports = serverlessConfiguration;
