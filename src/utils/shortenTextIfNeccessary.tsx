/**
 * NOTE: very simple implementation: this could be smarter and divide by syllables
 */
export const shortenTextIfNeccessary = (text: string, maxLenght: number) => {
    if (text.length > maxLenght) {
        return text.substring(0, maxLenght - 3) + '...';
    }
    return text;
};
