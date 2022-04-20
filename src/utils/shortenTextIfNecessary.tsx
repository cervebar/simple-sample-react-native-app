/**
 * NOTE: very simple implementation: this could be smarter, divide by syllables etc.
 */
export const shortenTextIfNecessary = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
        return text.substring(0, maxLength - 3) + '...';
    }
    return text;
};
