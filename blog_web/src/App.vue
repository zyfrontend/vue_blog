<template>
  <div id="app">
    <Header></Header>
    <BackgroundDefault></BackgroundDefault>
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { BackgroundDefault } from '@/components/Background'
export default {
  name: 'Home',
  components: {
    Header,
    BackgroundDefault,
    Footer,
  },
}
</script>
