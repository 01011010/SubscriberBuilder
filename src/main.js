// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import axios from "axios";
import { Model } from "vue-api-query";

// inject global axios instance as http client to Model
Model.$http = axios;

Vue.config.productionTip = false;
//Vue.use(axios) - if this is used with normal axios, it procues an error: Uncaught (in promise) TypeError: Cannot read property 'protocol' of undefined
/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
