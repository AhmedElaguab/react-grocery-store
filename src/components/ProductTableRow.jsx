export default function ProductTableRow({ products }) {
  return (
    <>
      {products.map(product => (
        <tr key={product.name}>
          <td>{product.name} </td>
          <td>{product.price}</td>
        </tr>
      ))}
    </>
  )
}
