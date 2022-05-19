<template>
  <div>
    <span>{{ cart.length }}</span>
    <div class="grid">
      <Product
        v-for="product in products"
        :key="product.id"
        :title="product.title"
        :image="product.image"
        :price="product.price"
        :id="product.id"
      ></Product>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Product from "./../components/Product.vue";

export default {
  components: {
    Product,
  },
  data() {
    return {
      products: [],
      cart: [],
    };
  },
  mounted() {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        this.products = res.data;
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 20px;
}
</style>
