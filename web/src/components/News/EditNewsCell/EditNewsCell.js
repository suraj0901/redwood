import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import NewsForm from 'src/components/News/NewsForm'

export const QUERY = gql`
  query EditNewsById($id: Int!) {
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
const UPDATE_NEWS_MUTATION = gql`
  mutation UpdateNewsMutation($id: Int!, $input: UpdateNewsInput!) {
    updateNews(id: $id, input: $input) {
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

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ news }) => {
  const [updateNews, { loading, error }] = useMutation(UPDATE_NEWS_MUTATION, {
    onCompleted: () => {
      toast.success('News updated')
      navigate(routes.newses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateNews({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit News {news.id}</h2>
      </header>
      <div className="rw-segment-main">
        <NewsForm news={news} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
