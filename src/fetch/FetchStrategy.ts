import { MovieFetchDataT } from '../types/MovieFetchDataT';

export interface FetchStrategy {
    fetchMovies(searchQuery: string, page: number): Promise<MovieFetchDataT>;
}

export class FetchStrategyContext {
    private strategy: FetchStrategy;
    constructor(strategy: FetchStrategy) {
        this.strategy = strategy;
    }
    public setStrategy(strategy: FetchStrategy) {
        this.strategy = strategy;
    }

    public fetchMovies(searchQuery: string, page: number): Promise<MovieFetchDataT> {
        const result = this.strategy.fetchMovies(searchQuery, page);
        return result;
    }
}
