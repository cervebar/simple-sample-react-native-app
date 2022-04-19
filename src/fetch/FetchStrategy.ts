import { ItemT } from '../types/ItemT';

export interface FetchStrategy {
    fetchMovies(searchQuery: string, page: number): Promise<ItemT[]>;
}

export class FetchStrategyContext {
    private strategy: FetchStrategy;
    constructor(strategy: FetchStrategy) {
        this.strategy = strategy;
    }
    public setStrategy(strategy: FetchStrategy) {
        this.strategy = strategy;
    }

    public fetchMovies(searchQuery: string, page: number): Promise<ItemT[]> {
        const result = this.strategy.fetchMovies(searchQuery, page);
        return result;
    }
}
