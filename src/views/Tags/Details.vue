<template>
  <div
    class="detail common"
    :style="{
      background: `url('${categoriesImage}') center center/cover no-repeat`,
    }"
  >
    <Header :light-index="3" backgroundIndex="transparent"></Header>
    <div v-if="isPC">
      <Footer fixed></Footer>
    </div>

    <div class="content">
      <mu-paper v-if="isPC" class="pc-box" :z-depth="5">
        <mu-list>
          <div class="sub-title">标签-技术（100）</div>
          <mu-list-item button>
            <mu-list-item-title class="item">
              <span class="title">文章标题</span>
              <span>2022年1月9日</span>
            </mu-list-item-title>
            <mu-list-item-action></mu-list-item-action>
          </mu-list-item>
        </mu-list>
        <div class="pagination">
          <mu-pagination
            raised
            circle
            :total="100"
            :current.sync="page"
            :pageSize.sync="pageSize"
          ></mu-pagination>
        </div>
      </mu-paper>
      <div class="wap-box" v-else>
        <!-- <div class="sub-title">分类-技术（100）</div>   -->
        <mu-list>
          <div class="sub-title">标签-技术（100）</div>
          <mu-list-item button>
            <mu-list-item-title class="item">
              <span class="title">文章标题</span>
              <span>2022年1月9日</span>
            </mu-list-item-title>
            <mu-list-item-action></mu-list-item-action>
          </mu-list-item>
        </mu-list>
        <Footer></Footer>
      </div>
      <mu-button
        v-show="!isPC"
        small
        fab
        color="#fff"
        class="back-fab"
        @click="$router.go(-1)"
      >
        <mu-icon color="#ccc" value="arrow_back"></mu-icon>
      </mu-button>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "tagsdetails",
  components: {
    Header,
    Footer,
  },
  data() {
    return {
      page: 1,
      pageSize: this.isPC ? 10 : 15,
      list: [],
      info: {
        list: [],
      },
      categoriesImage:
        "https://zyfullstack-images.oss-cn-shanghai.aliyuncs.com/img/202201051132952.png",
    };
  },
};
</script>

<style lang="less" scoped>
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
}
</style>