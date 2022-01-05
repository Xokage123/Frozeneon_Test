export const getDate = (dateString: string): string =>
  new Date(dateString).toLocaleString();
