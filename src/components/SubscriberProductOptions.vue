<template>
  <div class="subscriber col-md-12">
    <label class="w">
      <input type="radio" name="productOption" value="1" 
      v-on:change="$emit('update:productOption', $event.target.value);
      $emit('update:step')">
      wh
      <em></em>
    </label>
    <label class="u">
      <input type="radio" name="productOption" value="2" 
      v-on:change="$emit('update:productOption', $event.target.value);
      $emit('update:step')">
      un
      <em></em>
    </label>
  </div>
</template>
<script>
export default {
  name: "SubscriberProductOptions",
  //props: ["productOption"],
  data() {
    return {
      productOption: 0
    };
  },
  methods: {}
};
</script>
<style scoped>
</style>
