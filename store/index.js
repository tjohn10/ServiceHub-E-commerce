import cookieparser from 'cookieparser'
export const state = () => ({
  allProducts: [],
  featuredProducts: [],
  iPhoneProducts: [],
  macBooks: [],
  cartItems: []
})

export const getters = {
  /*
    return items from store
  */
  allProducts: state => state.allProducts,
  featuredProducts: state => state.featuredProducts,
  iPhoneProducts: state => state.iPhoneProducts,
  macbooks: state => state.macBooks,
  getCart: state => state.cartItems,
  getCartTotal: state =>
    state.cartItems.length < 1
      ? '0'
      : state.cartItems
        .map(el => el.price * el.quantity)
        .reduce((a, b) => a + b)
}

export const actions = {
  async addItemToCart ({ commit }, cartItem) {
    await commit('setCartItem', cartItem)
  },
  async deleteCartItem ({ commit }, id) {
    await commit('removeCartItem', id)
  },
  nuxtServerInit ({ commit }, { req }) {
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      const user = (parsed.user && JSON.parse(parsed.user)) || null
      const cart = (parsed.cart && JSON.parse(parsed.cart)) || []
      commit('auth/setUser', user)
      commit('cart/setItems', cart)
    }
  }
}

export const mutations = {
  setProducts: (state, products) => (state.allProducts = products),
  setFeaturedProducts: (state, products) => (state.featuredProducts = products),
  setIphoneProducts: (state, products) => (state.iPhoneProducts = products),
  setMacBooks: (state, products) => (state.macBooks = products),
  setCartItem: (state, item) => state.cartItems.push(item),
  removeCartItem: (state, id) =>
    state.cartItems.splice(
      state.cartItems.findIndex(el => el.id === id),
      1
    )
}
