import type { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import * as createError from 'http-errors';
import { commonMiddleware } from '../../libs';

const dynamodb = new DynamoDB.DocumentClient();

const getTasks: APIGatewayProxyHandler = async (event, _context) => {
  let task: DynamoDB.ItemList = [];

  try {
    const result = await dynamodb
      .scan({
        TableName: process.env.TASK_TABLE_NAME,
      })
      .promise();

    task = result.Items;
  } catch (error) {
    console.error(error);
    throw new createError.InternalServerError(error);
  }
  return {
    statusCode: 201,
    body: JSON.stringify(task, null, 2),
  };
};

export const main = commonMiddleware(getTasks);
