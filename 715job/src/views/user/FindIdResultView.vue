<template>
  <div class="body">
    <div class="main">
      <div class="findIdResultHead">
        <p>ID 찾기 결과</p>
      </div>
      <div class="resultComment">
        <p v-if="!id_X && !id_O"></p>
        <p v-if="id_O">회원님의 학번으로 가입된 ID가 있습니다.</p>
        <p v-if="id_X">일치하는 ID가 없습니다.</p>
      </div>
      <div v-if="id_O" class="resultIdInfo">
        <input type="text" v-model="findid" readonly/>
      </div>
      <div class="forgetPwd">
        <span id="forgetPwd"><p>비밀번호가 기억나지 않으세요?</p></span>
        <span id="findPwd"
          ><router-link to="/user/findpwd">비밀번호 찾기</router-link></span
        >
      </div>
      <div v-if="id_X" class="forgetId">
        <span id="forgetId"><p>ID가 기억나지 않으세요?</p></span>
        <span id="findId"
          ><router-link to="/user/findid">ID 찾기</router-link></span
        >
      </div>
      <div class="loginButton">
        <button @click="toLoginPage">로그인</button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  components: {},
  data() {
    return {
      findid: '',
      errormessage: '',
      id_O: false,
      id_X: false
    }
  },
  setup() {},
  created() {},
  mounted() {
    axios.get('/api/users/findIdResult').then((res) => {
      if (res.data.success === true) {
        this.findid = res.data.findid.userid
        this.id_O = true
      } else {
        this.findid = ''
        this.id_X = true
      }
    })
  },
  unmounted() {},
  methods: {
    toLoginPage() {
      this.$router.push('/user/login')
    }
  }
}
</script>

<style scoped>
.main {
  width: 900px;
  margin: auto;
}
.findIdResultHead > p {
  text-align: center;
  font-size: 24px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.resultComment > p {
  text-align: center;
  font-size: 24px;
  padding-top: 70px;
}
.resultIdInfo {
  width: 388px;
  margin: auto;
  margin-top: 75px;
}
.resultIdInfo > input {
  width: 100%;
  height: 47px;
  padding-left: 5px;
  font-size: 24px;
  border-radius: 2px;
  background-color: #d9d9d9;
}
.forgetPwd {
  width: 388px;
  padding-top: 120px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  font-size: 15px;
}
#forgetPwd > p {
  margin-bottom: 8px;
}
.forgetPwd > #forgetPwd {
  margin-right: 5px;
}
.forgetId {
  width: 388px;
  display: flex;
  margin: auto;
  justify-content: space-between;
  font-size: 15px;
}
.forgetId > #forgetId {
  margin-right: 5px;
}

.loginButton {
  text-align: center;
}
.loginButton > button {
  width: 388px;
  height: 70px;
  font-size: 24px;
  background-color: rgb(0, 36, 72);
  color: white;
  border-radius: 2px;
}
</style>
