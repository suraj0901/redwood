import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import CategoriesCell from 'src/components/CategoriesCell/CategoriesCell'


const CategoryPage = ({ category }) => {
  return (
    <>
      <MetaTags title="Category" description="Category page" />
      <div className='w-full min-h-screen bg-gray-50 grid grid-cols-2 grid-rows-3'>
        <CategoriesCell className  category={category}  />
        <CategoriesCell category={category}  />
        <CategoriesCell category={category}  />
        <CategoriesCell category={category}  />
      </div>
    </>
  )
}

export default CategoryPage
