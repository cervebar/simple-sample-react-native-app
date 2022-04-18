/**
 * NOTE: just very simple logic, here should be more about normalizations,ratio, fonts, theming etc.
 */
export enum TextType {
    DEFAULT,
    TITLE,
    BIG_TITLE,
    SMALL,
}

const FONT_SIZES = {
    BIGGEST: '40px',
    BIG: '20px',
    SMALL: '10px',
};

export const textUtils = (textType: TextType) => {
    switch (textType) {
        case TextType.BIG_TITLE:
            return FONT_SIZES.BIGGEST;
        case TextType.TITLE:
            return FONT_SIZES.BIG;
        case TextType.SMALL:
            return FONT_SIZES.SMALL;
        default:
            return '14px';
    }
};

export const fontWeight = (textType: TextType) => {
    switch (textType) {
        case TextType.TITLE:
            return 'bold';
        default:
            return 'normal';
    }
};
