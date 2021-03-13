export default {
  type: 'object',
  properties: {
    queryStringParameters: {
      type: 'object',
      properties: {
        id: { type: 'string' },
      },
    },
  },
  required: ['queryStringParameters'],
} as const;
