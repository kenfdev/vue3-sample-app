<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <v-checkbox v-model="isCurrency1Enabled" label="Currency 1"></v-checkbox>
        <v-checkbox v-model="isCurrency2Enabled" label="Currency 2"></v-checkbox>
        <v-text-field label="Start Date" placeholder="Start Date" :model-value="startDate"
          @update:model-value="handleStartDate"></v-text-field>
        <v-text-field label="End Date" placeholder="End Date" :model-value="endDate"
          @update:model-value="handleEndDate"></v-text-field>
      </v-col>
      <v-col cols="10">
        <apexchart width="100%" type="line" :options="options" :series="series" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { CurrencyData } from '@/shared/models/currency';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import dayjs from 'dayjs';
import { ref, watch } from 'vue';
import Apexchart from 'vue3-apexcharts';

dayjs.extend(customParseFormat);

const emit = defineEmits<{ (e: 'changeStartDate', val: string): void, (e: 'changeEndDate', val: string): void }>();
const { currencies, startDate, endDate } = defineProps<{ currencies: CurrencyData[] | undefined, startDate: string | undefined, endDate: string }>();

const handleStartDate = (value: string) => {
  console.log('value', value)
  if (dayjs(value, 'YYYY/MM/DD', true).isValid()) {
    emit('changeStartDate', value)
  }
}
const handleEndDate = (value: string) => {
  if (dayjs(value, 'YYYY/MM/DD', true).isValid()) {
    emit('changeEndDate', value)
  }
}

function createSeries(currencies: CurrencyData[] | undefined, isCurrency1Enabled: boolean, isCurrency2Enabled: boolean) {
  const currency1 = currencies?.map(v => [v.timestamp, v.currency1])
  const currency2 = currencies?.map(v => [v.timestamp, v.currency2])

  const series = [];
  if (isCurrency1Enabled) {
    series.push({
      name: 'Currency 1',
      data: currency1
    })
  }
  if (isCurrency2Enabled) {
    series.push({
      name: 'Currency 2',
      data: currency2
    })
  }
  return series;
}

const isCurrency1Enabled = ref(true);
const isCurrency2Enabled = ref(true);

const series = ref(createSeries(currencies, isCurrency1Enabled.value, isCurrency2Enabled.value));

watch(isCurrency1Enabled, (isEnabled) => {
  series.value = createSeries(currencies, isEnabled, isCurrency2Enabled.value)
})

watch(isCurrency2Enabled, (isEnabled) => {
  series.value = createSeries(currencies, isCurrency1Enabled.value, isEnabled)
})

const options = ref({
  chart: { id: 'currency-chart' },
  xaxis: {
    title: { text: 'Date' },
    type: 'datetime'
  },
  colors: ['#ddaaaa', '#aaddaa'],

  yaxis: {
    title: { text: 'Amount' }
  },
})

</script>

<style scoped>
</style>