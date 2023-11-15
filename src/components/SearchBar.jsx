export default function SearchBar({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) {
  return (
    <form>
      <div>
        <input
          className="search"
          type="text"
          placeholder="Search..."
          value={filterText}
          onChange={e => {
            const inputValue = event.target.value.trim()
            onFilterTextChange(inputValue)
          }}
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="in-stock-only"
          id="in-stock-only"
          checked={inStockOnly}
          onChange={() => {
            onInStockOnlyChange(!inStockOnly)
          }}
        />
        <label htmlFor="in-stock-only">Only show products on stock</label>
      </div>
    </form>
  )
}
