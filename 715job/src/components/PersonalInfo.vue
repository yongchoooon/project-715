<template>
  <div class="right-box">
    <div class="blank-box"></div>
    <p class="greet-user">{{ username }}님, 안녕하세요</p>
    <div class="psninfo">
      <div class="right-box-psninfo-table">
        <li class="right-box-psninfo">&nbsp;&nbsp;개인 정보</li>
        <div class="right-box-psninfo-box">
          <v-text-field
            label="이름"
            required
            class="psninfo-text text1"
            :value="userpsninfo.name"
            readonly
          ></v-text-field>
          <v-text-field
            label="학번"
            required
            class="psninfo-text"
            :value="userpsninfo.studentid"
            readonly
          ></v-text-field>
          <v-text-field
            label="직책"
            required
            class="psninfo-text"
            :value="userpsninfo.position"
            readonly
          ></v-text-field>
          <v-text-field
            label="학위과정"
            required
            class="psninfo-text"
            :value="userpsninfo.course"
            readonly
          ></v-text-field>
          <v-text-field
            label="E-mail"
            required
            class="psninfo-text"
            :value="userpsninfo.email"
            readonly
          ></v-text-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    username: String
  },
  data() {
    return {
      userpsninfo: []
    }
  },
  mounted() {
    axios.post('/api/users/psnInfo').then((res) => {
      this.userpsninfo = res.data
    })
  }
}
</script>
<style scoped>
.right-box{
  background: rgb(255, 255, 255);
  width:70%;
  min-width: 615px;
  padding-top:10%;
}
.blank-box{
  height: 10%;
}
.greet-user{
  display: flex;
  align-items: center;
  height:10%;
}
.right-box-psninfo{
  background-color: rgb(0, 36, 72);
  color:white;
  height:50px;
  display: flex;
  align-items: center;
}
.right-box-psninfo-box{
  background-color: rgb(255, 255, 255);
  height:350px;
  border-left:2px solid gray;
  border-right:2px solid gray;
  border-bottom:2px solid gray;
}
.change-psn-info{
  border:1px solid gray;
  padding-left:10px;
  padding-right:10px;
  margin-left: 5%;
}
.psninfo-text {
  padding-left: 20px;
  padding-right: 20px;
  margin: 0;
}
.text1 {
  padding-top: 24px;
}
.change-psn-info:hover{
  background-color: gray;
}
.change-grade-button-set{
  display: flex;
  align-items: center;
}
.input-text{
  border:solid gray;
  width: 70%;
  height: 25px;
  margin-left: 5%;
}
.input-text:hover{
  background-color: azure;
}
.change{
  height: 35px;
  display: flex;
  align-items: center;
  padding-left:2%;
}
.check{
  float: right;
}
.cancle{
  margin:10px;
  border:solid gray;
  padding:3px;
}
.cancle:hover{
  background-color: gray;
}
.final-change{
  margin-right:15px;
  border:solid gray;
  padding:3px;
}
.final-change:hover{
  background-color: gray;
}
</style>
