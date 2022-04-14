// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'
import NewsesLayout from 'src/layouts/NewsesLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={NewsesLayout}>
        <Route path="/newses/new" page={NewsNewNewsPage} name="newNews" />
        <Route path="/newses/{id:Int}/edit" page={NewsEditNewsPage} name="editNews" />
        <Route path="/newses/{id:Int}" page={NewsNewsPage} name="news" />
        <Route path="/newses" page={NewsNewsesPage} name="newses" />
      </Set>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/{category:String}" page={CategoryPage} name="category" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
