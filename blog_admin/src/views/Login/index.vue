<template>
  <div class="login">
    <Icon data_icon-name="login" size="600"></Icon>
    <el-card class="card">
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginForm"
        label-position="left"
        class="login-form"
        auto-complete="on"
        validate-on-rule-change
      >
        <div class="title-container">
          <h3>Blog后台管理</h3>
        </div>
        <el-form-item class="form-item" prop="username">
          <el-input
            prefix-icon="el-icon-user"
            type="text"
            placeholder="Username"
            tabindex="1"
            auto-complete="on"
            name="username"
            ref="username"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            prefix-icon="el-icon-lock"
            type="password"
            show-password
            placeholder="Password"
            tabindex="1"
            auto-complete="on"
            name="password"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-button
          @click.native.prevent="handleLogin"
          :loading="loading"
          type="primary"
          style="width: 100%; margin-bottom: 30px"
          >Login</el-button
        >
        <div>还没有账号？<a href="#">注册一个</a></div>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { validUsername } from '@/utils/validate'
import userApi from '@/api/user'
export default {
  name: 'Login',
  data() {
    const validateUsername = (rule, value, callback) => {
      if (!validUsername(value)) {
        callback(new Error('Please enter the username'))
      } else {
        callback()
      }
    }
    const validatePassword = (rule, value, callback) => {
      if (value.length < 3) {
        callback(new Error('The password can not be less than 3 digits'))
      } else {
        callback()
      }
    }
    return {
      loginForm: {
        username: 'admin',
        password: '123456',
      },
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePassword }],
      },
      loading: false, // 登录按钮加载状态
      redirect: undefined,
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true,
    },
  },
  methods: {
    // 登录
    handleLogin() {
      this.$refs.loginForm.validate(async valid => {
        if (valid) {
          this.loading = true
          try {
            const userInfo = await userApi.login({
              username: this.loginForm.username,
              password: this.loginForm.password,
            })
            this.$store.dispatch('user/login', userInfo)
            this.$router.push({ path: this.redirect || '/' })
          } catch (e) {
            console.log(e)
            this.loading = false
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .card {
    margin: 20px;
    text-align: center;
    padding: 20px;
  }
}
</style>
