import { createStore } from "vuex";
import { config } from "vuex-module-decorators";

import AdminModule from "@/store/modules/AdminModule";


config.rawError = true;

const store = createStore({
  modules: {
    AdminModule,
  },
});

export default store;
