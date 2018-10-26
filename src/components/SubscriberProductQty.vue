<template>
  <div>
  <!--
  <button v-on:click="resetMe()">Reset</button>      
  -->
  <div class="subscriber col-md-12">

    <label class="1x">
      <input type="radio" v-model="productQty" value="1"
      v-on:change="$emit('update:productQty', $event.target.value);
      $emit('update:step')">
      1x
      <em></em>
    </label>
  
    <label class="2x">
      <input type="radio" v-model="productQty" value="2"
      v-on:change="$emit('update:productQty', $event.target.value);
      $emit('update:step')">
      2x
      <em></em>
    </label>

     <label class="4x">
      <input type="radio" v-model="productQty" value="4"
      v-on:change="$emit('update:productQty', $event.target.value);
      $emit('update:step')">
      4x
      <em></em>
    </label>
  
  </div>
  </div>
</template>
<script>
export default {
  name: "SubscriberProductQty",
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
      productQty: 0
    };
  },
  watch: {
    productQty(newVal, oldValue) {
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
      this.productQty = 0;
    }
  }
};
</script>
<style scoped>
</style>
