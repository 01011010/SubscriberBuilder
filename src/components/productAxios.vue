<template>
  <div>
    <section v-if="errored">
      <p>We're sorry, we're not able to retrieve this information at the moment, please try back later</p>
    </section>
    <section v-else>
      <div v-if="info !== null">
        <div v-for="item in info.data">
          <input type="radio" v-model="product" :value="item.id" 
            v-on:change="$emit('update:product', $event.target.value); 
            $emit('update:step')">
            {{item.name}}
        </div>
      </div>
    </section>
  <code>
  Data: 
      {{ info }}
    </code>
  </div>
</template>
<script>
import { HTTP } from "@/http-common";

export default {
  data() {
    return {
      product: null,
      info: null,
      posts: [],
      loading: true,
      errored: false,
      errors: []
    };
  },
  mounted() {
    HTTP.get("/")
      .then(response => {
        this.info = response.data;
      })
      .catch(error => {
        console.log(error);
        this.errored = true;
        this.errors.push(error);
      })
      .finally(() => (this.loading = false));
  }
};
</script>
