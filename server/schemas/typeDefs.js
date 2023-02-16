const typeDefs = `
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    likes: [String]
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type ArticleList {
    articles: []
    category: String
  }

  type Article {
    _id: ID
    articleId: Int
    articleTypeId: Int
    title: String
    lastUpdated: String
    tags: [String]
    likes: [String]
    likedBy: [String]
  }

  type Query {
    profiles: [Profile]!
    profile(_id: ID!): Profile
    articles: [Article]
    article(articleId: Int): Article
    articleLists: [ArticleList]
    articleList(_id: ID): ArticleList  
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
  }

  type Mutation {
    login(email: String!, password: String!): Auth

    addProfile(
      name: String!
      email: String! 
      password: String!
    ): Auth

    addArticle(
      profileId: ID!
      articleId: Int!
      articleTypeId: Int
      title: String!
      lastUpdated: String
      tags: [String]
      likes: [String]
      LikedBy: [String]
    ): Article

    

    removeProfile: Profile
  }
`;

module.exports = typeDefs;
