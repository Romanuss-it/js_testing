import { render, screen } from '@testing-library/react'
import Counter from './Counter'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import { createReduxStore } from '../../store/store'
import { renderWithRedux } from '../../tests/helpers/renderWithRedux'
import { renderTestApp } from '../../tests/helpers/renderTestApp'

describe('Counter test', () => {
  test('Test router', async () => {
    const { getByTestId } = render(renderWithRedux(<Counter />))

    const incrementBtn = getByTestId('increment-btn')
    expect(getByTestId('value-title')).toHaveTextContent('0')
    userEvent.click(incrementBtn)
    expect(getByTestId('value-title')).toHaveTextContent('1')
  })
})
