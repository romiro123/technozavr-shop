<template>
    <div class="">
        <a class="catalog__pic" href="#">
            <img :src="product.img" alt="product.title">
        </a>

        <h3 class="catalog__title">
            <a href="#">
                {{ product.title }}
            </a>
        </h3>

        <span class="catalog__price">
            {{ product.price }} ₽
        </span>
        <ProductColor :productColors="product.colors" />
    </div>
</template>


<script>
import ProductColor from '@/components/ProductColor';

export default {
    props: ['product'],
    components: { ProductColor },
}
</script>
