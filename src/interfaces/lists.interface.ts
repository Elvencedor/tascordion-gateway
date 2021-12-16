import { Observable } from 'rxjs';

export interface ListServiceClient {
  createList: (payload: { title: string }) => Observable<{ data: object }>;
  updateListById: (
    payload: { title: string },
    listId: string,
  ) => Observable<{ data: object }>;
  deleteListById: (listId: string) => Observable<{ data: boolean }>;
}
