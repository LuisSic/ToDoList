export default {
  handler: `${__dirname
    .split(process.cwd())[1]
    .substring(1)
    .replace(/\\/g, '/')}/handler.main`,
  events: [
    {
      http: {
        method: 'get',
        path: '/tasks',
        authorizer: '${self:custom.authorizer}',
      },
    },
  ],
};
