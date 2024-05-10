import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

interface State {
    cart: any[]
}

export default createStore({
    state: {
        cart: [],
    } as State,
    mutations: {
        addToCart(state, product) {
            state.cart.push(product)
        },
        removeFromCart(state, productId) {
            state.cart = state.cart.filter((item: any) => item.id !== productId)
        },
        clearCart(state) {
            state.cart = []
        },
    },
    actions: {
        addProductToCart({ commit }, product) {
            commit('addToCart', product)
        },
        removeProductFromCart({ commit }, productId) {
            commit('removeFromCart', productId)
        },
        clearCartItems({ commit }) {
            commit('clearCart')
        },
    },
    getters: {
        cartItems: (state) => state.cart,
    },
    plugins: [createPersistedState()],
})
