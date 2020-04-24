<template>
  <div class="pa-2" style="height: 20vh">
    <h3>נושא: {{mailItem.title}}</h3>
    <v-divider/>
    <p>נשלח על ידי: {{mailItem.from}}</p>
    <p>תוכן: {{mailItem.content}}</p>
  </div>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
  name: 'ExtraContent',
  computed: {
    ...mapGetters({
      mailItem: 'getSelectedMailItem',
    }),
  },
};
</script>

<style scoped>

</style>
