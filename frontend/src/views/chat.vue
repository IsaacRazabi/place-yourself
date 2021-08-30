<template>
 <section v-if="isChatClose">
     <input type="checkbox" id="click">
    <label for="click">
      <i class="fab fa-facebook-messenger"></i>
      <i class="fas fa-times"></i>
    </label>
    <div class="wrapper">
      <div class="head-text">
Let's chat - Online
<button @click="closeChat">❌</button>
</div>
<div class="chat-box">
        <div class="desc-text">
Please fill out the form below to start chatting with your host</div>
<form @submit.prevent="sendMsg" action="#">
          <div class="field">
            <input type="text" v-model="this.user.fullname">
          </div>
    <ul class = "chat a-clean rtl">
      <li  v-for="(msg, idx) in msgs" :key="idx">
        <span>{{msg.from}}:</span>{{msg.txt}}
      </li>
    </ul>
<div class="field rtl">
            <input v-model="msg.txt" type="text" placeholder="enter your massage" >
          </div>
<!-- <div class="field textarea"> -->
    <hr />
   
          <!-- </div> -->
<div class="field">
            <button type="submit">Start Chat</button>
          </div>
</form>
</div>
</div>
</section>
  


</template>

<script>
import {socketService} from '@/services/socket.service';

export default {
  props:{
user :{
  type : Object
},
massages:{
  type : Array
}
  },
  data() {
    return {
      msg: {from:this.loggedInUser, txt: ''},
      msgs: [],
      topic : 'Love',
     isChatClose  :true,
 
    }
  },
  created() {
    // socketService.setup();
    socketService.emit('chat topic', this.topic)
    socketService.on('chat addMsg', this.addMsg)
    console.log(this.massages,this.msgs);
    if(!this.msgs.length) this.msgs.push(...this.massages)
    //  this.isChatClose=true
  },
  destroyed() {
    socketService.off('chat addMsg', this.addMsg)
    // socketService.terminate();
  },
  methods: {
    addMsg(msg) {
  
      this.msgs.push(msg)

      
      
    },
    sendMsg() {
      // console.log('Sending', this.msg);
      socketService.emit('chat newMsg', this.msg)
      // TODO: next line not needed after connecting to backend
      // this.addMsg(this.msg)
      // setTimeout(()=>this.addMsg({from: 'Dummy', txt: 'Yey'}), 2000)
      this.msg = {from: this.loggedInUser, txt: ''};
    },
    changeTopic() {
      socketService.emit('chat topic', this.topic)
    },
    closeChat(){
      this.isChatClose=false;
    }
  },
  computed:{
      loggedInUser() {
      return this.$store.getters.loggedinUser.fullname;
    }
  }
}
</script>

<style scoped>
/* .chat-room{
 
  background-color: honeydew;
    width: 60%;
    height: 300px;
    border-radius: 11%;
} */
.chat{
display: flex;
    flex-direction: column;
    height: 300px;
    border-radius: 11%;
    align-items: flex-start;
    margin-top: 10px;

}
.chat-container{
  border: 1px black solid;
    /* position: fixed; */
    width: 50%;
    border-radius: 8%;
    top: 50vh;
    left: 50vh;
}





@import url('https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}
body{
  overflow: hidden;
  background: #f2f2f2;
}
/* #click{
  display: none;
} */
/* label{
  position: absolute;
  right: 30px;
  bottom: 20px;
  height: 55px;
  width: 55px;
  background: -webkit-linear-gradient(left, #a445b2, #fa4299);
  text-align: center;
  line-height: 55px;
  border-radius: 50px;
  font-size: 30px;
  color: #fff;
  cursor: pointer;
}
label i{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: all 0.4s ease;
} */
/* label i.fas{
  opacity: 0;
  pointer-events: none;
}
#click:checked ~ label i.fas{
  opacity: 1;
  pointer-events: auto;
  transform: translate(-50%, -50%) rotate(180deg);
}
#click:checked ~ label i.fab{
  opacity: 0;
  pointer-events: none;
  transform: translate(-50%, -50%) rotate(180deg);
} */
.wrapper{
  position: fixed;
  top:0;
  left: 0;
  z-index: 100;
  justify-content: center;
  /* right: 30px;
  bottom: 0px; */
  max-width: 400px;
  background: #fff;
  border-radius: 15px;
  box-shadow: 0px 15px 20px rgba(0,0,0,0.1);
  opacity: 1;
  /* pointer-events: none; */
  transition: all 0.6s cubic-bezier(0.68,-0.55,0.265,1.55);
}
#click:checked ~ .wrapper{
  opacity: 1;
  bottom: 85px;
  pointer-events: auto;
}
.wrapper .head-text{
  line-height: 60px;
  color: #fff;
  border-radius: 15px 15px 0 0;
  padding: 0 20px;
  font-weight: 500;
  font-size: 20px;
background-color: rgb(255, 56, 92);
}
.wrapper .chat-box{
  padding: 20px;
  width: 100%;
}
.chat-box .desc-text{
  color: #515365;
  text-align: center;
  line-height: 25px;
  font-size: 17px;
  font-weight: 500;
}
.chat-box form{
  padding: 10px 15px;
  margin: 20px 0;
  border-radius: 25px;
  border: 1px solid lightgrey;
}
.chat-box form .field{
  height: 50px;
  width: 100%;
  margin-top: 20px;
}
.chat-box form .field:last-child{
  margin-bottom: 15px;
}
form .field input,
form .field button,
form .textarea textarea{
  width: 100%;
  height: 100%;
  padding-left: 20px;
  border: 1px solid lightgrey;
  outline: none;
  border-radius: 25px;
  font-size: 16px;
  transition: all 0.3s ease;
}
form .field input:focus,
form .textarea textarea:focus{
  border-color: #fc83bb;
}
form .field input::placeholder,
form .textarea textarea::placeholder{
  color: silver;
  transition: all 0.3s ease;
}
form .field input:focus::placeholder,
form .textarea textarea:focus::placeholder{
  color: lightgrey;
}
.chat-box form .textarea{
  height: 400px;
  width: 100%;
  border: 1px black solid;
  border-radius: 20px;
}
.chat-box form .textarea textarea{
  height: 100%;
  border-radius: 50px;
  resize: none;
  padding: 15px 20px;
  font-size: 16px;
}
.chat-box form .field button{
  border: none;
  outline: none;
  cursor: pointer;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  background-color: rgb(255, 56, 92);
  transition: all 0.3s ease;
}
.chat-box form .field button:active{
  transform: scale(0.97);
  
}
 .a-clean {
    text-decoration: none;
    list-style: none;
  }
   button, submit {     border: none;
   background-color: rgb(255, 56, 92);
    padding-left: 23px; } 
  .ltr{
    justify-content: left;
  }
 .rtl{
  direction: rtl;
 }
</style>