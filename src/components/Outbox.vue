<template>
  <v-list two-line style="height: 45vh" class="overflow-y-auto">
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
import MailboxMixin from '../mixins/MailboxMixin';

export default {
  name: 'Outbox',
  mixins: [MailboxMixin],
  components: {
    MailItem,
  },
  computed: {
    ...mapGetters({
      mailItems: 'getOutboxItems',
    }),
  },
};
</script>

<style scoped>

</style>
