<template>
  <div class="subscriber col-md-12">
    
    <pageApi></pageApi>
    <productAxios></productAxios>

  </div>
</template>
<script>
import pageApi from "./pageApi.vue";
import productAxios from "./productAxios";

export default {
  name: "SubscriberProducts",
  components: {
    pageApi,
    productAxios
  },
  props: ["products", "productType"],
  data() {
    return {
      product: null,
      pagination: {
        current_page: 1
      },
      query: {
        data: null,        
        loading: true,
        errored: false,
      },
    };
  },
  methods: {
  }
};
</script>
<style scoped>
</style>
