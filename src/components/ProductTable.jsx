import ProductTableRow from './ProductTableRow'
import ProductTableCategory from './ProductTableCategory'

export default function ProductTable() {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name </th>
            <th>Price</th>
          </tr>
          <ProductTableCategory category="Fruits" />
          <ProductTableRow />
          <ProductTableCategory category="Vegetables" />
          <ProductTableRow />
        </tbody>
      </table>
    </div>
  )
}
