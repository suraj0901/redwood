import SecondaryNewsCard from "../NewsCard/NewsCard"

export const QUERY = gql`
  query CategoryWiseNews($category: String!) {
    categories: categoriesWiseNews(category: $category){
      id
      title
      image
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ categories }) => {
  const first = categories[0]
  const rest = categories.slice(1)
  return (
    <div className="bg-gray-100 p-4  shadow-sm mx-auto max-w-3xl rounded-sm gap-4 grid grid-cols-1 grid-rows-3 sm:grid-cols-2">
      <div className="flex flex-col gap-4 row-span-3 ">
        <img src={first.image} />
        <h1 className="p-1 font-medium text-lg" >{first.title} randome text scndskfn kjvdns k fvkds basbf fbasjknfkw  </h1>
      </div>
      {rest.map((item) => {
        return <SecondaryNewsCard key={item.id} data={item} />
      })}
    </div>
  )
}
