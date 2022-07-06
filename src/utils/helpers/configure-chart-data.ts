import { HourlyWeatherEntities } from "store/hourly-weather-slice/hourly-weather-slice.types";

export function configureChartData(dataX: number[], dataY: number[]) {
  return {
    labels: dataX,
    datasets: [
      {
        label: "Temperature at certain hour, °C",
        data: dataY,
        backgroundColor: "#0e193b",
        stack: "Stack 0",
      },
    ],
  };
}

function handleReduce(dataArr: number[], num: number, i: number) {
  const isNotFirstElement = Boolean(i !== 0);
  const previousElement = dataArr[i - 1];
  if (isNotFirstElement) {
    if (previousElement === 24) dataArr.push(num);
    else dataArr.push(previousElement + 1);
  }
  return dataArr;
}

export function createDataX(arrStartNumber: number) {
  const arrayOfOnes = new Array(24).fill(1);
  const dataX = arrayOfOnes.reduce(
    (dataArr, num, i) => handleReduce(dataArr, num, i),
    [arrStartNumber]
  );
  return dataX;
}

export function createDataY(tempArray: HourlyWeatherEntities) {
  const dataY = tempArray?.map((tempObj) => tempObj.temp);
  return dataY;
}
