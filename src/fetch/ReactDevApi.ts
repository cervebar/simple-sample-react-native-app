import { Item } from '../types/Item';
import { FetchStrategy } from './FetchStrategy';

export class ReactDevApi implements FetchStrategy {
    async fetchMovies(searchQuery: string): Promise<Item[]> {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
        console.log('kvak', json);
        const result = [] as Item[];
        for (const movie of json.movies) {
            result.push({
                id: movie.id,
                title: movie.title,
                description: '',
                rating: 1,
                moviePosterUrl:
                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR185doH7-F0Lt6vvH35KAvay6ml8HXMBvNRQ&usqp=CAU',
            });
        }
        return new Promise((resolve, reject) => {
            resolve(result);
        });
    }
}
