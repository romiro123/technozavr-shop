<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">
        Каталог
      </h1>
      <span class="content__info">
        152 товара
      </span>
    </div>

    <div class="content__catalog">
      <ProductFilter :price-from.sync="filterPriceFrom" :price-to.sync="filterPriceTo"
        :category-id.sync="filterCategoryId">
      </ProductFilter>

      <section class="catalog">
        <ProductList :products="products"></ProductList>
        <AppPagination v-model="page" :count="countProducts" :per-page="productsPerPage"></AppPagination>
      </section>

    </div>
  </main>
</template>

<script>
import products from './data/products';
import ProductList from './components/ProductList';
import AppPagination from './components/AppPagination';
import ProductFilter from './components/ProductFilter';


export default {
  name: 'App',
  components: { ProductList: ProductList, AppPagination: AppPagination, ProductFilter: ProductFilter },

  data() {
    return {
      filterCategoryId: 0,
      filterPriceFrom: 0,
      filterPriceTo: 0,

      page: 1,
      productsPerPage: 3,
    }
  },
  computed: {
    //возращает часть товаров взависимости от значения пагинации
    products() {
      const offset = (this.page - 1) * this.productsPerPage;
      return this.filteredProducts.slice(offset, offset + this.productsPerPage);
    },
    //возвращает общее кол-во товаров
    countProducts() {
      return this.filteredProducts.length;
    },
    //возвращает отфильтрованный список товаров
    filteredProducts() {
      let filteredProducts = products;
      if (this.filterPriceFrom > 0) {
        filteredProducts = filteredProducts.filter(product => product.price > this.filterPriceFrom);
      };
      if (this.filterPriceTo > 0) {
        filteredProducts = filteredProducts.filter(product => product.price < this.filterPriceTo);
      };
      if (this.filterCategoryId > 0) {
        filteredProducts = filteredProducts.filter(product => product.categoryId === this.filterCategoryId);
      };
      return filteredProducts;
    },
  },
}
</script>