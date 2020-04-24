<template>
  <v-list two-line style="height: 80vh" class="overflow-y-auto">
    <v-list-item-group>
      <div v-for="(item, index) in mailItems" :key="item.id">
        <MailItem :item="item"/>
        <v-divider v-if="index !== mailItems.length - 1"/>
      </div>
    </v-list-item-group>
  </v-list>
</template>

<script>
import { mapGetters } from 'vuex';
import MailItem from './MailItem.vue';

export default {
  name: 'JunkEmail',
  components: {
    MailItem,
  },
  computed: {
    ...mapGetters({
      mailItems: 'getJunkItems',
    }),
  },
};
</script>

<style scoped>

</style>
