import Cookies from 'js-cookie'

export const state = () => ({
  wishes: []
})

export const mutations = {
  setItems (state, wishes) {
    state.wishes = wishes
  },
  add (state, wish) {
    const record = state.wishes.find(i => i.id === wish.id)

    if (!record) {
      state.wishes.push({
        quantity: 1,
        ...wish
      })
    } else {
      record.quantity++
    }

    Cookies.set('wishlist', JSON.stringify(state.wishes))
  },
  remove (state, wish) {
    const record = state.wishes.find(i => i.id === wish.id)

    if (record.quantity > 1) {
      record.quantity--
    } else {
      const index = state.wishes.findIndex(i => i.id === wish.id)
      state.wishes.splice(index, 1)
    }

    Cookies.set('wishlist', JSON.stringify(state.wishes))
  },
  emptyList (state) {
    state.wishes = []
    Cookies.set('wishlist', JSON.stringify(state.wishes))
  }
}

export const getters = {
  items: (state) => {
    return state.wishes
  },
  price: (state) => {
    return state.wishes.reduce(
      (accumulator, wish) =>
        accumulator + wish.attributes.price * wish.quantity,
      0
    )
  },
  numberOfItems: (state) => {
    return state.wishes.reduce(
      (accumulator, wish) => accumulator + wish.quantity,
      0
    )
  }
}
