export default {
  handler: `${__dirname
    .split(process.cwd())[1]
    .substring(1)
    .replace(/\\/g, '/')}/handler.main`,
  events: [
    {
      http: {
        method: 'delete',
        path: '/task/{id}',
        cors: true,
        authorizer: '${self:custom.authorizer}',
      },
    },
  ],
};
