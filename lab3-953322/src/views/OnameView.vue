<template>
  <div class="events">
    <h1>Events For Good</h1>

    <OnameCard v-for="author in events" :key="author.id" :author="author" />
  </div>
</template>

<script>
// @ is an alias to /src
import OnameCard from '@/components/Oname.vue'
export default {
  name: 'HomeView',
  components: {
    OnameCard
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
