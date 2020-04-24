<template>
  <v-list-item :to="box.id">
    <v-list-item-content>
      <div>{{box.name}}</div>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  name: 'NavOption',
  props: {
    box: {
      type: Object,
    },
    id: {
      type: String,
    },
  },
};
</script>

<style scoped>

</style>
