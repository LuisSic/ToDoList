import { DynamoDB } from 'aws-sdk';
import * as createError from 'http-errors';
import {
  ValidatedEventAPIGatewayProxyEvent,
  commonMiddleware,
} from '../../libs';
import type { APIGatewayProxyHandler } from 'aws-lambda';
import validator from '@middy/validator';
import { StatusTask } from '../../interfaces';
import { getTaskById } from '../getTask/handler';

import schema from './schema';

const dynamodb = new DynamoDB.DocumentClient();

const deleteTask: APIGatewayProxyHandler = async (event, _context) => {
  const { id } = event.pathParameters;
  const { email } = event.requestContext.authorizer;
  await getTaskById(id, email);

  const params: DynamoDB.DocumentClient.UpdateItemInput = {
    TableName: process.env.TASK_TABLE_NAME,
    Key: { id, user: email },
    UpdateExpression: 'set statusTask = :newStatus',
    ExpressionAttributeValues: {
      ':newStatus': StatusTask.DELETED,
    },
    ReturnValues: 'ALL_NEW',
  };

  try {
    await dynamodb.update(params).promise();
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }

  return {
    statusCode: 204,
    body: '',
  };
};

export const main = commonMiddleware(deleteTask).use(
  validator({ inputSchema: schema })
);
