import { APIGatewayProxyHandler } from 'aws-lambda';
import { v4 as uuid } from 'uuid';
import { DynamoDB } from 'aws-sdk';

import 'source-map-support/register';

enum StatusTak {
  COMPLETED = 'completed',
  DELETED = 'deleted',
  NOT_FINISH = 'not_finish',
}
interface TaskBody {
  title: string;
  isImportant: boolean;
  isMyDay: boolean;
}

interface CreatedTask extends TaskBody {
  id: string;
  status: StatusTak;
  createdAt: string;
}

const dynamodb = new DynamoDB.DocumentClient();

if (!process.env.TASK_TABLE_NAME) {
  throw new Error('TASK_TABLE_NAME must be defined');
}
export const handler: APIGatewayProxyHandler = async (event, _context) => {
  const { title, isImportant, isMyDay }: TaskBody = JSON.parse(event.body);

  const taskItem: CreatedTask = {
    id: uuid(),
    title,
    isImportant,
    isMyDay,
    status: StatusTak.NOT_FINISH,
    createdAt: new Date().toISOString(),
  };

  await dynamodb
    .put({
      TableName: process.env.TASK_TABLE_NAME,
      Item: taskItem,
    })
    .promise();

  return {
    statusCode: 201,
    body: JSON.stringify(taskItem, null, 2),
  };
};
