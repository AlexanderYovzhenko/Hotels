import { JSON_HEADER } from '../common/headers.js';
import statusCode from '../common/status_code.js';
import { pool as db } from '../database/database.config.js';

class MovieController {
  async createMovie(req, res) {
    let data = '';

    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', async () => {

      try {
        const { title, year_publication } = JSON.parse(data);
        const newMovie = await db.query('INSERT INTO movie (title, year_publication) values ($1, $2) RETURNING *', [title, year_publication]);

        res.writeHead(statusCode.CREATED, JSON_HEADER);
        res.write(JSON.stringify(newMovie.rows[0]));
        res.end();

      } catch (error) {
        res.writeHead(statusCode.BAD_REQUEST, JSON_HEADER);
        res.write(JSON.stringify('NOT CORRECT REQUEST!'));
        res.end();
      }
      
    });
  }

  async getMovies(req, res) {
    const movies = await db.query('SELECT * FROM movie');

    res.writeHead(statusCode.OK, JSON_HEADER);
    res.write(JSON.stringify(movies.rows));
    res.end();
  }

  async getOneMovie(req, res) {
    const url = req.url; 
    const id = +url.slice(url.indexOf(':') + 1);
    const movie = await db.query('SELECT * FROM movie where id = $1', [id]);
    

    if (movie.rows.length) {
      res.writeHead(statusCode.OK, JSON_HEADER);
      res.write(JSON.stringify(movie.rows[0]));
      res.end();
    } else {
      res.writeHead(statusCode.NOT_FOUND, JSON_HEADER);
      res.write(JSON.stringify('Movie not found'));
      res.end();
    }

  }

  async getMovieGenres(req, res) {
    const url = req.url; 
    const id = +url.slice(url.indexOf(':') + 1);
    const movieGenres = await db.query('SELECT name FROM genre where movie_id = $1', [id]);

    if (movieGenres.rows.length) {
      res.writeHead(statusCode.OK, JSON_HEADER);
      res.write(JSON.stringify(movie.rows[0]));
      res.end();
    } else {
      res.writeHead(statusCode.NOT_FOUND, JSON_HEADER);
      res.write(JSON.stringify('Movie genres not found'));
      res.end();
    }

  }

  async updateMovie(req, res) {
    const url = req.url;
    const id = +url.slice(url.indexOf(':') + 1);
    let data = '';

    req.on('data', chunk => {
      data += chunk;
    });
    req.on('end', async () => {
      
      try {
        const { title, year_publication } = JSON.parse(data);
        const updateMovie = await db.query('UPDATE movie set title = $1, year_publication = $2 where id = $3 RETURNING *', [title, year_publication, id]);

        if (updateMovie.rows.length) {
          res.writeHead(statusCode.CREATED, JSON_HEADER);
          res.write(JSON.stringify(updateMovie.rows[0]));
          res.end();
        } else {
          res.writeHead(statusCode.NOT_FOUND, JSON_HEADER);
          res.write(JSON.stringify('Movie not found'));
          res.end();
        }


      } catch (error) {
        res.writeHead(statusCode.BAD_REQUEST, JSON_HEADER);
        res.write(JSON.stringify('NOT CORRECT REQUEST!'));
        res.end();
      }
      
    });
  }

  async deleteMovie(req, res) { 
    const url = req.url;
    const id = +url.slice(url.indexOf(':') + 1);

    if ((await db.query('SELECT * FROM movie where id = $1', [id])).rows.length) {
      await db.query('DELETE FROM movie where id = $1', [id]);
      res.writeHead(statusCode.NO_CONTENT, JSON_HEADER);
      res.end();
    } else {
      res.writeHead(statusCode.NOT_FOUND, JSON_HEADER);
      res.write(JSON.stringify('Movie not found'));
      res.end();
    }

  }
}

export default new MovieController();
