import ProductTableList from './ProductTableList'

export default function ProductTableCategory({ category, products }) {
  return (
    <>
      {products.length > 0 && (
        <>
          <tr>
            <th colSpan="2">{category}</th>
          </tr>
          <tr>
            <th>Name </th>
            <th>Price</th>
          </tr>
          <ProductTableList products={products} />
        </>
      )}
    </>
  )
}
