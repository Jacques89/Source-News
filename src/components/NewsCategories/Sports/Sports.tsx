import { ReactElement } from 'react'
import { CategoryProps } from '../types'

const Sports = ({ children }: CategoryProps): ReactElement => {
  return <div>{children}</div>
}

export default Sports
