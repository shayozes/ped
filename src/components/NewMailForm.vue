<template>
  <v-form style="height: 80vh">
    <v-container>
      <ValidationObserver ref="form" v-slot="{ invalid, handleSubmit }">
        <form @submit.prevent="handleSubmit(onSubmit)">
          <v-row>
            <v-col cols="12">
              <ValidationProvider
                v-slot="props"
                :rules="{ required: true,
                          max:20,
                          regex: /([A-Za-z0-9]*[A-Za-z][A-Za-z0-9]*)/, }"
              >
                <v-text-field
                  v-model="sendTo"
                  lable="שלח ל"
                  :counter="20"
                  placeholder="אח יקר, סבתא, או אולי אהובתך"
                  :error-messages="props.errors"/>
              </ValidationProvider>
            </v-col>
            <v-col cols="12">
              <ValidationProvider v-slot="{ errors }"
                                  :rules="{ required: true, max:40}">
                <v-text-field
                  v-model="title"
                  lable="נושא"
                  :counter="40"
                  placeholder="הכותרת של המייל"
                  :error-messages="errors"/>
              </ValidationProvider>
            </v-col>
            <v-col cols="12">
              <ValidationProvider v-slot="{ errors }"
                                  :rules="{ required: true, max:200}">
                <v-textarea v-model="mailContent"
                            :counter="200"
                            rows="8"
                            label="תוכן"
                            :error-messages="errors"/>
              </ValidationProvider>
            </v-col>
          </v-row>
          <v-row>
            <v-spacer/>
            <v-btn :disabled="invalid"
                   type="submit"
                   class="ma-2"
                   color="orange darken-1"
            >
              שלח
            </v-btn>
          </v-row>
        </form>
      </ValidationObserver>
    </v-container>
  </v-form>
</template>

<script>
import {
  ValidationObserver,
  ValidationProvider,
  extend,
} from 'vee-validate/dist/vee-validate.full';
import {
  required, regex, max,
} from 'vee-validate/dist/rules';

export default {
  name: 'NewMailForm',
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  methods: {
    onSubmit() {
      this.$store.commit('addMail', {
        box: 'outbox',
        id: 525,
        title: this.title,
        sent: Date.now(),
        from: 'Me',
        content: this.mailContent,
      });

      this.$router.push('/Outbox');
    },
  },
  mounted() {
    extend('required', {
      ...required,
      message: 'שדה חובה',
    });
    extend('regex', {
      ...regex,
      message: 'שדה חייב להכיל גם אותיות',
    });
    extend('max', {
      ...max,
      params: ['length'],
      message: 'חייב להכיל מקסימום של {length} תווים',
    });
  },
  data() {
    return {
      sendTo: '',
      mailContent: '',
      title: '',
    };
  },
};
</script>

<style scoped>

</style>
