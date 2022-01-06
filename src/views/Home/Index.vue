<template>
  <div class="home">
    <Header backgroundIndex="transparent"></Header>
    <!--  背景  -->
    <IndexAnimation></IndexAnimation>
    <div class="common">
      <!-- 打字机效果 -->
      <TypeWriter :introductionTarget="this.introductionTarget" />
    </div>
    <Footer fixed></Footer>
  </div>
</template>

<script>
import IndexAnimation from "@/components/IndexAnimation";
import TypeWriter from "@/components/TypeWriter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "home",
  components: {
    TypeWriter,
    Header,
    IndexAnimation,
    Footer,
  },
  data() {
    return {
      introductionTarget: "This is my blog.",
    };
  },
};
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
  .common {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
