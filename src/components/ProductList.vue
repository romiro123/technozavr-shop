<template>
    <ul class="catalog__list">
        <!-- <li class="catalog__item" v-for="product in products" :key="product.id">
            <ProductItem v-bind:product="product"> </ProductItem>
        </li> -->
        <ProductItem v-for="product in products" :product="product" :key="product.id"></ProductItem>

    </ul>
</template>

<script>
import ProductItem from '@/components/ProductItem';

export default {
    props: ['products'],
    components: { ProductItem: ProductItem },
}
</script>