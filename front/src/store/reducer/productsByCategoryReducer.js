const LOAD_PRODUCT_BY_CATEGORY = 'LOAD_PRODUCT_BY_CATEGORY';


export const loadProductsByCategoryAction = payload => ({ type: LOAD_PRODUCT_BY_CATEGORY, payload });

export const productsByCategoryReducer = (state=[], action) => {
    if(action.type === LOAD_PRODUCT_BY_CATEGORY){
      return action.payload.map(el => ({...el, show_product: true}))
    } else {
      return state
    }
  }