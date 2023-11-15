import ProductTableItem from './ProductTableItem'

export default function ProductTableList({ products }) {
  return (
    <>
      {products.map(product => (
        <ProductTableItem key={product.name} product={product} />
      ))}
    </>
  )
}
