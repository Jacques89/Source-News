import React from 'react'
import NewsContainer from './NewsContainer'

import { shallow } from 'enzyme'

describe('NewsContainer', () => {
  let wrapper
  beforeEach(() => (
  wrapper = shallow(<NewsContainer />)
))

  it('renders correctly', () => {
    const wrapper = shallow(<NewsContainer />)
  
    expect(wrapper).toMatchSnapshot()
  })

  it('should render a <div>', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
})
