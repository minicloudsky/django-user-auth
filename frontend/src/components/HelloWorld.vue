<template>
  <div class="hello">
   <el-container>
     <el-header> <h1>{{ msg }}</h1></el-header>
  <el-main><el-button type="text" @click="dialogVisible = true">注册</el-button>

<el-dialog
  title="提示"
  :visible.sync="dialogVisible"
  width="30%"
  :before-close="handleClose">
  <span>请填写信息</span>
  <el-input v-model="username" placeholder="请输入用户名"></el-input>
  <el-input v-model="email" placeholder="请输入邮箱"></el-input>
  <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
  <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="register">确 定</el-button>
  </span>
</el-dialog></el-main>
  <el-footer>Footer</el-footer>
</el-container>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      dialogVisible: false,
      username: '',
      password: '',
      email: '',
      data: {}
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    },
    register () {
      let data = {
        username: this.username,
        password: this.password,
        email: this.email
      }
      this.api.user.register(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
