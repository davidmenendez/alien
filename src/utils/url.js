export const getUrlParameterValue = param => {
  const url = new URLSearchParams(window.location.search);
  const value = url.get(param);
  return value;
};
