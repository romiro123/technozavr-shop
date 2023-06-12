<template>
  <section class="catalog">
    <ProductList :products="products"></ProductList>
    <AppPagination v-model="page" :count="countProducts" :per-page="productsPerPage"></AppPagination>
  </section>
</template>

<script>
import products from './data/products';
import ProductList from './components/ProductList';
import AppPagination from './components/AppPagination';


export default {
  name: 'App',
  components: { ProductList: ProductList, AppPagination: AppPagination },

  data() {
    return {
      page: 1,
      productsPerPage: 3,
    }
  },
  computed: {
    //возращает часть товаров взависимости от значения пагинации
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return products.slice(offset, offset + this.productsPerPage);
    },
    //возвращает общее кол-во товаров
    countProducts() {
      return products.length
    }
  },
}
</script>