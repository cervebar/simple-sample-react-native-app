import React from 'react';
import { useRoute } from '@react-navigation/native';
import { ItemT } from '../types/ItemT';
import { RootRouteProps } from './navigationParams';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorite } from '../redux/slices/favorites';
import { useIsFavorite } from '../hooks/selectors/useIsFavorite';
import styled from 'styled-components/native';
import { Button, Colors } from 'react-native-paper';
import { MyText } from '../components/MyText';
import { TextType } from '../utils/textUtils';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { RatingStars } from '../components/RatingStars';

const MovieWrapper = styled.View`
    display: flex;
    align-items: center;
    width: 100%;
    padding-top: 20px;
    padding-bottom: 10px;
`;
const ContentWrapper = styled.View`
    display: flex;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
`;

const RatingWrapper = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    padding: 15px 20px 15px 20px;
`;

const MovieImage = styled.Image`
    width: 90%;
    height: 150px;
    resize-mode: cover;
`;
const RightBar = styled.View`
    align-items: flex-end;
    right: 4px;
    width: 100%;
    padding-top: 5px;
`;

const DetailContainer = styled.View`
    align-items: center;
    width: 100%;
`;
const FavoriteIcon = styled.View`
    position: absolute;
    top: 5px;
    z-index: 1;
    right: 15px;
`;

export type DetailScreenProps = {
    data: ItemT;
};

export const DetailScreen = () => {
    const route = useRoute<RootRouteProps<'RouteDetail'>>();
    const dispatch = useDispatch();
    const { data } = route.params;
    const { id, title, description, rating, moviePosterUrl } = data;
    const isFavorite = useIsFavorite(id);

    const add = () => {
        dispatch(addToFavorites(data));
    };
    const remove = () => {
        dispatch(removeFromFavorite(id));
    };

    return (
        <DetailContainer>
            <RightBar>
                {!isFavorite && (
                    <Button color={Colors.cyan800} compact icon="star-plus" mode="contained" onPress={add}>
                        add
                    </Button>
                )}
                {isFavorite && (
                    <Button compact icon="star-off-outline" mode="contained" onPress={remove}>
                        remove
                    </Button>
                )}
            </RightBar>
            <MovieWrapper>
                <MovieImage
                    source={{
                        uri: moviePosterUrl,
                    }}
                    borderRadius={20}
                />
                {isFavorite && (
                    <FavoriteIcon>
                        <AntIcon name="star" color={Colors.amberA700} size={30} />
                    </FavoriteIcon>
                )}
            </MovieWrapper>
            <MyText textType={TextType.BIG_TITLE}>{title}</MyText>
            <RatingWrapper>
                <MyText>rating:</MyText>
                <RatingStars rating={rating} />
            </RatingWrapper>
            <ContentWrapper>
                <MyText textType={TextType.TITLE}>description:</MyText>
                <MyText textType={TextType.DEFAULT}>{description}</MyText>
            </ContentWrapper>
        </DetailContainer>
    );
};
