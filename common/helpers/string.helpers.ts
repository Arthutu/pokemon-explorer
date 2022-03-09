export const firstLetterToUpper = (word: string | undefined): string => {
  return `${word?.split("")[0].toUpperCase()}${word?.slice(1)}`;
};
