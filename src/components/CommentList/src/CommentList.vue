<template>
  <div class="comment-list">
    <div class="comment-item">
      <mu-card class="card" :class="[classStyle, isPC? '':'wap-card']" v-for="item in list" :key="item._id">
        <mu-card-header :title="item.nickName" :sub-title="item.commentTime | filterDate">
          <mu-avatar slot="avatar">
            <img :src="item.avatar" alt="">
          </mu-avatar>
        </mu-card-header>
        <mu-card-text>
          <span v-if="prevWho" class="who">@{{prevWho}}</span>
          {{item.currentReplayContent}}
          <mu-badge v-if="item.auditStatus == 3" content="未审核" color="#ccc"></mu-badge>
        </mu-card-text>
        <mu-card-actions v-if="user && user.nickName !== item.nickName && user.email !== item.email"><mu-button @click="replay(item)" small color="primary">回复</mu-button></mu-card-actions>
        <div v-if="item.children">
          <!-- 自己调自己 必须有name -->
          <comment-list classStyle="sub-card" :list="item.children" :articleId="articleId" :articleTitle="articleTitle" :prevWho="item.nickName">
          </comment-list>
        </div>
      </mu-card>
    </div>
    <mu-dialog :title="modalTitle" width="600" max-width="80%" :open.sync="open" :esc-press-close="false" :overlay-close="false">
            <mu-text-field v-model="replayConent" placeholder="说点什么..." multi-line :rows="4" full-width></mu-text-field>
            <mu-button slot="actions" flat color="primary" @click="close">取消</mu-button>
            <mu-button slot="actions" flat color="primary" @click="ok">确定</mu-button>
    </mu-dialog>
  </div>
</template>

<script>
export default {
  // <!-- 自己调自己 必须有name -->
  name: 'commentList',
  props: {
    list: {
      type: Array,
    },
    articleId: {
      type: Number,
    },
    articleTitle: {
      type: String,
      default: ''
    },
    classStyle: {
      type: String,
      default: ''
    },
    prevWho: {
      type: String,
      default: ''
    }
  },
  data(){
    return {
      user: JSON.parse(localStorage.getItem('user')),
      open: false,
      modalTitle: '',
      replayConent: ''
    }
  },
  methods: {
    replay(item){
      if(!item.user){
        this.$toast.info('登录才能回复');
        
        return;
      }else{
        this.open = true
      }
    },
    close(){
      this.open = false;
      this.replayConent = ''
    },
    ok(){
      if(!this.replayConent){
        this.$toast.info('请输入评论内容')
        return;
      }
    }
  }
}
</script>

<style lang="less" scoped> 
.comment-list {
  padding-bottom: 0.2rem;
  /deep/ .mu-card-text {
    padding-top: 0;
    .who {
      color: #e91e63;

    }
  }
  .card {
    margin: 0.2rem 0.5rem 0 0.5rem;
    padding-bottom: 0.2rem;
    box-shadow: none;
    border-radius: 0;
  }
  .wap-card {
    margin: 4px 10px 0 10px;
  }
  .sub-card {
    border-left: 1px dashed #00e676;
    border-bottom: 1px dashed #00e676;
    box-shadow: none;
    border-radius: 0;
  }
}

</style>