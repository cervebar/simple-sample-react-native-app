import React from 'react';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import { MyText } from './MyText';

const NextPrevWrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding-left: 5px;
  padding-right: 5px;
  justify-content: space-between;
  width: 100%;
`;

type NextPrevButtonsProps = {
  nextPage: () => void;
  prevPage: () => void;
  page: number;
  resultCount: number;
  resultsPerPage: number;
};
export const NextPrevButtons = ({ page, nextPage, prevPage, resultCount, resultsPerPage }: NextPrevButtonsProps) => {
  if (resultCount < resultsPerPage) {
    return null; // do not show
  }
  const maxPages = Math.ceil(resultCount / resultsPerPage);

  const currentPage = page + 1;// for API it starts at 0
  const isVisiblePrev = currentPage > 1;
  const isVisibleNext = currentPage * resultsPerPage < resultCount && maxPages !== currentPage;
  return (
    <>
      <NextPrevWrapper>
        < Button icon="chevron-left" mode="contained" onPress={prevPage}
                 disabled={!isVisiblePrev}
        >
          prev
        </Button>
        <Button icon="chevron-right" mode="contained" onPress={nextPage}
                disabled={!isVisibleNext}>
          next
        </Button>
      </NextPrevWrapper>
      <MyText>page {currentPage} from {maxPages}</MyText>
    </>
  );
};
