import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import NewsForm from 'src/components/News/NewsForm'

const CREATE_NEWS_MUTATION = gql`
  mutation CreateNewsMutation($input: CreateNewsInput!) {
    createNews(input: $input) {
      id
    }
  }
`

const NewNews = () => {
  const [createNews, { loading, error }] = useMutation(CREATE_NEWS_MUTATION, {
    onCompleted: () => {
      toast.success('News created')
      navigate(routes.newses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createNews({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New News</h2>
      </header>
      <div className="rw-segment-main">
        <NewsForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewNews
