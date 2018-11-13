<template>
  <div>
      <div class="login">
           <div class="login-wrap" v-show="showLogin">
			        <h3>登录</h3>
              <p v-show="showTishi">{{tishi}}</p>
              <input type="text" placeholder="请输入用户名" v-model="telephone">
              <input type="password" placeholder="请输入密码" v-model="password">
              <button v-on:click="login">登录</button>
              <span v-on:click="ToRegister">没有账号？马上注册</span>
              <div v-on:click="ToPass" class="topass">忘记密码？</div>
		        </div>

      </div>

		<div class="register" v-show="showRegister">
          <div class="register-wrap" >
              <h3>注册</h3>
              <p v-show="showTishi">{{tishi}}</p>
              <input type="text" placeholder="请输入用户名" v-model="newTelephone">
              <input type="password" placeholder="请输入密码" v-model="newPassword">
              <input type="password" placeholder="请再次输入密码" >
              <button v-on:click="register">注册</button>
              <span v-on:click="ToLogin">已有账号？马上登录</span>
		      </div>

    </div>

    <div class="pass" v-show="showPass">
          <div class="pass-wrap" >
              <h3>忘记密码</h3>
              <p v-show="showTishi">{{tishi}}</p>
              <input type="text" placeholder="请输入用户名" v-model="oldTelephone">
              <input type="password" placeholder="请输入新密码" v-model="oldPassword">
              <input type="password" placeholder="请再次输入密码" v-model="resword" >
              <button v-on:click="forget">提交</button>
               <span v-on:click="ToLogin">马上登录</span>
		      </div>

    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      telephone: "",
      password: "",
      newTelephone: "",
      oldTelephone: "",
      newPassword: "",
      oldPassword: "",
      resword: "",
      tishi: "",
      code: "",
      showTishi: false,
      showLogin: true,
      showRegister: false,
      showPass: false
    };
  },
  methods: {
    login() {
      if (this.telephone == "" || this.password == "") {
        this.tishi = "请输入用户名与密码"
        this.showTishi = true;
      } else {
        let data = { telephone: this.telephone, password: this.password };

        this.$http
          .post("http://47.93.33.135:8080/sys-user/login", data, {
            emulateJSON: true
          })
          .then(res => {
            console.log(res);
            if (res.data.status == 203) {
              this.tishi = res.data.message;
              this.showTishi = true;
            } else if (res.data.status == 203) {
              this.tishi = res.data.message;
              this.showTishi = true;
            } else if (res.data == "admin") {
              this.$router.push("/main");
            } else {
              /*  this.tishi = "登录成功";
              this.showTishi = true; */
              localStorage.setItem("telephone", this.telephone);
              setTimeout(
                function() {
                  this.$router.push({ path: "/main" });
                }.bind(this),
                500
              );
            }
          });
      }
    },
    ToRegister() {
      this.showRegister = true;
      this.showLogin = false;
      this.showPass = false;
    },
    ToLogin() {
      this.showRegister = false;
      this.showPass = false;
      this.showLogin = true;
    },
    ToPass() {
      this.showRegister = false;
      this.showLogin = false;
      this.showPass = true;
    },
    register() {
      if (this.newTelephone == "" || this.newPassword == "") {
        this.tishi = "请输入有效的信息";
        this.showTishi = true;
      } else {
        let data = { telephone: this.newTelephone, password: this.newPassword };
        this.$http
          .post("http://47.93.33.135:8080/sys-user/obtainVerifyCode", data, {
            emulateJSON: true
          })
          .then(res => {
            console.log(res);
            if (res.data.status == 203) {
              this.tishi = res.data.message;
              this.showTishi = true;
            } else if (res.data.status == 200) {
              var code = res.data.data;
              console.log(code);
              let data = {
                telephone: this.newTelephone,
                password: this.newPassword,
                verifyCode: code
              };
              this.$http
                .post("http://47.93.33.135:8080/sys-user/register", data, {
                  emulateJSON: true
                })
                .then(res => {
                  console.log(res);
                  if (res.data.status == 203) {
                    this.tishi = res.data.message;
                    this.showTishi = true;
                  } else if (res.data.status == 200) {
                    setTimeout(
                      function() {
                        this.$router.push({ path: "/main" });
                      }.bind(this),
                      500
                    );
                  }
                });
            }
          });
      }
    },
    forget() {
      if (this.oldPassword !== this.resword) {
        this.tishi = "两次密码输入不一样，请重新输入";
        this.showTishi = true;
      } else {
        let data = { telephone: this.oldTelephone, flag: 1 };
        this.$http
          .post("http://47.93.33.135:8080/sys-user/obtainVerifyCode", data, {
            emulateJSON: true
          })
          .then(res => {
            console.log(res);
            if (res.data.status == 203) {
              this.tishi = res.data.message;
              this.showTishi = true;
            } else if (res.data.status == 200) {
              var code = res.data.data;
              console.log(code);
              let data = {
                telephone: this.oldTelephone,
                password: this.oldPassword,
                verifyCode: code
              };
              this.$http
                .post("http://47.93.33.135:8080/sys-user/forgotPwd", data, {
                  emulateJSON: true
                })
                .then(res => {
                  console.log(res);
                  if (res.data.status == 203) {
                    this.tishi = res.data.message;
                    this.showTishi = true;
                  } else if (res.data.status == 200) {
                    this.showRegister = false;
                    this.showPass = false;
                    this.showLogin = true;
                  }
                });
            }
          });
      }
    }
  },
  created() {}
};
</script>



<style scoped>
.login,
.register,
.pass {
  background: url(../../../statics/imgs/logins.jpg) no-repeat;
  background-size: cover;
  height: 756px;
}

.login-wrap,
.register-wrap,
.pass-wrap {
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -80%);
  width: 100%;
  padding: 30px;
}
.topass {
  cursor: pointer;
  color: #00f;
  margin-top: 12px;
}
input {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}
p {
  color: red;
}
button {
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
  margin-bottom: 20px;
}
span {
  cursor: pointer;
  color: #00f;
}
span:hover {
  color: #41b883;
}
h3 {
  margin: 0;
  padding: 30px;
  color: #fff;
}
</style>


