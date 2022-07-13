import { useQuery } from 'vue-query';
import { ref, watch } from 'vue';
import { getCurrencies } from '@/api/currencies';
import dayjs from 'dayjs';

export const CURRENCIES_QUERY_KEY = 'currencies';

interface UseCurrenciesInput {
  start?: string;
  end?: string;
}

export function useCurrencies(input: UseCurrenciesInput) {
  const { data, isLoading, error } = useQuery(
    [CURRENCIES_QUERY_KEY, input] as const,
    async ({ queryKey: [_, params] }) => {
      const s = params.start ? dayjs(params.start) : undefined;
      const e = params.end ? dayjs(params.end) : undefined;

      const { data } = await getCurrencies({
        start: s?.isValid() ? s.unix() : undefined,
        end: e?.isValid() ? e.unix() : undefined,
      });
      return data;
    }
  );
  const currencies = ref(data);

  watch(data, (newData) => (currencies.value = newData));

  return {
    currencies,
    isLoading,
    error,
  };
}
