const IMG_API_URL = "http://openweathermap.org/img/wn/";

export function getImgUrl(icon: string) {
  return `${IMG_API_URL}${icon}@2x.png`;
}

export function getCityTime(currentTimestamp: number, timezone: number) {
  const UTCTime = new Date(currentTimestamp).toUTCString();
  const cityTimestamp = Date.parse(UTCTime) + timezone * 1000;
  const cityDateString = new Date(cityTimestamp).toUTCString();
  const cityTime = cityDateString.slice(-12, -7);
  return cityTime;
}

export function capitalizeDescription(description: string) {
  const firstChar = description.charAt(0).toUpperCase();
  const otherChars = description.slice(1, description.length + 1);
  const capitalisedDescription = firstChar + otherChars;
  return capitalisedDescription;
}
