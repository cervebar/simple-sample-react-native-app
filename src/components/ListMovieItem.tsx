import React from 'react';
import { TouchableOpacity } from 'react-native';
import { ItemT } from '../types/ItemT';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps, RouteDetail } from '../screens/navigationParams';
import styled from 'styled-components/native';
import { MyText } from './MyText';
import { TextType } from '../utils/textUtils';
import { shortenTextIfNecessary } from '../utils/shortenTextIfNecessary';
import { RatingStars, StarSize } from './RatingStars';

const ContainerWrapper = styled.View`
    display: flex;
    flex-direction: row;
    border: 1px solid gainsboro;
    border-radius: 5px;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    width: 95%;
    margin: 5px;
`;

const MovieImage = styled.Image`
    flex: 1;
    width: 80px;
    max-height: 80px;
    resize-mode: cover;
`;

const Left = styled.View`
    justify-content: flex-start;
`;
const Right = styled.View`
    flex: 1;
    padding: 14px;
`;
const FixedBottomRight = styled.View`
    position: absolute;
    top: 5px;
    right: 5px;
    z-index: 1;
`;

export type ListMovieItemProps = {
    data: ItemT;
};

export const ListMovieItem = ({ data }: ListMovieItemProps) => {
    const nav = useNavigation<NavigationProps>();
    const { id, title, description, rating, moviePosterUrl } = data;

    return (
        <TouchableOpacity
            onPress={() =>
                nav.navigate(RouteDetail, {
                    data: data,
                })
            }
            key={id}
        >
            <ContainerWrapper>
                <Left>
                    <MovieImage
                        source={{
                            uri: moviePosterUrl,
                        }}
                        borderRadius={6}
                    />
                </Left>
                <Right>
                    <MyText textType={TextType.TITLE}>{shortenTextIfNecessary(title, 20)}</MyText>
                    <MyText textType={TextType.SMALL}>{shortenTextIfNecessary(description, 20)}</MyText>
                </Right>
                <FixedBottomRight>
                    <RatingStars rating={rating} starSize={StarSize.SMALL} />
                </FixedBottomRight>
            </ContainerWrapper>
        </TouchableOpacity>
    );
};
