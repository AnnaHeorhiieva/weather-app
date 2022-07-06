export interface HourlyWeatherEntity {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_deg: number;
  wind_gust: number;
  pop: number;
  rain?: { "1h": number };
  snow?: { "1h": number };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
}

export type HourlyWeatherEntities = HourlyWeatherEntity[];

export interface HourlyCityWeather {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  hourly: HourlyWeatherEntities;
}

export interface HourlyWeatherState {
  hourlyCityWeather: HourlyCityWeather;
}
