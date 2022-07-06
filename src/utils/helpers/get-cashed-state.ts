export function getCachedState(stateName: string) {
  let cachedStateValue;
  const stateJSON = localStorage.getItem(stateName);
  const isStringToBeParsed = typeof stateJSON === "string";
  if (isStringToBeParsed) cachedStateValue = JSON.parse(stateJSON);
  return cachedStateValue;
}
