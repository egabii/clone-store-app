import reducer, { IProducts, initialState, addToCart, setFavourite } from './products.slice';

describe('productReducers', () => {
  // writing test for reducers following sample from 
  // @url: https://redux.js.org/usage/writing-tests#reducers
  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });
  
  // when user increments product quantity product item is added to cart
  test('should increment product quantity', () => {
    const previousState: IProducts = {
      data: [
        {
          collection: 'codeland',
          name: 'sandald 2021',
          quantity: 0,
          favourite: false
        }
      ]
    }
    expect(reducer(previousState, addToCart('sandald 2021'))).toEqual({
      data: [
        {
          collection: 'codeland',
          name: 'sandald 2021',
          quantity: 1,
          favourite: false
        }
      ]
    })
  });
  
  test('should icrement quantity of another product item', () => {
    const previousState: IProducts = {
      data: [
        {
          collection: 'codeland',
          name: 'sandald 2021',
          quantity: 1,
          favourite: false
        },
        {
          collection: 'devshop',
          name: 'mug 2021',
          quantity: 0,
          favourite: false
        }
      ]
    }
  
    const nextState = reducer(previousState, addToCart('mug 2021'))
    const quantity = nextState.data.reduce((acum, d) =>  acum + d.quantity, 0);
    expect(quantity).toEqual(2);
  });
  
  test('should check favourite of product item', () => {
    const previousState: IProducts = {
      data: [
        {
          collection: 'codeland',
          name: 'sandald 2021',
          quantity: 1,
          favourite: false
        },
        {
          collection: 'devshop',
          name: 'mug 2021',
          quantity: 0,
          favourite: false
        }
      ]
    }
  
    const nextState = reducer(previousState, setFavourite('sandald 2021'))
    const pingFavProduct = nextState.data.find(product => product.name === 'sandald 2021');
    expect(pingFavProduct?.favourite).toBeTruthy();
  });
  
  
  test('should uncheck favourite of product item', () => {
    const previousState: IProducts = {
      data: [
        {
          collection: 'codeland',
          name: 'sandald 2021',
          quantity: 1,
          favourite: true
        },
        {
          collection: 'devshop',
          name: 'mug 2021',
          quantity: 0,
          favourite: false
        }
      ]
    }
  
    const nextState = reducer(previousState, setFavourite('sandald 2021'))
    const pingFavProduct = nextState.data.find(product => product.name === 'sandald 2021');
    expect(pingFavProduct?.favourite).toBeFalsy();
  });
});

