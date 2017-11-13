import {
  LOAD_CART_ITEMS,
  ADD_CART_ITEM,
  REMOVE_CART_ITEM
} from './types.js';

export function loadCardItems () {
  return {
    type: LOAD_CART_ITEMS
  };
}

export function addCardItems (item) {
  return {
    type: ADD_CART_ITEM,
    payload: item
  };
}

export function removeCardItems (item) {
  return {
    type: REMOVE_CART_ITEM,
    payload: item
  };
}
