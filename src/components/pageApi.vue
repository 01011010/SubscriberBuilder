<template>
  <div>
    User: 
    <code>
      {{ user }}
    </code>

    Posts from user:
    <code>
      {{ posts }}
    </code>
  </div>
</template>
<script>
import User from "@/models/User";

export default {
  data() {
    return {
      user: {},
      posts: {}
    };
  },
  async mounted() {
    this.user = await User.find(1);
    console.log(this.user.data);
    /*
    User.first().then(response => {
      console.log(response);
    });
    */

    //const { data } = User.get()
    //this.user = await User.first()
    //this.user = await User.find(1);
    //this.posts = await this.user.posts().get();
  }
};
</script>
