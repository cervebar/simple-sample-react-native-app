import React, { useContext, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { FetchContext } from '../fetch/FetchProvider';
import { ListMovieItem } from './ListMovieItem';
import { NextPrevButtons } from './NextPrevButtons';
import { SearchBar } from './SearchBar';
import styled from 'styled-components/native';
import { ErrorInfoDialog } from './ErrorInfoDialog';
import { MovieFetchDataT } from '../types/MovieFetchDataT';
import { SimpleSampleErrorT } from '../types/SimpleSampleErrorT';
import { useNetInfo } from '@react-native-community/netinfo';

const SearchPageContainer = styled.View`
  padding-left: 5px;
  padding-right: 5px;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
`;

export const SearchResultMovies = () => {
  const [isLoading, setLoading] = useState(false);
  const [fetchResult, setFetchResult] = useState<MovieFetchDataT | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const { strategy } = useContext(FetchContext);
  const netInfo = useNetInfo();
  const isOffline = !(netInfo.isConnected && netInfo.isInternetReachable);
  const [visibleErrorInfo, setVisibleErrorInfo] = React.useState<boolean>(false);
  const [errorData, setErrorData] = React.useState<SimpleSampleErrorT>(null);

  const hideDialogError = () => setVisibleErrorInfo(false);

  const fetchData = (pageToFetch: number, searchQueryInput:string) => {
    setLoading(true);
    strategy
      .fetchMovies(searchQueryInput, pageToFetch)
      .then(res => {
        setFetchResult(res);
        setLoading(false);
      })
      .catch(err => {
        // NOTE: just simple, here could be better handling, like map to codes, sent to Crashyltics etc.,
        // for simplicity keep console and user just info something wrong
        console.log('error', err);
        setVisibleErrorInfo(true);
        setErrorData(err);
        setLoading(false);
      });
  };

  const triggerSearch = (searchQueryInput: string) => {
    if (searchQueryInput.length < 2) {
      return; // start fetching after first 3 characters
    }
    setPage(0); //reset to start
    setSearchQuery(searchQueryInput);
    fetchData(0, searchQueryInput);
  };

  const nextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage, searchQuery);// use same query but next page
  };
  const prevPage = () => {
    const prevPage = Math.max(0, page - 1);
    setPage(prevPage);
    fetchData(prevPage, searchQuery);
  };

  return (
    <>
      <SearchBar triggerSearch={triggerSearch} />
      <SearchPageContainer>
        {isLoading && <ActivityIndicator />}
        {!isLoading && fetchResult && (<>
          <NextPrevButtons page={page} nextPage={nextPage} prevPage={prevPage}
                           resultsPerPage={fetchResult!.resultsPerPage} resultCount={fetchResult!.resultsCount} />
          <FlatList
            data={fetchResult!.data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <ListMovieItem data={item} />}
          />
        </>)
        }
        <ErrorInfoDialog isOffline={isOffline} visible={visibleErrorInfo} hideDialog={hideDialogError}  errorData={errorData}/>
      </SearchPageContainer>
    </>
  );
};
