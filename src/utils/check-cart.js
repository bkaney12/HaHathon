export const checkItemInCart = (cart, productId) => {
  return cart.some(({ product }) => product.id === productId);
};
