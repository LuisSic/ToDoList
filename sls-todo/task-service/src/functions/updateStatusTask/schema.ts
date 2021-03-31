import { StatusTask } from '../../interfaces';
export default {
  type: 'object',
  properties: {
    statusTask: {
      type: 'string',
      enum: [StatusTask.COMPLETED, StatusTask.DELETED, StatusTask.NOT_FINISH],
    },
    isImportant: {
      type: 'boolean',
    },
    isMyDay: {
      type: 'boolean',
    },
  },
  required: ['statusTask', 'isImportant', 'isMyDay'],
} as const;
