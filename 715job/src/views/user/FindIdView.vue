<template>
  <div class="body">
    <div class="main">
      <div class="findIdHead">
        <p><strong>ID 찾기</strong></p>
      </div>
      <div class="findContainer">
        <div class="findButton">
          <router-link to="/user/findid">
        <v-btn outlined
        id="findIdButton"
          outlinedcolor="black"
        >
          ID 찾기
        </v-btn>
        </router-link>
        </div>
        <div class="findButton">
          <router-link to="/user/findpwd">
        <v-btn
        id="findPwdButton"
          color="#F1F1F1"
        >
          비밀번호 찾기
        </v-btn>
        </router-link>
        </div>
      </div>
        <div class="studentInfoBox">
          <v-text-field :rules="user_stuid_rule" ref="studentid" class="v_text_input" label="학번" v-model="studentid" @keypress.enter="findID"></v-text-field>
        </div>
        <div class="studentInfoBox">
          <v-text-field :rules="user_nm_rule" ref="name" class="v_text_input" label="이름" v-model="name" @keypress.enter="findID"></v-text-field>
        </div>
        <div class="studentInfoBox">
          <v-text-field :rules="user_email_rule" ref="email" class="v_text_input" label="E-mail" v-model="email" @keypress.enter="findID"></v-text-field>
        </div>
        <div class="findIdForm">
          <input type="button" value="ID 찾기" @click="findID"/>
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
      studentid: '',
      name: '',
      email: '',
      user_stuid_rule: [
        v => !!v || '학번은 필수 입력사항입니다.'
      ],
      user_nm_rule: [
        v => !!v || '이름은 필수 입력사항입니다.'
      ],
      user_email_rule: [
        v => !!v || 'E-mail은 필수 입력사항입니다.'
      ],
      findid: 'a',
      errormessasge: ''
    }
  },
  methods: {
    findID() {
      if (this.studentid.length !== 0 && this.name.length !== 0 && this.email.length !== 0) {
        axios.post('/api/users/findId', {
          studentid: this.studentid,
          name: this.name,
          email: this.email
        })
        this.$router.push('/user/findidresult')
      } else if (this.studentid.length === 0) {
        alert('학번을 입력하세요!')
        this.$refs.studentid.focus()
      } else if (this.name.length === 0) {
        alert('이름을 입력하세요!')
        this.$refs.name.focus()
      } else if (this.email.length === 0) {
        alert('E-mail을 입력하세요!')
        this.$refs.email.focus()
      }
    }
  }
}
</script>

<style scoped>
.body {
  margin: 0;
}
.main {
  width: 900px;
  margin: auto;
}
.v_text_input {
  font-size: 20px;
}
.findIdHead > p {
  text-align: center;
  font-size: 24px;
  padding-top: 50px;
  padding-bottom: 50px;
}
.findContainer {
  display: flex;
  width: 388px;
  margin: auto;
}
.findContainer > .findButton {
  flex: 1;
  text-align: center;
  padding-top: 50px;
}
.findContainer > .findButton > a{
  text-decoration: none;
}
.findContainer > .findButton > a > #findIdButton{
  width: 100%;
  height: 50px;
  font-size: 22px;
}
.findContainer > .findButton > a > #findPwdButton{
  width: 100%;
  height: 50px;
  font-size: 22px;
}
.studentInfoBox {
  padding-top: 50px;
}
.studentInfoBox > #studentHead {
  font-size: 24px;
}
.studentInfoBox > .v_text_input {
  width: 388px;
  height: 47px;
  border-radius: 2px;
  padding-left: 5px;
  font-size: 20px;
  margin: auto;
}
.findIdForm {
  margin-top: 50px;
  text-align: center;
}
.findIdForm > #toFindIdResult {
  text-decoration: none;
  color: black;
}
.findIdForm > input {
  width: 388px;
  height: 70px;
  font-size: 24px;
  border-radius: 2px;
  background-color: rgb(0, 36, 72);
  color: white;
}
</style>
