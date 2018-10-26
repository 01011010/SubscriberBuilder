<template>
  <div class="subscriber col-md-12">
    <label class="human">
      <!-- To emit an event to the parent, we can call the built-in $emit method, 
      passing the name of the event: -->
      <!--  v-on:change="$emit('pick-route',1); $emit('update:step')"> -->
      <input type="radio" name="options[1]" value="1"
        v-on:change="$emit('update:route', $event.target.value); 
        $emit('update:step');"
      >
      For me
      <em></em>
    </label>
    
    <!--
    <label class="gift">
      <input type="radio" name="options[1]" value="2" 
      v-model="route" v-on:change="clicked">
      To JBB
      <em></em>
    </label>
    -->
    
    <label class="other">
      <input type="radio" name="options[1]" value="3" 
        v-on:change="$emit('update:route', $event.target.value); 
        $emit('update:step');"
      >
      Other
      <em></em>
    </label>
  </div>
</template>
<script>
export default {
  name: "SubscriberModels",
  //props: ["route"],
  data() {
    return {

    };
  },
  methods: {
    clicked: function() {
      console.log("Clicked method: " + this.route);
    }
  }
};
</script>
<style scoped>
</style>
