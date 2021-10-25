import { ReactElement } from 'react'
import { CategoryProps } from '../types'

const Business = ({ children }: CategoryProps): ReactElement => {
  return <div>{children}</div>
}

export default Business
