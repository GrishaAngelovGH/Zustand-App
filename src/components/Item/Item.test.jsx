import { render } from '@testing-library/react'

import Item from './Item'

test('should render Item component', () => {
  const view = render(
    <Item
      title='Item 1'
      quantity={10}
      marked={false}
    />
  )

  expect(view).toMatchSnapshot()
})