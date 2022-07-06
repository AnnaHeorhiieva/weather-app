export interface Coordinates {
  lat: number;
  lon: number;
}

const CURRENT_BASE_URL = "https://api.openweathermap.org/data/2.5/weather";
const HOURLY_BASE_URL = "https://api.openweathermap.org/data/2.5/onecall";
const API_KEY = "8824656fec0760f24c1d335fd54a5242";

export function configureCurrentApiUrl(query: string) {
  const url = `${CURRENT_BASE_URL}?q=${query}&units=metric&appid=${API_KEY}`;
  return url;
}

export function configureHourlyApiUrl(coord: Coordinates) {
  const { lat, lon } = coord;
  const url = `${HOURLY_BASE_URL}?lat=${lat}&lon=${lon}&exclude=current,minutely,daily,alerts&units=metric&appid=${API_KEY}`;
  return url;
}
