import 'source-map-support/register';
import { commonMiddleware } from '../../libs';
import validator from '@middy/validator';
import type { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import * as createError from 'http-errors';
import { Task } from '../../interfaces';
import schema from './schema';
const dynamodb = new DynamoDB.DocumentClient();

export const getTaskById = async (id: string): Promise<Task> => {
  let task: Task;
  try {
    const result = await dynamodb
      .get({
        TableName: process.env.TASK_TABLE_NAME,
        Key: { id },
      })
      .promise();

    task = (result.Item as unknown) as Task;
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }

  if (!task) {
    throw new createError.NotFound(`Task with ID "${id}" not found`);
  }

  return task;
};

const getTask: APIGatewayProxyHandler = async (event) => {
  const { id } = event.pathParameters;
  let task = await getTaskById(id);

  return {
    statusCode: 201,
    body: JSON.stringify(task, null, 2),
  };
};

export const main = commonMiddleware(getTask).use(
  validator({ inputSchema: schema })
);
