import 'source-map-support/register';
import {
  ValidatedEventAPIGatewayProxyEvent,
  commonMiddleware,
} from '../../libs';
import { v4 as uuid } from 'uuid';
import { DynamoDB } from 'aws-sdk';
import * as createError from 'http-errors';
import { Task, StatusTask } from '../../interfaces';
import schema from './schema';
const dynamodb = new DynamoDB.DocumentClient();

const createTask: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {
  const { title, isImportant, isMyDay } = event.body;
  const taskItem: Task = {
    id: uuid(),
    title,
    isImportant,
    isMyDay,
    statusTask: StatusTask.NOT_FINISH,
    createdAt: new Date().toISOString(),
  };

  try {
    await dynamodb
      .put({
        TableName: process.env.TASK_TABLE_NAME,
        Item: taskItem,
      })
      .promise();
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 201,
    body: JSON.stringify(taskItem, null, 2),
  };
};

export const main = commonMiddleware(createTask);
