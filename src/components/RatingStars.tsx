import React from 'react';
import AntIcon from 'react-native-vector-icons/AntDesign';
import { Colors } from 'react-native-paper';
import styled from 'styled-components/native';

const RatingWrapper = styled.View`
    display: flex;
    flex-direction: row;
    padding-left: 5px;
    padding-right: 5px;
`;

export enum StarSize {
    SMALL,
    NORMAL,
}

const mapStarSize = (starSize: StarSize) => {
    switch (starSize) {
        case StarSize.SMALL:
            return 10;
        default:
            return 15;
    }
};

export type RatingStatsProps = {
    rating: number;
    starSize?: StarSize;
};

export const RatingStars = ({ rating, starSize = StarSize.NORMAL }: RatingStatsProps) => {
    return (
        <RatingWrapper>
            {[...Array(rating)].map((value, index) => (
                <AntIcon key={index} name="star" color={Colors.amberA700} size={mapStarSize(starSize)} />
            ))}
        </RatingWrapper>
    );
};
