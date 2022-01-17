<template>
  <div class="comment clearfix">
    <mu-card-text></mu-card-text>
    <mu-text-field placeholder="说点什么..." class="comment-input" v-model="content" multi-line :rows="4" full-width></mu-text-field>
    <mu-button @click="submit" class="comment-btn" color="primary">评论</mu-button>
    <mu-dialog title="提示" width="600" :open.sync="openAlert" :esc-press-close="false" :overlay-colse="false">
      评论内容需要审核，大约24小时。您确定继续操作吗？
      <mu-button slot="actions" flat color="primary" @click="ok(false)">取消</mu-button>
      <mu-button slot="actions" flat color="primary" @click="ok(true)">确定</mu-button>
    </mu-dialog>
  </div>
</template>

<script>
export default {
  props: {
    commentSuccess: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      content: '',
      openAlert: false
    }
  },
  methods: {
    submit(){
      if(this.content){
        this.openAlert = true
      }else{
        this.$toast.info('请输入评论内容')
      }
    },
    ok(bool){
      if(bool){
        console.log(111);
        this.$emit('comment', {
          content: this.content
          // 用户信息
        })
      }else{
        this.openAlert = false
        this.content = '';
      }
    }
  },
  watch: {
    // 评论成功后将弹窗关闭
    commentSuccess(val){
      if(val){
        this.openAlert = false
        this.content = '';
      }
    }
  }
}
</script>

<style lang="less" scoped> 
.comment {
  .comment-input {
    padding: 0 0.1rem;
  }
  .comment-btn {
    float: right;
    margin: 0 0.1rem 0.1rem 0;
  }
}
</style>