

interface ProductItemProps {
  name: string;
  addToCart(name: string): void;
}

export default function ProductItem({name, addToCart}: ProductItemProps) {
  return (
    <>
      <span>{name}</span>
      <button onClick={() => addToCart(name)}>add to cart</button>
    </>
  )
}