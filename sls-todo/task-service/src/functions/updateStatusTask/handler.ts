import { DynamoDB } from 'aws-sdk';
import * as createError from 'http-errors';
import {
  ValidatedEventAPIGatewayProxyEvent,
  commonMiddleware,
} from '../../libs';
import { StatusTask } from '../../interfaces';
import { getTaskById } from '../getTask/handler';

import schema from './schema';

const dynamodb = new DynamoDB.DocumentClient();

const updateStatusTask: ValidatedEventAPIGatewayProxyEvent<
  typeof schema
> = async (event, _context) => {
  const { id } = event.pathParameters;
  const { statusTask, isImportant, isMyDay } = event.body;
  const { email } = event.requestContext.authorizer;
  const task = await getTaskById(id, email);

  if (task.user !== email) {
    throw new createError.Unauthorized(`You cannot modify this task!`);
  }

  if (task.statusTask === StatusTask.DELETED) {
    throw new createError.Forbidden(`You cannot edit a deteled task`);
  }

  const params: DynamoDB.DocumentClient.UpdateItemInput = {
    TableName: process.env.TASK_TABLE_NAME,
    Key: { id, user: email },
    UpdateExpression:
      'set statusTask = :newStatus, isImportant = :newIsImportant, isMyDay = :newIsMyDay',
    ExpressionAttributeValues: {
      ':newStatus': statusTask,
      ':newIsImportant': isImportant,
      ':newIsMyDay': isMyDay,
    },
    ReturnValues: 'ALL_NEW',
  };

  let updatedTask;
  try {
    const result = await dynamodb.update(params).promise();
    updatedTask = result.Attributes;
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 200,
    body: JSON.stringify(updatedTask, null, 2),
  };
};

export const main = commonMiddleware(updateStatusTask);
