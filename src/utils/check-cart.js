export const checkItemInCart = (cart, productId) => {
  return cart.some(({ product }) => product.id === productId);
};

export const checkItemInFav = (fav, productId) =>
  fav.some(({ product }) => product.id === productId);
