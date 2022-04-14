import { render } from '@redwoodjs/testing/web'

import NewsCard from './NewsCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewsCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewsCard />)
    }).not.toThrow()
  })
})
