const roundValue = (value: any) => Math.round(value);
const transformMetersIntoKilometers = (value: any) => value / 1000;
const setTheUnitsOfMeasure = (units: string) => (value: any) =>
  `${value} ${units}`;

export const transformStrategyObj = {
  main: {
    temp: [roundValue, setTheUnitsOfMeasure("°C")],
    feels_like: [roundValue, setTheUnitsOfMeasure("°C")],
    temp_min: [roundValue, setTheUnitsOfMeasure("°C")],
    temp_max: [roundValue, setTheUnitsOfMeasure("°C")],
    pressure: [setTheUnitsOfMeasure("hPa")],
    humidity: [setTheUnitsOfMeasure("%")],
    sea_level: [setTheUnitsOfMeasure("hPa")],
    grnd_level: [setTheUnitsOfMeasure("hPa")],
  },
  visibility: [transformMetersIntoKilometers, setTheUnitsOfMeasure("km")],
  wind: {
    speed: [setTheUnitsOfMeasure("m/sec")],
    deg: [setTheUnitsOfMeasure("deg")],
    gust: [setTheUnitsOfMeasure("m/sec")],
  },
  clouds: {
    all: [setTheUnitsOfMeasure("%")],
  },
  rain: {
    "1h": setTheUnitsOfMeasure("mm"),
    "3h": setTheUnitsOfMeasure("mm"),
  },
  snow: {
    "1h": setTheUnitsOfMeasure("mm"),
    "3h": setTheUnitsOfMeasure("mm"),
  },
};
