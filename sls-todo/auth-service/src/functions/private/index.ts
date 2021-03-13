export default {
  handler: `${__dirname
    .split(process.cwd())[1]
    .substring(1)
    .replace(/\\/g, '/')}/handler.main`,
  events: [
    {
      http: {
        method: 'post',
        path: 'private',
        authorizer: 'auth',
        cors: true,
      },
    },
  ],
};
