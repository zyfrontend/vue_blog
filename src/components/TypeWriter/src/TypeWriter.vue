<template>
  <div class="type-writer">
    <div class="type-text">{{ info.introduction }}</div>
  </div>
</template>

<script>
let i = 0;
let timer = null;
export default {
  name: "TypeWriter",
  props: ["introductionTarget"],
  data() {
    return {
      info: {
        introduction: "",
      },
    };
  },
  mounted() {
    this.typing();
  },
  methods: {
    typing() {
      if (i <= this.introductionTarget.length) {
        this.info.introduction = this.introductionTarget.slice(0, i++) + "_";
        timer = setTimeout(this.typing, 100);
      } else {
        this.info.introduction = this.introductionTarget;
        clearTimeout(timer);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.type-writer {
  .type-text {
    color: #fff;
    font-weight: 500;
    font-size: 0.2rem;
  }
}
</style>
