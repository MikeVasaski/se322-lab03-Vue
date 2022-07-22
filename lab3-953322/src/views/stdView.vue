<template>
  <div class="events">
    <h1>Students Information</h1>

    <STDCard v-for="stdInfo in events" :key="stdInfo.id" :stdInfo="stdInfo" />
  </div>
</template>

<script>
// @ is an alias to /src
import STDCard from '@/components/stdView.vue'
export default {
  name: 'HomeView',
  components: {
    STDCard
  }
}
</script>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
