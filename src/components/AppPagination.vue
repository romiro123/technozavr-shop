<template>
    <ul class="catalog__pagination pagination">
        <li class="pagination__item">
            <button href="#" class="pagination__link pagination__link--arrow" :disabled="page === 1"
                :class="{ 'pagination__link--disabled': page === 1 }" aria-label="Предыдущая страница"
                @click.prevent="prevPage()">

                <svg width="8" height="14" fill="currentColor">
                    <use xlink:href="#icon-arrow-left"></use>
                </svg>
            </button>
        </li>
        <li class="pagination__item" v-for="pageNumber in pages" :key="pageNumber">
            <a href="#" class="pagination__link" :class="{ 'pagination__link--current': pageNumber === page }"
                @click.prevent="paginate(pageNumber)">
                {{ pageNumber }}
            </a>
        </li>
        <li class="pagination__item">
            <button href="#" class="pagination__link pagination__link--arrow" :disabled="page === pages"
                :class="{ 'pagination__link--disabled': page === pages }" aria-label="Следующая страница"
                @click.prevent="nextPage()">

                <svg width="8" height="14" fill="currentColor">
                    <use xlink:href="#icon-arrow-right"></use>
                </svg>
            </button>
        </li>
    </ul>
</template>

<script>
export default ({
    model: {
        prop: "page",
        event: 'paginate',
    },
    props: ['page', 'count', 'perPage'],

    computed: {
        //вычисляем кол-во стр
        pages() {
            return Math.ceil(this.count / this.perPage);
        }
    },
    methods: {
        paginate(page) {
            this.$emit('paginate', page);
        },
        prevPage() {
            this.$emit('paginate', this.page - 1);
        },
        nextPage() {
            this.$emit('paginate', this.page + 1);
        }

    }
})
</script>
