import React from 'react';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';
import { RESULTS_PER_PAGE } from '../utils/COnstants';
import { MyText } from './MyText';

const NextPrevWrapper = styled.View`
  display: flex;
  flex-direction: row;
  padding-left: 5px;
  padding-right: 5px;
`;

type NextPrevButtonsProps = {
  nextPage: () => void;
  prevPage: () => void;
  currentPage: number;
  resultCount: number;
};
export const NextPrevButtons = ({ currentPage, nextPage, prevPage, resultCount }: NextPrevButtonsProps) => {
  if (resultCount < RESULTS_PER_PAGE) {
    return null; // do not show
  }
  const maxPages = Math.floor(resultCount / RESULTS_PER_PAGE);
  const isVisiblePrev = currentPage > 0;
  const isVisibleNext = currentPage * RESULTS_PER_PAGE <= resultCount;
  return (
    <>
      <NextPrevWrapper>
        {isVisiblePrev && < Button icon="chevron-left" mode="contained" onPress={prevPage}>
          prev
        </Button>
        }
        {isVisibleNext && <Button icon="chevron-right" mode="contained" onPress={nextPage}>
          next
        </Button>
        }
      </NextPrevWrapper>
      <MyText>page {currentPage + 1} from {maxPages + 1}</MyText>
    </>
  );
};
