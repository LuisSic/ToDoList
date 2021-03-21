import type { APIGatewayProxyHandler } from 'aws-lambda';
import { DynamoDB } from 'aws-sdk';
import * as createError from 'http-errors';
import { commonMiddleware } from '../../libs';
import { StatusTask } from '../../interfaces';

const dynamodb = new DynamoDB.DocumentClient();

const getTasks: APIGatewayProxyHandler = async (event, _context) => {
  let task: DynamoDB.ItemList = [];
  const { email } = event.requestContext.authorizer;
  try {
    const result = await dynamodb
      .query({
        TableName: process.env.TASK_TABLE_NAME,
        KeyConditionExpression: '#user = :user',
        FilterExpression: 'statusTask <> :status',
        ExpressionAttributeValues: {
          ':user': email,
          ':status': StatusTask.DELETED,
        },
        ExpressionAttributeNames: {
          '#user': 'user',
        },
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
