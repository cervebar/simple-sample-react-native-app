import { ItemT } from '../types/ItemT';

export interface FetchStrategy {
    fetchMovies(searchQuery: string): Promise<ItemT[]>;
}

export class FetchStrategyContext {
    private strategy: FetchStrategy;
    constructor(strategy: FetchStrategy) {
        this.strategy = strategy;
    }
    public setStrategy(strategy: FetchStrategy) {
        this.strategy = strategy;
    }

    public fetchMovies(searchQuery: string): Promise<ItemT[]> {
        const result = this.strategy.fetchMovies(searchQuery);
        return result;
    }
}
