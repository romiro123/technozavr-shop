<template>
    <aside class="filter">
        <h2 class="filter__title">Фильтры</h2>

        <form class="filter__form form" action="#" method="get" @submit.prevent="submit">
            <fieldset class="form__block">
                <legend class="form__legend">Цена</legend>
                <label class="form__label form__label--price">
                    <input class="form__input" type="text" name="min-price" v-model.number="currentPriceFrom">
                    <span class="form__value">От</span>
                </label>
                <label class="form__label form__label--price">
                    <input class="form__input" type="text" name="max-price" v-model.number="currentPriceTo">
                    <span class="form__value">До</span>
                </label>
            </fieldset>

            <fieldset class="form__block">
                <legend class="form__legend">Категория</legend>
                <label class="form__label form__label--select">
                    <select class="form__select" type="text" name="category" v-model="currentCategoryId">
                        <option value="0">Все категории</option>
                        <option :value="category.id" v-for="category in categories" :key="category.id">{{ category.title }}
                        </option>
                    </select>
                </label>
            </fieldset>

            <fieldset class="form__block">
                <legend class="form__legend">Цвет</legend>
                <ul class="colors">
                    <li class="colors__item" v-for="(colorItem, index) in color" :key="index">
                        <label class="colors__label">
                            <input class="colors__radio sr-only" type="radio" name="color" :value="colorItem.id"
                                v-model="currentColor">
                            <span class="colors__value" :style="{ 'background-color': colorItem.color }">
                            </span>
                        </label>
                    </li>
                </ul>
            </fieldset>

            <fieldset class="form__block">
                <legend class="form__legend">Объемб в ГБ</legend>
                <ul class="check-list">
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="8" checked="">
                            <span class="check-list__desc">
                                8
                                <span>(313)</span>
                            </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="16">
                            <span class="check-list__desc">
                                16
                                <span>(461)</span>
                            </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="32">
                            <span class="check-list__desc">
                                32
                                <span>(313)</span>
                            </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="64">
                            <span class="check-list__desc">
                                64
                                <span>(313)</span>
                            </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="128">
                            <span class="check-list__desc">
                                128
                                <span>(313)</span>
                            </span>
                        </label>
                    </li>
                    <li class="check-list__item">
                        <label class="check-list__label">
                            <input class="check-list__check sr-only" type="checkbox" name="volume" value="264">
                            <span class="check-list__desc">
                                264
                                <span>(313)</span>
                            </span>
                        </label>
                    </li>
                </ul>
            </fieldset>

            <button class="filter__submit button button--primery" type="submit">
                Применить
            </button>
            <button class="filter__reset button button--second" type="button" @click.prevent="reset">
                Сбросить
            </button>
        </form>
    </aside>
</template>

<script>
import categories from '@/data/categories';
import color from '@/data/colors';
export default {
    props: ['priceFrom', 'priceTo', 'categoryId', 'colorId'],
    //значения из фильтра, которые ввели
    data() {
        return {
            currentPriceFrom: 0,
            currentPriceTo: 0,
            currentCategoryId: 0,
            currentColor: 0,
        }
    },
    computed: {
        categories() {
            return categories;
        },
        color() {
            return color;
        },
    },
    //следит за изменением. При сбросе фильтра меняет значения по умолчанию
    watch: {
        priceFrom(value) {
            this.currentPriceFrom = value;
        },
        priceTo(value) {
            this.currentPriceTo = value;
        },
        categoryId(value) {
            this.currentCategoryId = value;
        },
        colorId(value) {
            this.currentColor = value;
        },

    },
    methods: {
        // отравляем/обновляем введенные значения из фильтра и фильтруем по ним
        submit() {
            this.$emit('update:priceFrom', this.currentPriceFrom);
            this.$emit('update:priceTo', this.currentPriceTo);
            this.$emit('update:categoryId', this.currentCategoryId);
            this.$emit('update:colorId', this.currentColor);

        },
        //сброс фильтра
        reset() {
            this.$emit('update:priceFrom', 0);
            this.$emit('update:priceTo', 0);
            this.$emit('update:categoryId', 0);
            this.$emit('update:colorId', 0);

            //на прямую
            // this.currentCategoryId = 0;
            // this.currentPriceFrom = 0;
            // this.currentPriceTo = 0;
        },
    },
};
</script>