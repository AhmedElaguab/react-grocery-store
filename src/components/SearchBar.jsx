export default function SearchBar() {
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
