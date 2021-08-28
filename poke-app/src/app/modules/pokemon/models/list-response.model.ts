import { ResultList } from './result-list.model';

export interface ListResponse {
  count: number;
  next: string;
  previous: string;
  results: ResultList[];
}
