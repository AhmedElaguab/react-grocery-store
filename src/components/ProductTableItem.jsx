export default function ProductTableItem({ product }) {
  const textColor = product.stocked ? 'text-slate-900' : 'text-red-900'
  return (
    <tr
      className={`flex text-md ${textColor} p-2 border-x-2 border-slate-900 last:border-b-2 last:rounded-b-md odd:bg-slate-200 even:bg-slate-300 `}
      key={product.name}
    >
      <td className="w-1/2">{product.name}</td>
      <td className="w-1/2 font-bold">{product.price}</td>
    </tr>
  )
}
