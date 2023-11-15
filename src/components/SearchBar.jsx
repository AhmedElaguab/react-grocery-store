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
          className="w-full border-2 rounded-md text-lg p-2 mb-2 border-gray-200 focus:border-gray-800"
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
        <label htmlFor="in-stock-only" className="flex">
          <input
            className="absolute h-4 w-4  accent-gray-700 bg-grey-700 text-red-500 rounded cursor-pointer"
            type="checkbox"
            name="in-stock-only"
            id="in-stock-only"
            checked={inStockOnly}
            onChange={() => {
              onInStockOnlyChange(!inStockOnly)
            }}
          />
          <span className="text-sm ml-6 uppercase font-medium">
            Only show products on stock
          </span>
        </label>
      </div>
    </form>
  )
}
