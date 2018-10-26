<template>
  <div class="col-md-12">
    <p>we are flying</p>
    <table style="width:100%">
    {{info}}
    </table>
  </div>
</template>
<script>
export default {
  name: "Tracker",
  props: ["info"],
  data() {
    return {};
  },
  methods: {}
};
</script>
<style scoped>
</style>
