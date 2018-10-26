<template>
  <div>
  <!--
  <button v-on:click="resetMe()">Reset</button>      
  -->
  <div class="subscriber col-md-12">
    <div v-show="route == 1">
      <label class="1het">
        <input type="radio" v-model="subLength" value="1"
        v-on:change="$emit('update:subLength', $event.target.value);
        $emit('update:step')">
        1 het
        <em></em>
      </label>
      <label class="2x">
        <input type="radio" v-model="subLength" value="2"
       v-on:change="$emit('update:subLength', $event.target.value);
        $emit('update:step')">
        2 het
        <em></em>
      </label>
      <label class="4x">
        <input type="radio" v-model="subLength" value="4"
       v-on:change="$emit('update:subLength', $event.target.value);
        $emit('update:step')">
        1 honap
       <em></em>
      </label>
    </div>
<div v-show="route != 1">
    <label class="1het">
      <input type="radio" v-model="subLength" value="3"
      v-on:change="$emit('update:subLength', $event.target.value);
      $emit('update:step')">
      3 honap
      <em></em>
    </label>
  
    <label class="2x">
      <input type="radio" v-model="subLength" value="6"
      v-on:change="$emit('update:subLength', $event.target.value);
      $emit('update:step')">
      6 honap
      <em></em>
    </label>

     <label class="4x">
      <input type="radio" v-model="subLength" value="12"
      v-on:change="$emit('update:subLength', $event.target.value);
      $emit('update:step')">
      12 honap
      <em></em>
    </label>
    </div>


  </div>
  </div>
</template>
<script>
export default {
  name: "SubscriberLength",
  /*model: {
    prop: 'checked',
    event: 'change'
  },*/
  props: {
    reset: Boolean,
    route: String,
    shouldReset: {
      default: false,
      type: Boolean
    }
  },
  data() {
    return {
      //    checked: Number
      subLength: 0
    };
  },
  watch: {
    subLength(newVal, oldValue) {
      console.log("Watching the product Qty: " + newVal + " and " + oldValue);
    },
    reset(value) {
      console.log(value);
      //this.resetMe()
    },
    route(value) {
      if (this.shouldReset) {
        this.resetMe();
      }
    }
  },
  methods: {
    /*Yes, you can, but not considered 'best practice': 
    downward to Child use properties, 
    upward to Parent use events. 
    To also cover 'sidewards', use custom events, or e.g. vuex. See this nice article for more info.*/
    resetMe: function() {
      console.log("Should reset...");
      this.subLength = 0;
    }
  }
};
</script>
<style scoped>
</style>
