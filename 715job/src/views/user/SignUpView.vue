<template>
  <div class="body">
    <div class="main">
      <div class="signUpHead">
        <h6>회원가입</h6>
      </div>
      <div class="nameInfo">
        <div class="studentId">
          <v-text-field :rules="user_stuid_rule" type="text" id="studentid" v-model="user.studentid" class="v_text_input" label="학번" autocomplete="off"></v-text-field>
        </div>
        <div class="studentName">
          <v-text-field :rules="user_nm_rule" type="text" id="name" v-model="user.name" class="v_text_input" label="이름" autocomplete='off'></v-text-field>
        </div>
      </div>
      <div class="degreeInfo">
        <div class="positionInfo">
          <p>직업</p>
          <div class="degreeButton">
            <span>
              <v-btn id="student" :ripple="false" :color="bgcolorStudent" width="87px" height="51px" @click="selectStudent">
                학생
              </v-btn>
            </span>
            <span>
              <v-btn id="professor" :ripple="false" :color="bgcolorProfessor" width="87px" height="51px" @click="selectProfessor">
                교수
              </v-btn>
            </span>
          </div>
        </div>
        <div class="degreeCourseInfo">
          <p>학위과정</p>
          <div class="degreeButton">
            <span>
              <v-btn id="bachelor" :ripple="false" :color="bgcolorBachelor" width="87px" height="51px" @click="selectBachelor">
                학사
              </v-btn>
            </span>
            <span>
              <v-btn id="master" :ripple="false" :color="bgcolorMaster" width="87px" height="51px" @click="selectMaster">
                석박사
              </v-btn>
            </span>
          </div>
        </div>
      </div>
      <div class="idInfo">
        <div class="infoBox">
          <v-text-field :rules="user_id_rule" type="text" ref="userid" id="id" v-model="user.userid" autocomplete='off' class="v_text_input" label="아이디" style="margin-bottom: 24px">
          </v-text-field>
        </div>
      </div>
      <div class="passwordInfo">
        <div class="infoBox">
          <v-text-field :rules="user_pw_rule" type="password" class="v_text_input" label="비밀번호" style="margin-bottom: 24px" id="password" v-model="user.password">
          </v-text-field>
          <v-text-field :rules="user_pw_rule2" type="password" class="v_text_input" label="비밀번호 확인" style="margin-bottom: 24px">
          </v-text-field>
        </div>
      </div>
      <div class="passwordVerify">
        <div class="infoBox">
          <v-text-field id="password-question" class="v_text_input" label="비밀번호 확인 질문" value="당신이 졸업한 초등학교는?" readonly style="margin-bottom: 24px">
          </v-text-field>
        </div>
      </div>
      <div class="passwordVerify">
        <div class="infoBox">
          <v-text-field :rules="user_pw_vrf_ans_rule" type="text" id="password-answer" v-model="user.passwordanswer" class="v_text_input" label="비밀번호 확인 질문 답변" style="margin-bottom: 24px" autocomplete='off'>
          </v-text-field>
        </div>
      </div>
      <div class="emailInfo">
        <div class="infoBox">
          <v-text-field type="email" id="email" v-model="user.email" class="v_text_input" label="이메일" autocomplete='off'></v-text-field>
        </div>
      </div>
      <div class="signInButton">
        <v-btn @click="signUp">회원가입</v-btn>
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
      bgcolorStudent: '#d9d9d9',
      bgcolorProfessor: '#d9d9d9',
      bgcolorBachelor: '#d9d9d9',
      bgcolorMaster: '#d9d9d9',
      user: {
        studentid: '',
        name: '',
        position: '',
        course: '',
        userid: '',
        password: '',
        passwordanswer: '',
        email: ''
      },
      user_stuid_rule: [
        v => !!v || '학번은 필수 입력사항입니다.'
      ],
      user_id_rule: [
        v => !!v || '아이디는 필수 입력사항입니다.'
      ],
      user_nm_rule: [
        v => !!v || '이름은 필수 입력사항입니다.',
        v => !(v && v.length >= 30) || '이름은 30자 이상 입력할 수 없습니다.',
        v => !/[~!@#$%^&*()_+|<>?:{}]/.test(v) || '이름에는 특수문자를 사용할 수 없습니다.'
      ],
      user_pw_rule: [
        v => this.state === 'ins' ? !!v || '패스워드는 필수 입력사항입니다.' : true
      ],
      user_pw_rule2: [
        v => this.state === 'ins' ? !!v || '패스워드는 필수 입력사항입니다.' : true,
        v => v === this.user.password || '패스워드가 일치하지 않습니다.'
      ],
      user_pw_vrf_ans_rule: [
        v => !!v || '비밀번호 확인 질문 답변은 필수 입력사항입니다.'
      ]
    }
  },
  methods: {
    signUp(event) {
      axios.post('/api/users/signUp', {
        user: this.user
      })
        .then((res) => {
          if (res.data.success === true) {
            alert(res.data.message)
            this.$router.push('/')
          }
          if (res.data.success === false) {
            alert(res.data.message)
            this.$refs.userid.focus()
          }
        })
        .catch(function (error) {
          alert(error)
        })
    },
    selectStudent() {
      if (this.bgcolorStudent === '#d9d9d9') {
        this.bgcolorStudent = 'white'
        this.bgcolorProfessor = '#d9d9d9'
        this.user.position = '학생'
      }
    },
    selectProfessor() {
      if (this.bgcolorProfessor === '#d9d9d9') {
        this.bgcolorStudent = '#d9d9d9'
        this.bgcolorProfessor = 'white'
        this.user.position = '교수'
      }
    },
    selectBachelor() {
      if (this.bgcolorBachelor === '#d9d9d9') {
        this.bgcolorBachelor = 'white'
        this.bgcolorMaster = '#d9d9d9'
        this.user.course = '학사'
      }
    },
    selectMaster() {
      if (this.bgcolorMaster === '#d9d9d9') {
        this.bgcolorBachelor = '#d9d9d9'
        this.bgcolorMaster = 'white'
        this.user.course = '석/박사'
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
  width: 388px;
  height: 900px;
  margin: auto;
  margin-bottom: 50px;
}
.signUpHead {
  text-align: center;
  margin-bottom: 50px;
}
.signUpHead > h6 {
  font-size: 24px;
}
.nameInfo {
  display: flex;
  justify-content: space-between;
}
.main > div {
  margin-top: 24px;
}
.nameInfo > div > p {
  font-size: 24px;
  margin-bottom: 10px;
}
.nameInfo > div > input {
  width: 175px;
  height: 51px;
  border-radius: 2px;
  font-size: 20px;
  padding-left: 5px;
  background-color: #d9d9d9;
}
.degreeInfo {
  display: flex;
  justify-content: space-between;
}
.degreeInfo > div > p {
  font-size: 20px;
  margin-bottom: 10px;
}
.degreeButton > span {
  margin-right: 1px;
}
.infoBox > p {
  font-size: 24px;
  margin-bottom: 10px;
}

.signInButton > .v-btn {
  width: 388px;
  height: 96px;
  font-size: 24px;
  background-color: rgb(0, 36, 72);
  color: white;
  border-radius: 2px;
}
.v-btn:before {
  opacity: 0 !important;
}
</style>
