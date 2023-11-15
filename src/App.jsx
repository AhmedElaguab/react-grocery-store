import './styles.css'
import { useState } from 'react'
import SearchBar from './components/SearchBar'
import ProductTable from './components/ProductTable'

export default function App() {
  const [filterText, setFilterText] = useState('')
  const [inStockOnly, setInStockOnly] = useState(false)

  return (
    <div className="App">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={setFilterText}
        onInStockOnlyChange={setInStockOnly}
      />
      <ProductTable filterText={filterText} inStockOnly={inStockOnly} />
    </div>
  )
}
