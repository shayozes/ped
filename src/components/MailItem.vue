<template>
  <v-list-item @click="chooseMailItem(mailItem)">
    <v-list-item-content>
      <v-list-item-title class="text--primary" v-text="mailItem.from"/>
      <v-list-item-subtitle v-text="mailItem.title"/>
      <v-list-item-subtitle>{{mailItem.content | shorten}}</v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <v-list-item-action-text v-text="time"/>
      <v-btn icon @click.stop="favorite = !favorite">
        <v-icon v-if="favorite" color="yellow">mdi-star</v-icon>
        <v-icon v-else color="grey">mdi-star-outline</v-icon>
      </v-btn>
    </v-list-item-action>
  </v-list-item>
</template>

<script>
import moment from 'moment';

export default {
  name: 'MailItem',
  data() {
    return {
      mailItem: this.item,
      time: moment(new Date(this.item.sent))
        .fromNow(),
      favorite: false,
    };
  },
  filters: {
    shorten(text) {
      let shortenText = text;
      if (shortenText.length > 40) {
        shortenText = shortenText.substring(0, 40)
          .concat('...');
      }

      return shortenText;
    },
  },
  methods: {
    chooseMailItem(mailItem) {
      this.$store.commit('updateMailItem', mailItem);
    },
  },
  props: {
    item: {
      type: Object,
    },
  },
};
</script>

<style scoped>

</style>
