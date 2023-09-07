<template>
    <ul class="catalog__list">
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