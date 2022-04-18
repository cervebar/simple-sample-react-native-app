import React from 'react';
import styled from 'styled-components/native';

const SearchBarContainer = styled.View`
    flex-direction: row;
    padding: 10px 10px 10px 10px;
`;

const SearchBarTextInput = styled.TextInput`
    padding-left: 5px;
    padding-right: 5px;
    height: 40px;
    background-color: white;
    border-radius: 5px;
    width: 100%;
`;

type SearchBarProps = {
    triggerSearch: (text: string) => void;
};

export const SearchBar = ({ triggerSearch }: SearchBarProps) => {
    return (
        <SearchBarContainer>
            <SearchBarTextInput
                placeholder="start searching your movie fdds"
                onChangeText={text => {
                    triggerSearch(text);
                }}
            />
        </SearchBarContainer>
    );
};
