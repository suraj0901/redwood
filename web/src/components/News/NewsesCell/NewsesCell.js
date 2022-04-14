import { Link, routes } from '@redwoodjs/router'

import Newses from 'src/components/News/Newses'

export const QUERY = gql`
  query FindNewses {
    newses {
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

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No newses yet. '}
      <Link to={routes.newNews()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ newses }) => {
  return <Newses newses={newses} />
}
