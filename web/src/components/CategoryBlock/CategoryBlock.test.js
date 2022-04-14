import { render } from '@redwoodjs/testing/web'

import CategoryBlock from './CategoryBlock'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CategoryBlock', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CategoryBlock />)
    }).not.toThrow()
  })
})
