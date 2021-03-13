export default {
  type: 'object',
  properties: {
    title: { type: 'string' },
    isImportant: { type: 'boolean' },
    isMyDay: { type: 'boolean' },
  },
  required: ['title', 'isImportant', 'isMyDay'],
} as const;
