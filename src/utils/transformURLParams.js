export const objectToParams = (params) =>
   `?${new URLSearchParams(params).toString()}`
