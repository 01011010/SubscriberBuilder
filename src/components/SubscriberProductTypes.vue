<template>
  <div>
  <!--
  <button v-on:click="resetMe()">Reset</button>      
  -->
  <div class="subscriber col-md-12">

    <label class="c">
      <input type="radio" v-model="productType" value="1"
      v-on:change="$emit('update:productType', $event.target.value);
      $emit('update:step')">
      C
      <em></em>
    </label>
  
    <label class="t">
      <input type="radio" v-model="productType" value="2"
      v-on:change="$emit('update:productType', $event.target.value);
      $emit('update:step')">
      T
      <em></em>
    </label>
  
  </div>
  </div>
</template>
<script>
export default {
  name: "SubscriberProductTypes",
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
      productType: 0
    };
  },
  watch: {
    productType(newVal, oldValue) {
      console.log("Watching the product Type: " + newVal + " and " + oldValue);
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
      this.productType = 0;
    }
  }
};
</script>
<style scoped>
</style>
