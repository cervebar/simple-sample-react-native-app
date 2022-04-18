import { Item } from '../types/Item';

export interface FetchStrategy {
    fetchMovies(searchQuery: string): Promise<Item[]>;
}

export class FetchStrategyContext {
    private strategy: FetchStrategy;
    constructor(strategy: FetchStrategy) {
        this.strategy = strategy;
    }
    public setStrategy(strategy: FetchStrategy) {
        this.strategy = strategy;
    }

    public fetchMovies(searchQuery: string): Promise<Item[]> {
        const result = this.strategy.fetchMovies(searchQuery);
        return result;
    }
}
