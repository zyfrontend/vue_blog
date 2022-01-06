<template>
  <div class="Footer" :class="{ 'fixed-footer': fixed }">
    <div class="copy-right">
      <a :href="copyright.url">
        {{
          `Copyright © ${copyright.createTime} - 2021 ${copyright.numbering}`
        }}
      </a>
      <div class="technology">本系统由Vue+Muse-UI提供技术支持</div>
    </div>
  </div>
</template>

<script>
import { copyright } from "@/config";
export default {
  name: "Footer",
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      copyright: copyright,
    };
  },
};
</script>

<style lang="less" scoped>
.Footer {
  text-align: center;
  font-size: 0.1rem;
  margin: 30px 0;
  .copy-right {
    color: white;
    a {
      color: inherit;
    }
    .technology {
    }
  }
}
.fixed-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
}
</style>
