import PrimaryNewsCard from '../NewsCard/NewsCard'
import SecondaryNewsCard from '../NewsCard/SecondaryNewsCard'

const CategoryBlock = ({ categories }) => {
  const first = categories[0]
  const rest = categories.slice(1)
  const category = 'National'
  return (
    <div className="bg-gray-100 px-4 py-2 shadow mx-auto max-w-3xl rounded-sm grid gap-4 sm:grid-cols-2">
      <div className="px-1 flex justify-between items-center pb-1 border-b-2  sm:col-span-2">
        <p className="text-xl font-medium">{category}</p>
        <p className="text-sm text-gray-600 font-normal">More</p>
      </div>
      <PrimaryNewsCard data={first} />
      {rest.map((item) => {
        return <SecondaryNewsCard key={item.id} data={item} />
      })}
    </div>
  )
}

export default CategoryBlock
