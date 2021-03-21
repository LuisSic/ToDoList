export const TaskTable = {
  Type: 'AWS::DynamoDB::Table',
  Properties: {
    TableName: 'TaskTable-${self:provider.stage}',
    BillingMode: 'PAY_PER_REQUEST',
    AttributeDefinitions: [
      {
        AttributeName: 'id',
        AttributeType: 'S',
      },
      {
        AttributeName: 'user',
        AttributeType: 'S',
      },
    ],
    KeySchema: [
      {
        AttributeName: 'user',
        KeyType: 'HASH',
      },
      {
        AttributeName: 'id',
        KeyType: 'RANGE',
      },
    ],
  },
};
