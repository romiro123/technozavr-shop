<template>
    <ul class="colors colors--black">
        <li class="colors__item" v-for="(colorItem, index) in colorsItem" :key="index">
            <label class="colors__label">
                <input class="colors__radio sr-only" type="radio" :value="colorItem" v-model="color">
                <span class="colors__value" :style="{ 'background-color': colorItem }">
                </span>
            </label>
        </li>
    </ul>
</template>

<script>
//список всех цветов
import color from '@/data/colors';
export default {
    props: {
        //массив цветов продукта
        productColors: {
            type: Array,
            default: []
        },

    },
    //первый цвет по умолчанию
    data() {
        return {
            color: '',
        };
    },

    computed: {
        //регистрируем массив всех цветов, что бы после обратиться к нему
        colors() {
            return color;
        },
        //перебираем массив всех цветов и id.цветов товара. 
        //Найденные совпадения по id пушим в новый массив для определения его цвета.
        colorsItem() {
            let arr = [];

            this.colors.forEach((e) => {
                this.productColors.forEach((el) => {
                    if (e.id === el) {
                        //определяем первый цвет
                        if (!arr.length) {
                            this.color = e.color
                        };
                        arr.push(e.color)
                    };
                });
            });
            return arr;
        },
    },
}
</script>