<template>
  <div id="app">
    <img width="0%" src="./assets/logo.png">
    <Subscriber/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Subscriber from "./components/Subscriber";

export default {
  name: "App",
  components: {
    HelloWorld,
    Subscriber
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
