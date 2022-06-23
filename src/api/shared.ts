export interface PagingResponse<T = any> {
  meta: {
    currentPage: number;
    nextPage: number | null;
  };
  data: T;
}
