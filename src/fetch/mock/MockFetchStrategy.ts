import { ItemT } from '../../types/ItemT';
import { RESULTS_PER_PAGE } from '../../utils/COnstants';
import { FetchStrategy } from '../FetchStrategy';
import { generateRandomData } from './mockUtils';
import { MovieFetchDataT } from '../../types/MovieFetchDataT';

export class MockFetchStrategy implements FetchStrategy {
    private currentQuery = '';
    private currentResult = [] as ItemT[];

    async fetchMovies(searchQuery: string, page: number): Promise<MovieFetchDataT> {
        if (this.currentQuery !== searchQuery) {
            this.currentQuery = searchQuery;
            this.currentResult = generateRandomData(16);
        }
        const startIndex = page * RESULTS_PER_PAGE;

        return new Promise(resolve => {
            resolve({
                resultsCount: this.currentResult.length,
                data: this.currentResult.slice(startIndex, startIndex + RESULTS_PER_PAGE),
            });
        });
    }
}
