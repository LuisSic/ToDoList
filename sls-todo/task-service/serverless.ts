import type { Serverless } from 'serverless/aws';
import { TaskTableIAM } from './iam';
import { TaskTable } from './resources';
const serverlessConfiguration: Serverless = {
  service: {
    name: 'task-service',
    // app and org for use with dashboard.serverless.com
    // app: your-app-name,
    // org: your-org-name,
  },
  frameworkVersion: '2',
  // Add the serverless-webpack plugin
  plugins: ['serverless-webpack', 'serverless-pseudo-parameters'],
  provider: {
    name: 'aws',
    runtime: 'nodejs12.x',
    stage: "${opt:stage,'dev'}",
    region: 'us-east-2',
    apiGateway: {
      minimumCompressionSize: 1024,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: '1',
      TASK_TABLE_NAME: '${self:custom.TaskTable.name}',
    },
    iamRoleStatements: [TaskTableIAM],
  },
  resources: {
    Resources: {
      TaskTable,
    },
  },
  functions: {
    createTask: {
      handler: './src/handlers/createTask.handler',
      events: [
        {
          http: {
            method: 'POST',
            path: '/task',
          },
        },
      ],
    },
  },
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
  },
};

module.exports = serverlessConfiguration;
