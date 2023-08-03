import { render } from '@testing-library/react'

import ItemList from './ItemList'

test('should render ItemList component', () => {
  const view = render(<ItemList />)

  expect(view).toMatchSnapshot()
})