import { ItemT } from '../types/ItemT';
import { FetchStrategy } from './FetchStrategy';
import { MovieFetchDataT } from '../types/MovieFetchDataT';
import { generateDescription, randomRating } from './mock/mockUtils';

export class ReactDevApi implements FetchStrategy {
    async fetchMovies(searchQuery: string, page: number): Promise<MovieFetchDataT> {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
        const result = [] as ItemT[];
        for (const movie of json.movies) {
            result.push({
                id: movie.id,
                title: movie.title,
                description: generateDescription(),
                rating: randomRating(),
                moviePosterUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR185doH7-F0Lt6vvH35KAvay6ml8HXMBvNRQ&usqp=CAU',
            });
        }
        return new Promise((resolve) => {
            resolve({
                resultsCount: result.length,
                data: result,
                resultsPerPage: result.length,
            });
        });
    }
}
