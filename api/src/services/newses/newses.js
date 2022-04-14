import { db } from 'src/lib/db'

export const newses = () => {
  return db.news.findMany()
}

export const categoriesWiseNews = ({ category }) => {
  return db.news.findMany({
    where: {category}
  })
}

export const news = ({ id }) => {
  return db.news.findUnique({
    where: { id },
  })
}

export const createNews = ({ input }) => {
  return db.news.create({
    data: input,
  })
}

export const updateNews = ({ id, input }) => {
  return db.news.update({
    data: input,
    where: { id },
  })
}

export const deleteNews = ({ id }) => {
  return db.news.delete({
    where: { id },
  })
}
