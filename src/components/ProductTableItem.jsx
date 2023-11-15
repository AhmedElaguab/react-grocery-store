export default function ProductTableItem({ product }) {
  return (
    <tr key={product.name}>
      <td>
        <span style={{ color: product.stocked ? 'green' : 'red' }}>
          {product.name}
        </span>{' '}
      </td>
      <td>{product.price}</td>
    </tr>
  )
}
