<template>
  <div class="user-info-form">
    <mu-dialog scrollable title="修改资料" width="500" max-width="90%" :esc-press-close="false" :overlay-close="false" :open.sync="open">
      <mu-form ref="form" :model="validateForm">
        <mu-form-item prop="email" label="Email（用于登录，不可修改）">
          <mu-text-field disabled v-model.trim="validateForm.email" prop="email"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="nickName" label="昵称" :rules="nickNameRules">
          <mu-text-field v-model.trim="validateForm.nickName" prop="nickName"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="password" label="登录密码" :rules="passwordRules">
          <mu-text-field v-model.trim="validateForm.password" prop="password" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="confirmPassword" label="确认密码" :rules="passwordRules">
          <mu-text-field v-model.trim="validateForm.confirmPassword" prop="password" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="Introduction" label="简介" :rules="introductionRules">
          <mu-text-field multi-line :rows="4" full-width v-model.trim="validateForm.Introduction" prop="Introduction"></mu-text-field>
        </mu-form-item>
      </mu-form>
      <mu-button slot="actions" flat small @click="clear">取消</mu-button>
      <mu-button slot="actions" flat small color="primary" @click="submit">注册</mu-button>
    </mu-dialog>
  </div>
</template>

<script>
import { Icon } from '@/utils'
export default {
  props: {
    open: {
      type: Boolean,
      default: false
    },
    userInfo: {
      type: Array,
      default: null
    }
  },
  data(){
    return {
      Icon,
      visibility: false,
      validateForm: {
        email: '',
        nickName: '',
        password: '',
        confirmPassword: '',
        Introduction: '',
      },
      nickNameRules: [
        { validate: (val) => val.length <= 20, message: "昵称最大20个字符！" },
      ],
      passwordRules: [
        { validate: (val) => !!val, message: "密码必填！" },
        {
          validate: (val) => {
            let reg = /^[a-zA-Z]\w{5,19}$/;
            return reg.test(val);
          },
          message: "以字母开头，长度在6~20之间，只能包含字母、数字和下划线！",
        },
      ],
      confirmPasswordRules: [
        { validate: (val) => !!val, message: "请填写确认密码！" },
        {
          validate: (val) => {
            return this.validateForm.password === val;
          },
          message: "密码不一致，请重新输入！",
        },
      ],
      introductionRules: [
        {
          validate: (val) => val.length <= 1000,
          message: "最大1000字符",
        },
      ],
    }
  },
  methods: {
    clear(){
      this.$refs.form.clear()
      this.validateForm = {
        nickName: '',
        password: '',
        confirmPassword: '',
        Introduction: '',
      }
      this.$emit('toggle', false)
    },
    submit(){
      this.$refs.form.validate().then((result) => {
        console.log('from valid', result)
      })
    }
  },
  watch:{
    userInfo(val){
      this.validateForm = {
        ...val,
        password: '',
        confirmPassword: ''
      }
    }
  }
}
</script>

<style lang="less" scoped>

</style>