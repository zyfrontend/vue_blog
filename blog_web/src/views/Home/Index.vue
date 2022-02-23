<template>
  <div class="home">
    <Background></Background>
  </div>
</template>

<script>
import { Background } from '@/components/Background'
export default {
  name: 'Home',
  components: {
    Background,
  },
  mounted() {
    this.$store.commit('switchLight', 0)
  },
}
</script>
