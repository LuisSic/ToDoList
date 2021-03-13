export const TaskTableIAM = {
  Effect: 'Allow',
  Action: [
    'dynamodb:PutItem',
    'dynamodb:Scan',
    'dynamodb:GetItem',
    'dynamodb:UpdateItem',
  ],
  Resource: '${self:custom.TaskTable.arn}',
};
