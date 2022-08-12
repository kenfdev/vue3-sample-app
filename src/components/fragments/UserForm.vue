<template>
  <v-card>
    <v-card-title>
      <span class="text-h5">User Profile</span>
    </v-card-title>
    <v-card-text>
      <v-form ref="form">
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field label="Username*" v-model="username" :error-messages="errors.username"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="First Name*" v-model="firstName" :error-messages="errors.firstName"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Last Name*" v-model="lastName" :error-messages="errors.lastName">
              </v-text-field>
            </v-col>
            <v-col cols="12">
              <datepicker v-model="birthDate" text-input :format="'yyyy/MM/dd'"
                :month-change-on-scroll="false"></datepicker>
              <v-messages :active="!!errors" class="text-red" :messages="errors.birthDate"></v-messages>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Email*" v-model="email" :error-messages="errors.email"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field label="Phone" type="tel" v-model="phone" :error-messages="errors.phone"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
      <small>*indicates required field</small>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue-darken-1" text @click="() => $emit('cancel')">
        Close
      </v-btn>
      <v-btn color="blue-darken-1" text @click="onSave">
        Save
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { UserCreateInput } from '@/api/users';
import { useForm, useField } from 'vee-validate';
import * as zod from 'zod';
import { toFormValidator } from '@vee-validate/zod';
import Datepicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

interface UserForm {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: Date;
}

const { errors, validate } = useForm<UserForm>({
  validationSchema: toFormValidator(zod.object({
    username: zod.string({ required_error: 'Username is required' }).min(6, 'Username must be longer than 6 characters'),
    firstName: zod.string({ required_error: 'First Name is required' }),
    lastName: zod.string({ required_error: 'Last Name is required' }),
    birthDate: zod.date({ required_error: 'Birth Date is required' }).max(new Date(), 'Cannot specify future date'),
    email: zod.string({ required_error: 'Email is required' }).email('Enter a valid Email'),
    phone: zod.string().optional()
  }))
});

const form = ref<HTMLFormElement | null>(null)

const { value: username } = useField<string>('username');
const { value: firstName } = useField<string>('firstName');
const { value: lastName } = useField<string>('lastName');
const { value: email } = useField<string>('email');
const { value: birthDate } = useField<Date>('birthDate');
const { value: phone } = useField<string>('phone');

const emit = defineEmits<{ (e: 'cancel'): void, (e: 'submit', user: UserCreateInput): void }>()

const onSave = async () => {
  const result = await validate()
  console.log('result', result);
  console.log('date', birthDate.value);
  if (!result.valid) return

  const userInput = { username: username.value, firstName: firstName.value, lastName: lastName.value, email: email.value, phone: phone.value };
  emit('submit', userInput)
}

</script>

<style scoped>
</style>