import { CloudFormationResource } from 'serverless/aws';

export const TaskTable: CloudFormationResource = {
  Type: 'AWS::DynamoDB::Table',
  Properties: {
    TableName: 'TaskTable-${self:provider.stage}',
    BillingMode: 'PAY_PER_REQUEST',
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S',
      },
    ],
    KeySchema: [
      {
        AttributeName: 'id',
        KeyType: 'HASH',
      },
    ],
  },
};
