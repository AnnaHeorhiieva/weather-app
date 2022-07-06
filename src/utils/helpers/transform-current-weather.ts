import { CityWeatherEntity } from "store/current-weather-slice/current-weather-slice.types";

const compose =
  (...funcs: Function[]) =>
  (...args: any[]) =>
    funcs.reduce((arg: any, fn) => fn(arg), args);

function transformData(
  metricsObject: CityWeatherEntity,
  transformStrategy: any
) {
  const metrics = Object.entries(metricsObject);
  metrics.forEach(([key, value]) => {
    const hasUnit = Boolean(key in transformStrategy);
    const isValueObject = typeof value === "object" && value !== null;
    if (!hasUnit) return metricsObject[key];
    if (isValueObject) return transformData(value, transformStrategy[key]);
    if (Symbol.iterator in transformStrategy[key]) {
      const transform = compose(...transformStrategy[key]);
      metricsObject[key] = transform(value);
    }
    return null;
  });
}

export function transformWeather(
  metricsObject: CityWeatherEntity,
  transformStrategy: any
) {
  const metricsObjectModified = JSON.parse(JSON.stringify(metricsObject));
  transformData(metricsObjectModified, transformStrategy);
  return metricsObjectModified;
}
