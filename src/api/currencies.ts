import { CurrencyData } from '@/shared/models/currency';
import axios from './client';
import { Response } from './shared';

interface GetCurrencyInput {
  start?: number;
  end?: number;
}

export async function getCurrencies({
  start,
  end,
}: GetCurrencyInput): Promise<Response<CurrencyData[]>> {
  const filters = [];
  if (start !== undefined) {
    filters.push(`timestamp_gte=${start}`);
  }
  if (end !== undefined) {
    filters.push(`timestamp_lte=${end}`);
  }

  let params = filters.length > 0 ? `&${filters.join('&')}` : '';

  const { data } = await axios.get<CurrencyData[]>(
    `/currencies?_sort=timestamp&_order=asc${params}`
  );

  return {
    data,
  };
}
