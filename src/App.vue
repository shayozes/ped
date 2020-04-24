<template>
  <v-app>
    <v-content class="indigo lighten-4">
      <v-container fluid fill-height>
        <v-layout row fill-height>
          <v-flex md2 flex-grow-0>
            <Sidenav :menuItems="boxes"/>
          </v-flex>
          <v-flex md10>
            <MainContent/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import moment from 'moment';
import Sidenav from './components/Sidenav.vue';
import MainContent from './components/MainContent.vue';

export default {
  name: 'App',
  components: {
    MainContent,
    Sidenav,
  },
  created() {
    moment.locale('he');
  },
  data: () => ({
    boxes: [
      {
        id: 'Inbox',
        name: 'דואר נכנס',
        showExtraContent: true,
      },
      {
        id: 'Outbox',
        name: 'דואר יוצא',
        showExtraContent: true,
      },
      {
        id: 'JunkEmail',
        name: 'דואר זבל',
        showExtraContent: false,
      },
      {
        id: 'NewMailForm',
        name: 'שלח מייל',
        showExtraContent: false,
      },
    ],
  }),
};
</script>

<style scoped>

</style>
