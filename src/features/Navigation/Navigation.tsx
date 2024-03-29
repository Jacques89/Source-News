import { ReactElement, useState } from 'react'

import { useSpring, animated } from 'react-spring'
import { FaBars } from 'react-icons/fa'
import { FaTimes } from 'react-icons/fa'

import '../../styles/Navigation.scss'

const Navigation = ({
  category,
  changeCategory
}: NavigationProps): ReactElement => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)

  const topAnimation = useSpring({
    marginTop: 0,
    from: { marginTop: -1000, transitionDuration: '.8s' }
  })
  const menuAnimation = useSpring({
    opacity: menuOpen ? 1 : 0,
    display: menuOpen ? 'block' : 'none',
    zIndex: menuOpen ? 2 : 1
  })

  return (
    <animated.div style={topAnimation} data-testid='navigation'>
      <header>
        <h1 onClick={() => changeCategory('World')}>Source News</h1>
        <h3>Straight from the sources mouth!</h3>
        {menuOpen ? (
          <FaTimes
            className='icon-menu'
            onClick={() => setMenuOpen(!menuOpen)}
          />
        ) : (
          <FaBars
            className='icon-menu'
            onClick={() => setMenuOpen(!menuOpen)}
          />
        )}
      </header>
      <animated.nav style={menuAnimation}>
        <ul aria-label='news-categories'>
          <li
            aria-label='category'
            onClick={() => {
              setMenuOpen(!menuOpen)
              changeCategory('World')
            }}
            style={{
              backgroundColor: category === 'World' ? '#fff' : '#000',
              color: category === 'World' ? '#000' : '#fff'
            }}
          >
            World
          </li>
          <li
            aria-label='category'
            onClick={() => {
              setMenuOpen(!menuOpen)
              changeCategory('Business')
            }}
            style={{
              backgroundColor: category === 'Business' ? '#fff' : '#000',
              color: category === 'Business' ? '#000' : '#fff'
            }}
          >
            Business
          </li>
          <li
            aria-label='category'
            onClick={() => {
              setMenuOpen(!menuOpen)
              changeCategory('Sports')
            }}
            style={{
              backgroundColor: category === 'Sports' ? '#fff' : '#000',
              color: category === 'Sports' ? '#000' : '#fff'
            }}
          >
            Sports
          </li>
          <li
            aria-label='category'
            onClick={() => {
              setMenuOpen(!menuOpen)
              changeCategory('Entertainment')
            }}
            style={{
              backgroundColor: category === 'Entertainment' ? '#fff' : '#000',
              color: category === 'Entertainment' ? '#000' : '#fff'
            }}
          >
            Entertainment
          </li>
          <li
            aria-label='category'
            onClick={() => {
              setMenuOpen(!menuOpen)
              changeCategory('Technology')
            }}
            style={{
              backgroundColor: category === 'Technology' ? '#fff' : '#000',
              color: category === 'Technology' ? '#000' : '#fff'
            }}
          >
            Technology
          </li>
        </ul>
      </animated.nav>
    </animated.div>
  )
}

export default Navigation
