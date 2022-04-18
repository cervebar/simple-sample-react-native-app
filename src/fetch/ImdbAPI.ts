import { ItemT } from '../types/ItemT';
import { FetchStrategy } from './FetchStrategy';
import { MovieFetchDataT } from '../types/MovieFetchDataT';

/**
 * Simples IMDB data provider: https://imdb-api.com/
 */
export class ImdbAPI implements FetchStrategy {
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async fetchMovies(searchQuery: string, page: number): Promise<MovieFetchDataT> {
        const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/${this.apiKey}/${searchQuery}`);
        const json = await response.json();
        const result = [] as ItemT[];
        for (const movie of json.results) {
            result.push({
                id: movie.id,
                title: movie.title,
                description: movie.description,
                rating: 1,
                moviePosterUrl: movie.image,
            });
        }
        return new Promise(resolve => {
            resolve({
                resultsCount: result.length,// this would be from paginated API, but here it is only 10 results anytime
                data: result,
            });
        });
    }
}
