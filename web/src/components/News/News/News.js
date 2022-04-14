import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes, navigate } from '@redwoodjs/router'

const DELETE_NEWS_MUTATION = gql`
  mutation DeleteNewsMutation($id: Int!) {
    deleteNews(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const News = ({ news }) => {
  const [deleteNews] = useMutation(DELETE_NEWS_MUTATION, {
    onCompleted: () => {
      toast.success('News deleted')
      navigate(routes.newses())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete news ' + id + '?')) {
      deleteNews({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            News {news.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{news.id}</td>
            </tr>
            <tr>
              <th>Title</th>
              <td>{news.title}</td>
            </tr>
            <tr>
              <th>Category</th>
              <td>{news.category}</td>
            </tr>
            <tr>
              <th>Image</th>
              <td>{news.image}</td>
            </tr>
            <tr>
              <th>Body</th>
              <td>{news.body}</td>
            </tr>
            <tr>
              <th>Date</th>
              <td>{timeTag(news.date)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.editNews({ id: news.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(news.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default News
