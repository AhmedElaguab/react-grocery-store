import './styles.css'

function SearchBar() {
  return (
    <div>
      <div>
        <input className="search" type="text" placeholder="Search..." />
      </div>
      <div>
        <input type="checkbox" name="only-in-stock" id="only-in-stock" />
        <label htmlFor="only-in-stock">Only show products on stock</label>
      </div>
    </div>
  )
}

function ProductTableCategory({ category }) {
  return (
    <tr>
      <th colSpan="2">{category}</th>
    </tr>
  )
}

function ProductTableRow() {
  return (
    <>
      <tr>
        <td>Apple </td>
        <td>$1</td>
      </tr>
      <tr>
        <td>Dragonfruit </td>
        <td>$1</td>
      </tr>
      <tr>
        <td>Passionfruit </td>
        <td>$2</td>
      </tr>
    </>
  )
}

function ProductTable() {
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

export default function App() {
  return (
    <div className="App">
      <SearchBar />
      <ProductTable />
    </div>
  )
}
