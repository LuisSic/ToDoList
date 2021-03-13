import { StatusTask } from '../../interfaces';
export default {
  type: 'object',
  properties: {
    status: {
      type: 'string',
      enum: [StatusTask.COMPLETED, StatusTask.DELETED, StatusTask.NOT_FINISH],
    },
  },
  required: ['status'],
} as const;
