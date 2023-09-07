<template>
  <!-- <component :is="currentPageComponent" :page-params="currentPageParams" /> -->
  <div>
    <AppHeader />

    <router-view />

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter'
export default {
  components: { AppHeader, AppFooter }
}
</script>

<!-- // import Catalog from '@/pages/CatalogPage';
// import ProductPage from '@/pages/ProductPage';
// import NotFoundPage from '@/pages/NotFoundPage';
// import eventBus from '@/eventBus';

//список страниц
// const routes = {
//   catalog: 'Catalog',
//   product: 'ProductPage',
// };

 export default { 
  // data() {
  //   return {
  //     currentPage: 'catalog',
  //     currentPageParams: {},
  //   }
  // },

  // computed: {
  //   currentPageComponent() {
  //     return routes[this.currentPage] || 'NotFoundPage';
  //   }
  // },
  // methods: {
  //   gotoPage(pageName, pageParams) {
  //     this.currentPage = pageName;
  //     this.currentPageParams = pageParams || {};
  //   },
  // },
  // components: { Catalog, ProductPage, NotFoundPage },
  // created() {
  //   console.log('hello create')
  //   eventBus.$on('gotoPage', (pageName, pageParams) => this.gotoPage(pageName, pageParams))
  // }

 }
</script>  -->