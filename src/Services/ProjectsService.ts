import { ListJob, ListJobProps } from '../Model/ListJob';

export const TodoJobs = ListJob.filter((Job: ListJobProps) => Job.status === 'Todo');
export const ProcessingJobs = ListJob.filter((Job: ListJobProps) => Job.status === 'Processing');
export const DoneJobs = ListJob.filter((Job: ListJobProps) => Job.status === 'Done');
