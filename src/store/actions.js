 import axios from 'axios'
//
// export const fetchNumber = ({commit}, {min=1, max=20}) => {
//
//   axios.get('http://fresher.app:8000/api/random?min=${min}&max=${max}').then((response) => {
//       commit('addRandomNumber', response.data.number)
//   })
//
// }


//get products

export const getProducts = ({commit}) => {
  axios.get('http://fresher.tech/api/products').then((response) => {
      commit('setProducts', response.data)
  })
 return Promise.resolve()
}

//add a product to our carts

export const addProductToCart = ( { commit }, { product, quantity }) => {

  commit('appendToCart', {product, quantity} )

  return axios.post('http://fresher.tech/api/cart', {
    product_id: product.id,
    quantity
  })
}

//get carts
export const getCart = ({ commit }) => {
  return axios.get('http://fresher.tech/api/cart').then((response) =>  {
    commit('setCart', response.data)
    return Promise.resolve()
  })

}

//remove a product from our carts
export const removeProductFromCart = ({ commit }, productId) => {
   commit('removeFromCart', productId)
  return axios.delete('http://fresher.tech/api/cart/${productId}')
}

//remove all products from our cart
export const removeAllProductsFromCart = ({ commit }) => {
   commit('clearCart')
   return axios.delete('http://fresher.tech/api/cart')
}
