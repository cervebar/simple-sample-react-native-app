import React from 'react';
import { Button } from 'react-native-paper';
import styled from 'styled-components/native';

const NextPrevWrapper = styled.View`
    display: flex;
    flex-direction: row;
    padding-left: 5px;
    padding-right: 5px;
`;

type NextPrevButtonsProps = {
    nextPage: () => void;
    prevPage: () => void;
    resultCount: number;
};

const RESULTS_PER_PAGE = 5;

export const NextPrevButtons = ({ nextPage, prevPage, resultCount }: NextPrevButtonsProps) => {
    if (resultCount < RESULTS_PER_PAGE) {
        return null; // do not show
    }
    return (
        <NextPrevWrapper>
            <Button icon="chevron-left" mode="contained" onPress={prevPage}>
                prev
            </Button>
            <Button icon="chevron-right" mode="contained" onPress={nextPage}>
                next
            </Button>
        </NextPrevWrapper>
    );
};
