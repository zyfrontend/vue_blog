<template>
  <div class="user">
    <mu-card class="slider-card">
      <mu-button color="grey600" class="edit" icon @click="updateUserInfoModal = true">
        <mu-icon value="edit" left></mu-icon>
      </mu-button>
      <mu-avatar class="avatar" size="100">
        <img v-lazy="userInfo.avatar" alt="" />
        <input type="file" class="file" accept="image/*" @change="uploadFile"/>
      </mu-avatar>
      <div class="title">{{ userInfo.nickName }}</div>
      <div class="email">{{ userInfo.email }}</div>
      <div class="desc">{{ userInfo.Introduction }}</div>
    </mu-card>
    <UpdateUserForm :userInfo="userInfo" :open="updateUserInfoModal" @toggle="toggleUpdateModal"></UpdateUserForm>
    <div class="right">
      <mu-appbar class="title-bar">
        <mu-button icon slot="left" @click="$router.go(-1)">
          <mu-icon value="arrow_back" left></mu-icon> </mu-button
        >我的收藏
        <mu-menu slot="right" open-on-hover>
          <mu-button icon>
            <mu-icon value="menu"></mu-icon>
          </mu-button>
          <mu-list slot="content">
            <mu-list-item button @click="cancelCollect(null)">
              <mu-list-item-title>一键取消</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-menu>
      </mu-appbar>
      <div class="wrapper">
        <div class="card-box" v-if="!collectList && !collectList.length > 0">
          <mu-card class="card" v-for="item in collectList" :key="item._id">
            <mu-card-media :title="item.title">
              <img
                :src="item.cover"
                alt=""
              />
            </mu-card-media>
            <mu-card-text @click="goDetail(item)"> {{item.introduction}} </mu-card-text>
            <mu-card-actions class="action">
              <mu-button flat color="pink500" left @click="cancelCollect(item._id)">
                <mu-icon value="remove_circle">取消</mu-icon>
              </mu-button>
              <mu-button flat color="primary" right @click="licke(item._id)">
                <mu-icon value="thumb_up">点赞</mu-icon>
              </mu-button>
            </mu-card-actions>
          </mu-card>
        </div>
        <NotFound v-else></NotFound>
      </div>
    </div>
  </div>
</template>

<script>
import UpdateUserForm from "@/components/UpdateUserForm";
import NotFound from "@/components/NotFound";
export default {
  name: "user",
  components: {
    UpdateUserForm,
    NotFound
  },
  data() {
    return {
      // email: JSON.parse(localStorage.getItem('user')).email,
      collectList: [
        {
          categories: "技术",
          collect: 0,
          comment: 0,
          content:
            "### 1.toRefs↵把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref↵↵`应用`: ",
          cover: "http://nevergiveupt.top/vue/vue_composition_api.jpeg",
          createTime: 1611739740,
          introduction:
            "toRefs把一个响应式对象转换成普通对象，该普通对象的每个 property 都是一个 ref ，和响应式对象 property 一一对应。",
          isCollect: true,
          isComment: true,
          isLike: true,
          isReward: false,
          like: 0,
          publishStatus: 1,
          sort: 0,
          status: 1,
          tags: ["Vue"],
          title:
            "Vue3.x-toRefs & shallowReactive & shallowRef & shallowReadonly",
          updateTime: 1611739813,
          views: 5,
          _id: "6011325cc4ae0128013d3210",
        },
      ],
      userInfo: {
        avatar:
          "https://zyfullstack-images.oss-cn-shanghai.aliyuncs.com/img/202201101407139.png",
        nickName: "frontendzy",
        email: "frontendzy@gmail.com",
        Introduction: "描述简介",
      },
      updateUserInfoModal: false
    };
  },
  mounted() {
    // if(!this.email){
    //   return this.$router.push('/articles')
    // }
    this.userInfo = {
      avatar:
          "https://zyfullstack-images.oss-cn-shanghai.aliyuncs.com/img/202201101407139.png",
              nickName: "frontendzy",
          email: "frontendzy@gmail.com",
      Introduction: "描述简介",
    }
  },
  methods: {
    uploadFile(e){
      console.log(e);
    },
    goDetail(item){
      this.$router.push({
        name: 'articleDetails',
        query: {
          id: item._id
        }
      })
    },
    cancelCollect(){},
    licke(){},
    toggleUpdateModal(bool){
      this.updateUserInfoModal = bool
    }
  }
};
</script>

<style lang="less" scoped>
.user {
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  .slider-card {
    width: 2rem;
    position: relative;
    text-align: center;
    padding: 16px;
    border-radius: 0;
    .edit {
      position: absolute;
      top: 20px;
      right: 90px;
    }
    .avatar {
      cursor: pointer;
      margin-top: 20px;
      box-shadow: 0 3px 3px -2px rgba(0, 0, 0, 0.2),
        0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12);
    }
    .file {
      width: 100px;
      height: 100px;
      opacity: 0;
      position: absolute;
      cursor: pointer;
    }
  }
  .title {
    font-size: 20px;
    color: #00e676;
  }
  .email {
    font-size: 16px;
  }
  .desc {
    font-size: 14px;
    margin: 10px 0;
    text-align: left;
  }
  .right {
    flex: 1;
    .wrapper {
      padding-left: 5%;
      padding-top: 90px;
      .card-box {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
      }
      .card {
        width: 100%;
        margin-right: 4%;
        margin-bottom: 20px;
        max-width: 3rem;
        .mu-card-media {
          img {
            height: 2.5rem;
          }
        }
      }
    }
    .action {
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>
