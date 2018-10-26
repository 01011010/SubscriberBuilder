import { Model as BaseModel } from "vue-api-query";

export default class Model extends BaseModel {
  // define a base url for a REST API
  baseURL() {
    return "https://www.mocky.io/v2/5bd2f18e3400006100cfdf83";
  }

  // implement a default request method
  request(config) {
    return this.$http.request(config);
  }
}
