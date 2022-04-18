import { Item } from '../types/Item';
import { FetchStrategy } from './FetchStrategy';

export class ImdbAPI implements FetchStrategy {
    private apiKey: string;

    constructor(apiKey: string) {
        this.apiKey = apiKey;
    }

    async fetchMovies(searchQuery: string): Promise<Item[]> {
        const response = await fetch(`https://imdb-api.com/en/API/SearchMovie/${this.apiKey}/${searchQuery}`);
        const json = await response.json();
        console.log('kvak', json);
        const result = [] as Item[];
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
            resolve(result);
        });
    }
}
