import ProductTableCategory from './ProductTableCategory'

export default function ProductTable({ products, filterText, inStockOnly }) {
  const categories = []
  const categoriesContent = []

  products.forEach(product => {
    if (!categories.includes(product.category)) {
      const filteredProducts = []
      products.forEach(p => {
        if (p.category !== product.category) return
        if (inStockOnly && !p.stocked) return
        if (filterText && p.name.toLowerCase().indexOf(filterText) === -1) {
          return
        }

        filteredProducts.push(p)
      })

      if (filteredProducts.length > 0) {
        categoriesContent.push(
          <ProductTableCategory
            key={product.category}
            category={product.category}
            products={filteredProducts}
          />,
        )
      }
      categories.push(product.category)
    }
  })

  return (
    <div>
      <table>
        <tbody>{categoriesContent}</tbody>
      </table>
    </div>
  )
}
