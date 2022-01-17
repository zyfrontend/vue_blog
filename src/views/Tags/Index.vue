<template>
  <div
    class="tags common"
    :style="{
      background: `url('${tagsImage}') center center/cover no-repeat`,
    }"
  >
    <Header :light-index="4" backgroundIndex="transparent"></Header>
    <Footer fixed></Footer>
    <div class="content">
      <div class="tags-wap tagcloud">
        <router-link
          :to="{ name: 'tagsdetails', query: { id: item.name } }"
          v-for="item in tags"
          :key="item.name"
        >
          <mu-chip :color="item.color" v-if="item.articleNum > 0" class="tag"
            >{{ item.name }}({{ item.articleNum }})</mu-chip
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { randomColor } from "@/utils";
export default {
  name: "tags",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      tagsImage:
        "https://zyfullstack-images.oss-cn-shanghai.aliyuncs.com/img/202201051132952.png",
      tags: [
        { name: "Vue", articleNum: 10, color: randomColor() },
        { name: "React", articleNum: 10, color: randomColor() },
        { name: "JavaScript", articleNum: 10, color: randomColor() },
        { name: "TypeScript", articleNum: 10, color: randomColor() },
      ],
    };
  },
  mounted() {
    window.tagcloud({
      selector: ".tagcloud", //元素选择器
      fontsize: 16, //基本字体大小, 单位px
      radius: 100, //滚动半径, 单位px
      mspeed: "normal", //滚动最大速度, 取值: slow, normal(默认), fast
      ispeed: "normal", //滚动初速度, 取值: slow, normal(默认), fast
      direction: 135, //初始滚动方向, 取值角度(顺时针360): 0对应top, 90对应left, 135对应right-bottom(默认)...
      keep: false, //鼠标移出组件后是否继续随鼠标滚动, 取值: false, true(默认) 对应 减速至初速度滚动, 随鼠标滚动
    });
  },
};
</script>

<style lang="less" scoped>
.tags {
  .content {
    padding-top: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    .tags-wap {
      padding: 0 0.53333rem;
      width: 70%;
      .tag {
        margin-right: 0.5333rem;
        margin-bottom: 0.5333rem;
      }
    }
  }
}
</style>