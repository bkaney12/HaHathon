export const checkItemInCart = (cart, productId) => {
  return cart.some(({ product }) => product.id === productId);
};

export const checkItemInFavs = (favs, productId) => favs.some(({ product }) => product.id === productId);