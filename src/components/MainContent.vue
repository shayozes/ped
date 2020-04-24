<template>
  <v-layout column>
    <BaseCard :title="$route.meta.title">
      <router-view/>
    </BaseCard>
    <BaseCard v-if="$route.meta.showExtraContent" title="מידע נוסף" class="flex md-2">
      <ExtraContent/>
    </BaseCard>
  </v-layout>
</template>

<script>
import BaseCard from './BaseCard.vue';
import ExtraContent from './ExtraContent.vue';

export default {
  name: 'Content',
  components: {
    ExtraContent,
    BaseCard,
  },
};
</script>

<style scoped>

</style>
