<template>
    <div class="">
        <router-link class="catalog__pic" :to="{ name: 'product', params: { id: product.id } }">
            <img :src="product.img" alt="product.title">
        </router-link>

        <h3 class="catalog__title">
            <router-link :to="{ name: 'product', params: { id: product.id } }">
                {{ product.title }}
            </router-link>

        </h3>

        <span class="catalog__price">
            {{ product.price | numberFormat }} ₽
        </span>
        <ProductColor :productColors="product.colors" />
    </div>
</template>


<script>
import ProductColor from '@/components/ProductColor';
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';

export default {
    props: ['product'],
    components: { ProductColor },
    methods: {
        gotoPage
    },
    filters: {
        numberFormat
    },
}
</script>
