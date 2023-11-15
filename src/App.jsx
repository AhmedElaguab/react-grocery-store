import './styles.css'

export default function App() {
  return (
    <div className="App">
      <div>
        <div>
          <input className="search" type="text" placeholder="Search..." />
        </div>
        <div>
          <input type="checkbox" name="only-in-stock" id="only-in-stock" />
          <label htmlFor="only-in-stock">Only show products on stock</label>
        </div>
      </div>
      <div>
        <table>
          <tbody>
            <tr>
              <th>Name </th>
              <th>Price</th>
            </tr>
            <tr>
              <th colspan="2">Fruits</th>
            </tr>
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
            <tr>
              <th colspan="2">Vegetables</th>
            </tr>
            <tr>
              <td>Spinach </td>
              <td>$2</td>
            </tr>
            <tr>
              <td>Pumpkin </td>
              <td>$4</td>
            </tr>
            <tr>
              <td>Peas </td>
              <td>$1</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
