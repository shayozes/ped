<template>
  <v-card class="ma-3" height="100%">
    <v-toolbar class="indigo lighten-1">
      <v-toolbar-title class="white--text" v-text="title"/>
    </v-toolbar>
    <slot/>
  </v-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
</style>
