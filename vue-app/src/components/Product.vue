<template>
  <div class="product">
    <img :src="image" alt="" />
    <h3>{{ title }}</h3>
    <p>${{price}}</p>
    <slot></slot>
    <button @click="cartHandlar">Add to Cart</button>
  </div>
</template>

<script>
export default {
    props: {
        title:{
            type: String,
            default: "Title not found"
        },
        image:{
            type:String,
            required: true
        },
        price: {
            type:String,
            required:true
        },
        id: {
          type:Number
        }
    },
    methods: {
        cartHandlar () {
            console.log(this.id)
        }
    },
};
</script>

<style>
.product img {
  width: 100%;
  height: 250px;
}

.product {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}
</style>
