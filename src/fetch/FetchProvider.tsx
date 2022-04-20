import { createContext, useContext } from 'react';
import React from 'react';
import { FetchStrategy, FetchStrategyContext } from './FetchStrategy';
import { MockFetchStrategy } from './mock/MockFetchStrategy';
import { ReactDevApi } from './ReactDevApi';
import { ImdbAPI } from './ImdbAPI';

export const FETCH_MOCK = 'mock';
export const FETCH_REACT_DEV_API = 'devAPI';
export const FETCH_IMDB = 'imdb';

const strategyContext = new FetchStrategyContext(new MockFetchStrategy());
export const FetchContext = createContext<{ strategy: FetchStrategy }>({ strategy: strategyContext });

export type FetchProviderProps = {
    type: string;
    children: React.ReactNode;
};

export const FetchProvider = ({ children, type }: FetchProviderProps) => {
    const { strategy } = useContext(FetchContext);
    switch (type) {
        case FETCH_MOCK: {
            strategyContext.setStrategy(new MockFetchStrategy());
            break;
        }
        case FETCH_REACT_DEV_API: {
            strategyContext.setStrategy(new ReactDevApi());
            break;
        }
        case FETCH_IMDB: {
            //TODO add API key to secrets
            strategyContext.setStrategy(new ImdbAPI('k_xtv6bx1b'));
        }
    }
    return <FetchContext.Provider value={{ strategy }}>{children}</FetchContext.Provider>;
};
