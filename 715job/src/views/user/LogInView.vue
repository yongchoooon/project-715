<template>
  <div class="body">
    <div class="main">
      <div class="loginHead">로그인</div>
      <div class="loginContents">
          <div class="idBox">
            <v-text-field type="text" id="id" class="v_text_input" v-model="user.userid" label="아이디" autocomplete='off'></v-text-field>
          </div>
          <div class="passwordBox">
            <v-text-field
              id="password"
              class="v_text_input"
              v-model="user.password"
              label="비밀번호"
              type="password"
              @keypress.enter="logIn"
            ></v-text-field>
          </div>
          <div class="loginButton">
            <button @click="logIn">로그인</button>
          </div>
        <div class="findButtons">
          <ul class="findButtonLists">
            <li><router-link to="/user/findid">아이디 찾기</router-link></li>
            <li>|</li>
            <li><router-link to="/user/findpwd">비밀번호 찾기</router-link></li>
            <li>|</li>
            <li><router-link to="/user/signup">회원가입</router-link></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    return {
      user: {
        userid: '',
        password: ''
      }
    }
  },
  methods: {
    clickLogin() {

    },
    logIn(event) {
      axios.post('/api/users/logIn', {
        user: this.user
      })
        .then((res) => {
          if (res.data.success === true) {
            // 로그인 성공
            this.$router.push('/')
          }
          if (res.data.success === false) {
            // 로그인 실패
            alert(res.data.message)
          }
        })
        .catch((err) => {
          alert(err)
        })
    }
  }
}
</script>

<style scoped>
* {
  text-decoration: none;
  color: #000;
  list-style: none;
}
a:link,
a:visited {
  color: black;
}
.main {
  width: 900px;
  height: 900px;
  margin: auto;
}
.v_text_input {
  font-size: 20px;
}
.loginHead {
  font-size: 24px;
  width: 198px;
  height: 48px;
  margin: auto;
  text-align: center;
  padding-top: 123px;
}
.loginContents {
  margin-top: 98px;
}
.loginContents > .idBox,
.passwordBox,
.loginButton {
  margin: auto;
  margin-top: 34.91px;
  width: 388px;
  height: 96px;
}
.findButtons {
  margin: auto;
  margin-top: 10px;
  width: 388px;
  height: 96px;
}
.loginButton > input {
  width: 388px;
  height: 70px;
  font-size: 24px;
  border-radius: 2px;
  background-color: rgb(0, 36, 72);
  color: white;
}
.loginButton > button {
  width: 388px;
  height: 70px;
  font-size: 24px;
  border-radius: 2px;
  background-color: rgb(0, 36, 72);
  color: white;
}
.findButtons > .findButtonLists {
  display: flex;
  justify-content: space-around;
  padding: 0px;
}
.findButtons > .findButtonLists > li {
  font-size: 18px;
}
</style>
