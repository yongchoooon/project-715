<template>
  <div class="mypage">
    <div class="left-box">
      <div class="left-box-profile">
        <img class="guest-img" src="@/assets/guest-img.png" alt="guest" />
        <p class="my-name">{{ username }}</p>
        <div id="select-info">
          <div class="select-info" id="select-rsvinfo">
            <button class="rsvinfo-btn" @click="setMyRsvInfo">예약 정보</button>
          </div>
          <div class="select-info" id="select-profileinfo">
            <button class="rsvinfo-btn" @click="setPersonalInfo">내 정보</button>
          </div>
        </div>
      </div>
    </div>
    <MyRsvInfo v-if="isMyRsvInfo" :rsvArr="rsvArr" :isRsv="isRsv" :username="username"/>
    <PersonalInfo v-if="isPersonalInfo" :username="username"/>
  </div>
</template>
<script>
import PersonalInfo from '../components/PersonalInfo.vue'
import MyRsvInfo from '../components/MyRsvInfo.vue'
import axios from 'axios'

export default {
  name: 'MyPage',
  components: {
    PersonalInfo,
    MyRsvInfo
  },
  data() {
    return {
      isPersonalInfo: false,
      isMyRsvInfo: true,
      rsvArr: [],
      isRsv: false,
      username: ''
    }
  },
  setup() {},
  created() {
  },
  mounted() {
    axios.post('/api/users/userName').then((res) => {
      this.username = res.data.loggedinusername
    })
    axios.post('/api/users/rsvInfo').then((res) => {
      const useddata = []
      for (let i = 0; i < res.data.length; i++) {
        if (new Date().getTime() < new Date(res.data[i].rsvdate).getTime() + 43200) {
          useddata.push(res.data[i])
        }
      }
      if (useddata.length !== 0) {
        this.rsvArr = useddata
        this.isRsv = true
      } else {
        this.isRsv = false
      }
    })
  },
  unmounted() {},
  methods: {
    setPersonalInfo() {
      this.isPersonalInfo = true
      this.isMyRsvInfo = false
    },
    setMyRsvInfo() {
      this.isPersonalInfo = false
      this.isMyRsvInfo = true
    }
  }
}
</script>
<style scoped>
* {
  text-decoration: none;
  list-style: none;
}
.mypage {
  width: 70%;
  max-width: 900px;
  min-width: 600px;
  max-height: 400px;
  min-height: 400px;
  height: 50%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
}
.left-box {
  margin-top: 250px;
  min-width: 225px;
  margin-right: 30px;
}
.my-name {
  text-align: center;
  font-size: 30px;
}
.guest-img {
  width: 80%;
  display: block;
  margin: auto;
  padding-bottom: 10px;
}
#select-info {
  width: 80%;
  display: block;
  margin: auto;
  padding-top: 50px;
}
.select-info {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  background-color: rgb(237, 235, 235);
}
#select-rsvinfo {
  border: solid 2px gray;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}
.rsvinfo-btn {
  width: 100%;
  height: 100%;
}
.rsvinfo-btn:hover {
  background-color: rgb(184, 184, 184);
}
#select-profileinfo {
  border-left: solid 2px gray;
  border-right: solid 2px gray;
  border-bottom: solid 2px gray;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.right-box {
  background: rgb(255, 255, 255);
  width: 70%;
  padding-top: 250px;
  float: right;
}
.blank-box {
  height: 10%;
}
.greet-user {
  display: flex;
  align-items: center;
  height: 10%;
}
.right-box-rsvinfo {
  background-color: rgb(109, 109, 255);
  width: 90%;
  height: 50px;
  display: flex;
  align-items: center;
}
.right-box-detail-rsvinfo {
  background-color: rgb(237, 235, 235);
  height: 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid rgb(189, 189, 189);
}
.right-box-rsvinfo-box {
  width: 90%;
  height: 300px;
  border: solid rgb(133, 214, 255);
}
.change-rsv {
  border: solid gray;
  float: right;
  margin-left: 5%;
  padding: 5px;
}
.change-rsv:hover {
  background-color: rgb(121, 121, 121);
}
.change-delete {
  border: solid gray;
  float: right;
  margin-left: 5%;
  padding: 5px;
}
.change-delete:hover {
  background-color: rgb(121, 121, 121);
}
</style>
