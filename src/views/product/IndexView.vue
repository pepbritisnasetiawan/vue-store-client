<template>
  <div class="">
    <div class="" id="page-wrap">
      <div class="grid-wrap">
        <ProductItem v-for="product in products" :key="product.id" :product="product"/>
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';
import { products } from '@/data-seed';

export default {
  components: {
    ProductItem
  },
  data() {
    return {
      products,
    };
  },
};
</script>

<style scoped>
.grid-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 16px;
}


</style>
