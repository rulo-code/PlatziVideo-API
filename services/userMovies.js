const MongoLib = require('../lib/mongo');

class userMoviesService {
  constructor() {
    this.colelection = 'user-movies';
    this.mongoDB = new MongoLib()
  }

  async getUserMovies({ userId }){
    const query = userId && { userId};
    const userMovies = await this.mongoDB.getAll(this.colelection, query)

    return userMovies || []
  }

  async createUserMovie({ userMovie }){
    const createdUserMovieId = await this.mongoDB.create(this.colelection, userMovie)
    return createdUserMovieId
  }
  async deleteUserMovie({ userMovieId }){
    const deletedUserMovieId = await this.mongoDB.delete(this.colelection, userMovieId)
    return deletedUserMovieId
  }

}

module.exports = userMoviesService