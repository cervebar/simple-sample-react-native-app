import React from 'react';
import styled from 'styled-components/native';
import { textUtils, fontWeight, TextType } from '../utils/textUtils';

export type MyTextProps = {
    textType?: TextType;
    children: React.ReactNode;
};

type StyleTextProps = {
    textType?: TextType;
};

const TextStyled = styled.Text<StyleTextProps>`
    justify-content: flex-start;
    font-size: ${({ textType = TextType.DEFAULT }) => textUtils(textType)};
    font-weight: ${({ textType = TextType.DEFAULT }) => fontWeight(textType)};
`;

export const MyText = ({ children, textType = TextType.DEFAULT }: MyTextProps) => {
    return <TextStyled textType={textType}>{children}</TextStyled>;
};
