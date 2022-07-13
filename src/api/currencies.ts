import { CurrencyData } from '@/shared/models/currency';
import dayjs from 'dayjs';
import axios from './client';
import { Response } from './shared';

interface GetCurrencyInput {
  start?: number;
  end?: number;
}

interface CurrencyResponse {
  currency1: number;
  currency2: number;
  timestamp: number;
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

  const { data } = await axios.get<CurrencyResponse[]>(
    `/currencies?_sort=timestamp&_order=asc${params}`
  );

  return {
    data: data.map((v) => ({
      currency1: v.currency1,
      currency2: v.currency2,
      timestamp: v.timestamp,
    })),
  };
}
