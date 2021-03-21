import { StatusTask } from '../../interfaces';
export default {
  type: 'object',
  properties: {
    status: {
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
  required: ['status', 'isImportant', 'isMyDay'],
} as const;
