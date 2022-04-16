import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import Header from 'src/components/Header/Header'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <Header />
    </>
  )
}

export default HomePage
