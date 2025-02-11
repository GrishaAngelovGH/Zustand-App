import { render } from '@testing-library/react'

import ItemStatus from './ItemStatus'

test('should render available ItemStatus component', () => {
  const view = render(<ItemStatus status="available" />)

  expect(view).toMatchSnapshot()
})

test('should render limited ItemStatus component', () => {
  const view = render(<ItemStatus status="limited" />)

  expect(view).toMatchSnapshot()
})