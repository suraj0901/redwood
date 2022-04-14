import News from 'src/components/News/News'

export const QUERY = gql`
  query FindNewsById($id: Int!) {
    news: news(id: $id) {
      id
      title
      category
      image
      body
      date
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>News not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ news }) => {
  return <News news={news} />
}
