import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import CategoriesCell from 'src/components/CategoriesCell/CategoriesCell'


const CategoryPage = ({ category }) => {
  return (
    <>
      <MetaTags title="Category" description="Category page" />
      <h1>CategoryPage</h1>
      <CategoriesCell category={category}  />
    </>
  )
}

export default CategoryPage
