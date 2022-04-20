import { ItemT } from '../types/ItemT';
import { FetchStrategy } from './FetchStrategy';
import { MovieFetchDataT } from '../types/MovieFetchDataT';
import { randomRating } from './mock/mockUtils';
import { SimpleSampleErrorT } from '../types/SimpleSampleErrorT';

/**
 * Simples IMDB data provider: https://imdb-api.com/
 */
export class ImdbAPI implements FetchStrategy {
  private apiKey: string;

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async fetchMovies(searchQuery: string, page: number): Promise<MovieFetchDataT> {
    const result = [] as ItemT[];
    let error: SimpleSampleErrorT;
    try {
      const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/${this.apiKey}/${searchQuery}`);
      const json = await response.json();
      for (const movie of json.results) {
        result.push({
          id: movie.id,
          title: movie.title,
          description: movie.description,
          rating: randomRating(),// FIXME, this would be replaced with a) choosing better API, b) next data fetch
          moviePosterUrl: movie.image,
        });
      }
    } catch (err) {
      // NOTE here handle this API specific errors and map it to internal error code states
      error = {code:500, message:'some error'};
    }
    return new Promise((resolve, reject) => {
      if (error){
        reject(error);
      }
      resolve({
        resultsCount: result.length,// this should be from paginated API, but in this API it is only 10 results anytime
        data: result,
        resultsPerPage: result.length,
      });
    });
  }
}
