import React, { useContext, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { FetchContext } from '../fetch/FetchProvider';
import { ItemT } from '../types/ItemT';
import { ListMovieItem } from './ListMovieItem';
import { NextPrevButtons } from './NextPrevButtons';
import { SearchBar } from './SearchBar';
import styled from 'styled-components/native';
import { ConnectionContext } from '../connection/ConnectionProvider';
import { OfflineInfo } from './OfflineInfo';
import { ErrorInfoDialog } from './ErrorInfoDialog';

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
  const [data, setData] = useState<ItemT[]>([]);
  const [resultsCount, setResultsCount] = useState<number>(0);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [page, setPage] = useState<number>(0);
  const { strategy } = useContext(FetchContext);
  const { connection } = useContext(ConnectionContext);
  const isOffline = !connection.isOnline;
  const [visible, setVisible] = React.useState<boolean>(false);
  const [visibleErrorInfo, setVisibleErrorInfo] = React.useState<boolean>(false);
  const hideDialog = () => setVisible(false);
  const hideDialogError = () => setVisibleErrorInfo(false);

  const fetchData = (pageToFetch: number) => {
    setVisible(isOffline);
    setLoading(true);
    strategy
      .fetchMovies(searchQuery, pageToFetch)
      .then(res => {
        setData(res.data);
        setResultsCount(res.resultsCount);
        setLoading(false);
      })
      .catch(err => {
        console.log('kvak error',err);
        // NOTE: just simple, here could be better handling, lke what happend, sent to Crashyltics etc.
        setVisibleErrorInfo(true);
        setLoading(false);
      });
  };

  const triggerSearch = (searchQueryInput: string) => {
    if (searchQueryInput.length < 3) {
      return; // start fetching after first 3 characters
    }
    setPage(0); //reset to start
    setSearchQuery(searchQueryInput);
    fetchData(0);
  };

  const nextPage = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchData(nextPage);
  };
  const prevPage = () => {
    const prevPage = Math.max(0, page - 1);
    setPage(prevPage);
    fetchData(prevPage);
  };

  return (
    <SearchPageContainer>
      <SearchBar triggerSearch={triggerSearch} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <NextPrevButtons page={page} nextPage={nextPage} prevPage={prevPage} resultCount={resultsCount} />
          <FlatList
            data={data}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <ListMovieItem data={item} />}
          />
        </>
      )}
      <OfflineInfo visible={visible} hideDialog={hideDialog} />
      <ErrorInfoDialog visible={visibleErrorInfo} hideDialog={hideDialogError} />
    </SearchPageContainer>
  );
};
