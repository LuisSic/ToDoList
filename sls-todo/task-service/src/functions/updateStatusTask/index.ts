import schema from './schema';
export default {
  handler: `${__dirname
    .split(process.cwd())[1]
    .substring(1)
    .replace(/\\/g, '/')}/handler.main`,
  events: [
    {
      http: {
        method: 'PATCH',
        path: '/task/{id}/status',
        request: {
          schema: {
            'application/json': schema,
          },
        },
        authorizer: '${self:custom.authorizer}',
      },
    },
  ],
};
