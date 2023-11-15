import ProductTableList from './ProductTableList'
import ProductTableCategory from './ProductTableCategory'

export default function ProductTable({ products, filterText, inStockOnly }) {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name </th>
            <th>Price</th>
          </tr>
          <ProductTableCategory category="Fruits" />
          <ProductTableList
            products={[...products.filter(x => x.category == 'Fruits')]}
          />
          <ProductTableCategory category="Vegetables" />
          <ProductTableList
            products={[...products.filter(x => x.category == 'Vegetables')]}
          />
        </tbody>
      </table>
    </div>
  )
}
