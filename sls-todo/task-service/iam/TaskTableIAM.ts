import { IamRoleStatement } from 'serverless/aws';

export const TaskTableIAM: IamRoleStatement = {
  Effect: 'Allow',
  Action: 'dynamodb:PutItem',
  Resource: '${self:custom.TaskTable.arn}',
};
