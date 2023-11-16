import ProductTableList from './ProductTableList'

export default function ProductTableCategory({ category, products }) {
  return (
    <>
      {products.length > 0 && (
        <table className="flex flex-col">
          <thead className="">
            <tr className="flex">
              <th
                className="w-full text-md uppercase bg-slate-900 text-white p-1 rounded-t-md mt-4"
                colSpan="2"
              >
                {category}
              </th>
            </tr>
            <tr className="flex text-left text-sm px-2 py-1 bg-slate-800 text-slate-500 border-x-2 border-slate-900">
              <th className="w-1/2 ">Name </th>
              <th className="w-1/2 ">Price</th>
            </tr>
          </thead>
          <tbody>
            <ProductTableList products={products} />
          </tbody>
        </table>
      )}
    </>
  )
}
