<template>
    <ul class="catalog__list">
        <li class="catalog__item" v-for="(product, index) in products" :key="index">
            <ProductItem v-bind:product="product"></ProductItem>
        </li>
    </ul>
</template>

<script>
import ProductItem from './ProductItem';

export default {
    props: ['products'],
    components: { ProductItem: ProductItem },
}
</script>