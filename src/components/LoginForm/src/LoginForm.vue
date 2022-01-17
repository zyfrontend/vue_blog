<template>
  <div class="login-form">
    <mu-dialog scrollable title="登录" width="500" max-width="90%" :esc-press-close="false" :overlay-close="false" :open.sync="open">
      <mu-form ref="form" :model="validateForm">
        <mu-form-item prop="email" label="Email（必填）" :rules="emailRules">
          <mu-text-field v-model="validateForm.email" prop="email"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="password" label="密码（必填）" :rules="passwordRules">
          <mu-text-field v-model.trim="validateForm.password" prop="password" :action-icon="visibility ? 'visibility_off' : 'visibility'" :action-click="() => (visibility = !visibility)" :type="visibility ? 'text' : 'password'"></mu-text-field>
        </mu-form-item>
        <mu-form-item prop="captcha" label="验证码（必填）" :rules="captchaRules">
          <mu-text-field v-model="validateForm.captcha" prop="captcha"></mu-text-field>
          <div class="captcha">1111</div>
        </mu-form-item>
      </mu-form>
      <mu-button slot="actions" flat>
        <mu-avatar :size="30" style="margin-right: 10px">
          <img :src="Icon.github" alt="">
        </mu-avatar>
        github
      </mu-button>
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
    }
  },
  data(){
    return {
      Icon,
      visibility: false,
      validateForm: {
        email: '',
        password: '',
        captcha: ''
      },
      emailRules: [
        { validate: (val) => !!val, message: "邮箱必填！" }
      ],
      passwordRules: [
        { validate: (val) => !!val, message: "密码必填！" }
      ],
      captchaRules: [{ validate: (val) => !!val, message: "请输入验证码" }],
      }
  },
  methods: {
    clear(){
      this.$refs.form.clear()
      this.validateForm = {
        email: '',
        password: '',
        captcha: ''
      }
      this.$emit('toggle', false)
    },
    submit(){
      this.$refs.form.validate().then((result) => {
        console.log('from valid', result)
      })
    }
  }
}
</script>

<style lang="less" scoped>

</style>