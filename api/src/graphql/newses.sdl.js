export const schema = gql`
  enum Category {
    National
    Education
    Sports
    Crime
    Entertainment
  }
  type News {
    id: Int!
    title: String!
    category: Category!
    image: String!
    body: String!
    date: DateTime
  }

  type Query {
    newses: [News!]! @requireAuth
    news(id: Int!): News @requireAuth
    categoriesWiseNews(category: String): [News!]! @skipAuth
  }

  input CreateNewsInput {
    title: String!
    category: Category!
    image: String!
    body: String!
    date: DateTime
  }

  input UpdateNewsInput {
    title: String
    category: Category
    image: String
    body: String
    date: DateTime
  }

  type Mutation {
    createNews(input: CreateNewsInput!): News! @requireAuth
    updateNews(id: Int!, input: UpdateNewsInput!): News! @requireAuth
    deleteNews(id: Int!): News! @requireAuth
  }
`
