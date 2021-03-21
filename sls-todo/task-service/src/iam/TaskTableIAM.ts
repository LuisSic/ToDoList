export const TaskTableIAM = {
  Effect: 'Allow',
  Action: [
    'dynamodb:PutItem',
    'dynamodb:GetItem',
    'dynamodb:UpdateItem',
    'dynamodb:Query',
  ],
  Resource: '${self:custom.TaskTable.arn}',
};
