import CategoryBlock from '../CategoryBlock/CategoryBlock'

export const QUERY = gql`
  query CategoryWiseNews($category: String!) {
    categories: categoriesWiseNews(category: $category) {
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
  return <CategoryBlock categories={categories} />
}
