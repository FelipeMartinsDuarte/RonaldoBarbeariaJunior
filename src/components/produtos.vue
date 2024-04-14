<template>
    <div class="product-carousel">
      <carousel :perPageCustom="[[320, 1], [480, 2], [768, 3], [1024, 4], [1200, 5]]" :navigationEnabled="true">
        <slide v-for="(product, index) in products" :key="index">
          <div class="product-item">
            <img :src="product.image" alt="Product Image" class="product-image">
            <div class="product-details">
              <p class="product-name">{{ product.name }}</p>
              <p class="product-price">{{ product.price }}</p>
            </div>
          </div>
        </slide>
      </carousel>
    </div>
  </template>
  
  <script>
  import { RouterLink, RouterView } from 'vue-router'
  import Carousel from 'vue-carousel/src/Carousel.vue';
  import Slide from 'vue-carousel/src/Slide.vue';
  
  export default {
    name: 'produtos',
    components: {
      Carousel,
      Slide
    },
    data() {
      return {
        products: [
          { name: 'Product 1', image: 'product1.jpg', price: '$10.00' },
          { name: 'Product 2', image: 'product2.jpg', price: '$15.00' },
          { name: 'Product 3', image: 'product3.jpg', price: '$20.00' },
          // Adicione mais produtos conforme necessário
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  /* Estilos personalizados */
  .product-carousel {
    max-width: 1200px;
    margin: 0 auto;
  }
  
  .product-item {
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
  }
  
  .product-image {
    width: 100%;
    max-width: 200px;
    height: auto;
    margin-bottom: 10px;
  }
  
  .product-name {
    font-weight: bold;
  }
  
  .product-price {
    color: #888;
  }
  </style>