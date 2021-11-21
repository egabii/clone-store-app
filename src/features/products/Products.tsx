
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import ProductItem from './components/ProductItem/ProductItem';
import { addToCart } from './products.slice';

export default function Products() {
  const products = useAppSelector((state: any) => state.products.data); // returns a selector function
  const dispatch = useAppDispatch(); // we have access to dispatch function


  function handleClick(productName: string): void {
    dispatch(addToCart(productName));
  }

  return (
    <ul> 
      { products.map((product: any) => (
        <li key={product.name}>
          <ProductItem name={product.name} addToCart={handleClick} />
        </li>
        )
      )}
    </ul>
  )
}