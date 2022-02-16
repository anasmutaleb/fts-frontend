<template>
  <ion-app>
    <ion-menu side="start" menu-id="first" content-id="main">
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Finance Tracking System</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content>
      <ion-list>
        <ion-item><a style="text-decoration:none; color:white;" href="/tab1"><ion-icon :icon="homeOutline" />Home</a></ion-item>
        <ion-item><a style="text-decoration:none; color:white;" href="/profile"><ion-icon :icon="barChartOutline" />Budgets</a></ion-item>
        <ion-item><a style="text-decoration:none; color:white;" href="tabs/profile"><ion-icon :icon="personOutline" />Profile</a></ion-item>
        <ion-item><a style="text-decoration:none; color:white;" href="/tab2"><ion-icon :icon="cashOutline" />Finance</a></ion-item>
        <ion-item><a style="text-decoration:none; color:white;" href="/profile"><ion-icon :icon="settingsOutline" />Settings</a></ion-item>
        <ion-item><a style="text-decoration:none; color:white;" href="/login"><ion-icon :icon="logOutOutline" />Logout</a></ion-item>
      </ion-list>
    </ion-content>
  </ion-menu>
    <ion-router-outlet id="main" />
  </ion-app>
</template>

<script lang="ts">
import { IonApp, IonIcon, IonRouterOutlet,IonMenu,IonHeader,IonToolbar,IonTitle,IonContent,IonList,IonItem} from '@ionic/vue';
import { defineComponent } from 'vue';
import { logOutOutline,settingsOutline,cashOutline,personOutline,barChartOutline,homeOutline } from 'ionicons/icons';

export default defineComponent({
  name: 'App',
  components: {
    IonApp,
    IonRouterOutlet,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonIcon
  },
  setup() {
    return {
      logOutOutline,
      settingsOutline,
      cashOutline,
      personOutline,
      barChartOutline,
      homeOutline
    }
  },
});
</script>