export interface PagingResponse<T = any> extends Response<T> {
  meta: {
    currentPage: number;
    nextPage: number | null;
  };
}

export interface Response<T = any> {
  data: T;
}

export function checkHasNextPage(headers: Record<string, string>): boolean {
  return headers.link.includes('rel="next"');
}
