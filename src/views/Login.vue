<template>
  <ion-page style="">
    <ion-content class="content" :fullscreen="true">
      
    <div class="logo-header">
      <img class="logo" src="../../resources/icon.png" alt="">
    </div>

  <div class="login-card">
    <ion-grid>
      <ion-row>
        <ion-col></ion-col>
        <ion-col size="10">
          <input type="text" name="user_email" v-model="user_email" placeholder="Email">
        </ion-col>
        <ion-col></ion-col>
      </ion-row>
      <ion-row>
        <ion-col></ion-col>
        <ion-col size="10">
          <input type="password" name="user_pass" v-model="user_pass" placeholder="Password">
        </ion-col>
        <ion-col></ion-col>
      </ion-row>
      <ion-row>
        <ion-col></ion-col>
        <ion-col size="7">
          <ion-checkbox></ion-checkbox>
          <ion-label style="padding:7px; color:white;">Remember Me</ion-label>
        </ion-col>
        <ion-col></ion-col>
      </ion-row>
      <ion-row>
        <ion-col size="12">
          <ion-button expand="block" @click="login()">Login</ion-button>
        </ion-col>
      </ion-row>
      <ion-row>
        <ion-col></ion-col>
        <ion-col size="10" style="text-align:center;color:white;">Forgot Password? <a href="">Recover here</a></ion-col>
        <ion-col></ion-col>
      </ion-row>
    </ion-grid>
    
  </div>

  <div class="register-card">
        <span style="color:white;">Don't have an account? <a href="/register">Sign up here</a></span>
    </div>
    
      
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol,IonCheckbox,IonButton,IonLabel,alertController} from '@ionic/vue';
import axios from 'axios';
import { defineComponent } from '@vue/runtime-core';
import { useStore } from "vuex";
import { Actions } from "../store/enums/StoreEnums";

export default defineComponent( {
  name: 'Login',
  components: {  IonContent, IonPage, IonGrid, IonRow, IonCol,IonCheckbox,IonButton,IonLabel },
  data() {
    return {
        user_email:'',
        user_pass:''
    }
  },
  methods:{
    async login(){
      //const store = useStore();
      const response = await axios.post("http://localhost:3000/api/users/login", {
        user_email:this.user_email,
        user_pass:this.user_pass
      });
    console.log(response);
      if(response.data != ""){
        const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          message: 'Successfully logged in.',
          buttons: ['OK'],
        });
      await alert.present();
    //   store.dispatch(Actions.UPDATE_USER, {
    //   first_name:response.data.user_firstname,
    //   last_name:response.data.user_lastname,
    //   email:response.data.user_email,
    //   phone:response.data.user_phone,
    //   age:response.data.user_age
    // });

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
        this.$router.push({
        name: 'user-dashboard',
      });
      }
      else{
        const alert = await alertController
        .create({
          cssClass: 'my-custom-class',
          message: 'Incorrect Login Credentials.',
          buttons: ['OK'],
        });
      await alert.present();

      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
      }
    }
  }
})
</script>
<style scoped>
input[type=text],input[type=password] {
  padding:10px;
  border:0;
  border-radius:5px;
  width:100%;
  box-shadow:0 0 15px 4px rgba(0,0,0,0.06);
}

.content{
  display: flex;
  justify-content: center;
  align-items: center;
  --background:url('../../resources/login-bg.jpg') no-repeat center center / cover;
}
.logo-header{
  margin-top:30%;
  display:flex;
  justify-content: center;
  align-items:center;
}
.logo{
    width:50px;
    height:50px;
    border-radius:12px;
  
}
.register-card{

  margin-top:30%;
  display: flex;
  justify-content: center;
  align-items: center;
  

}
.login-card{
  margin-top:10%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}
</style>