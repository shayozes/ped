<template>
  <BaseCard :title="title" style="height: 91vh">
    <v-list nav>
      <v-list-item-group color="orange darken-2">
        <SidenavItem v-for="item in menuItems" :key="item.id" :box="item"/>
      </v-list-item-group>
    </v-list>
  </BaseCard>
</template>

<script>
import BaseCard from './BaseCard.vue';
import SidenavItem from './SidenavItem.vue';

export default {
  components: {
    SidenavItem,
    BaseCard,
  },
  props: {
    title: {
      type: String,
      default: 'תפריט',
    },
    menuItems: {
      type: Array,
    },
  },
};
</script>

<style scoped>

</style>
