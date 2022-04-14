import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/News/NewsesCell'

const DELETE_NEWS_MUTATION = gql`
  mutation DeleteNewsMutation($id: Int!) {
    deleteNews(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const NewsesList = ({ newses }) => {
  const [deleteNews] = useMutation(DELETE_NEWS_MUTATION, {
    onCompleted: () => {
      toast.success('News deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete news ' + id + '?')) {
      deleteNews({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Image</th>
            <th>Body</th>
            <th>Date</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {newses.map((news) => (
            <tr key={news.id}>
              <td>{truncate(news.id)}</td>
              <td>{truncate(news.title)}</td>
              <td>{truncate(news.category)}</td>
              <td>{truncate(news.image)}</td>
              <td>{truncate(news.body)}</td>
              <td>{timeTag(news.date)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.news({ id: news.id })}
                    title={'Show news ' + news.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editNews({ id: news.id })}
                    title={'Edit news ' + news.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete news ' + news.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(news.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default NewsesList
