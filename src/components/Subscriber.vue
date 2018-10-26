<template>
  <div>
    <h1>hello</h1>
    <p>{{msg}}</p>
    <p>Route: {{route}}</p>
    <p>Product Type: {{productType}}</p>
    <p>Product: {{product}}</p>
    <p>Product Option: {{productOption}}</p>
    <p>Product Qty: {{productQty}}</p>
    <p>Sub length: {{subLength}}</p>
    <!--
    <Tracker
      v-for="info in trackerInfo"
      v-bind:key="info.id"
      v-bind:title="info.title"
    ></tracker>
    -->
    
    <br>
    <div :style="{ fontSize: postFontSize + 'em' }">
    <!-- v-on:update:step="step = $event" 
    v-on:enlarge-text="onEnlargeText"
    v-on:pick-route="onRouteType"
    -->
      <!--
      <div class="row" v-show="step >= flow.model">
      -->
      
      

      <div class="row" v-show="flow2.model">
        <SubscriberModels 
          v-on:update:route="route = $event"
          @update:step="flow2.productTypes = true;"
        />
      </div>
      <!--
      <div class="row" v-show="step >= flow.productTypes">    
      @update:step="updateStep(flow.loadProducts);"
      -->
      <div class="row" v-show="flow2.productTypes">    
        <SubscriberProductTypes
          v-on:update:productType="productType = $event"
          @update:step="flow2.loadProducts = true;"
          :reset="reset"
          :route="route"
        />
      </div>
    
    <!-- <div class="row" v-show="step >= flow.loadProducts"> -->
      <div class="row" v-show="flow2.loadProducts">
        <SubscriberProducts
        v-on:update:product="product = $event"
         @update:step="flow2.productOptions = true; "
         :productType="productType"
         />
      </div>

      <div class="row" v-show="flow2.productOptions">
        <SubscriberProductOptions
          v-on:update:productOption="productOption = $event"
         @update:step="flow2.productQty = true; "
         />
      </div>

      <div class="row" v-show="flow2.productQty">
        <SubscriberProductQty
         v-on:update:productQty="productQty = $event"
         @update:step="flow2.length = true; "
         />
      </div>

      <div class="row" v-show="flow2.length">
        <SubscriberLengths
         v-on:update:subLength="subLength = $event"
         @update:step="flow2.summary = true; "
         :route="route"
         />
      </div>

    </div>
  </div>
</template>
<script>
import SubscriberModels from "./SubscriberModels";
import SubscriberProductTypes from "./SubscriberProductTypes.vue";
import SubscriberProducts from "./SubscriberProducts.vue";
import SubscriberProductOptions from "./SubscriberProductOptions.vue";
import SubscriberProductQty from "./SubscriberProductQty.vue";
import SubscriberLengths from "./SubscriberLengths.vue";




export default {
  name: "Subscriber",
  components: {
    SubscriberModels,
    SubscriberProductTypes,
    SubscriberProducts,
    SubscriberProductOptions,
    SubscriberProductQty,
    SubscriberLengths
  },
  props: {
    //trackerInfo: Object
  },
  data() {
    return {
      postFontSize: 1, // this is the base valeu in the parent
      msg: "Welcome to the Production builder",
      route: null,
      step: 1, // very first page in the builder
      flow: {
        model: 1, // personal or ...
        productTypes: 2,
        loadProducts: 3,
        productOptions: 4
      },
      flow2: {
        model: true,
        productTypes: false,
        loadProducts: false,
        productOptions: false,
        productQty: false,
        length: false,
        summary: false
      },
      subscription: {
        product: null
      },
      trackerInfo: [
        { id: 1, title: "My journey with Vue" },
        { id: 2, title: "Blogging with Vue" },
        { id: 3, title: "Why Vue is so fun" }
      ],
      reset: false,
      productType: null,
      product: null,
      productOption: null,
      productQty: null,
      subLength: null
    };
  },
  watch: {
    route(newVal) {
      console.log("Watching the model: " + newVal);
      this.reset = !this.reset;
    }
  },
  mounted: function() {},
  computed: {
    checkRoute: function() {
      if (this.route == 1) {
        return console.log("magan");
      }
    },
    getProductType: function() {
      return this.productType;
    },
    izeMize: {
      get: function() {
        console.log("ize get");
        return this.productType;
      },
      set: function(newValue) {
        console.log("ize set");
        this.productType = 0;
      }
    }
  },
  methods: {
    updateStep: function(targetStep) {
      console.log(targetStep);
      this.step = targetStep;
    },
    resetCheckbox: function() {
      this.productType = 0;
    },
    // v-on:enlarge-text="postFontSize += $event"
    // Or, if the event handler is a method:
    // <blog-post v-on:enlarge-text="onEnlargeText"></blog-post>
    onEnlargeText: function(enlargeAmount) {
      this.postFontSize += enlargeAmount;
      console.log(
        "Ez a route: " + this.route + " Es ez a title: " + this.title
      );
    },
    onRouteType: function(routeType) {
      console.log("Event based routeType: " + routeType);
      this.route = routeType;
    }
  }
};
</script>
<style scoped>
h1 {
  font-size: 22px;
}
</style>
