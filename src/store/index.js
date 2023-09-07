import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        basketProducts: [
            {
                productId: 1,
                amount: 2,
            },
            {
                productId: 2,
                amount: 4,
            }
        ]
    },
    mutations: {
        addProductToBasket(state, payload) {
            state.basketProducts.push(
                {
                    productId: payload.productId,
                    amount: payload.amount
                }
            )
        }
    }
});

