'use client';
import React from 'react';
import ReactECharts from 'echarts-for-react';
import SpainMap from '@/assets/maps/ESP_COMUNIDADES.json';

import * as echarts from 'echarts';
import { codigoPorComunidad, workingTypesValue } from '@/constants/constants';

export const MapChart = () => {
  const spainData = SpainMap.features.map((community) => {
    const code = community.properties.name;
    const workingTypeNumber = codigoPorComunidad[code].value;
    return {
      name: code,
      value: workingTypeNumber,
      itemStyle: {
        color: workingTypesValue[workingTypeNumber].color,
      },
    };
  });
  const option = {
    tooltip: {
      trigger: 'item',
      showDelay: 0,
      transitionDuration: 0.2,
      formatter: function (params: any) {
        const result =
          '<div>' +
          codigoPorComunidad[params.name].name +
          ': ' +
          '<b>' +
          workingTypesValue[codigoPorComunidad[params.name].value].label +
          '</b>' +
          '</div>';
        return result;
      },
    },
    visualMap: {
      show: false,
    },
    series: [
      {
        name: 'Spain',
        type: 'map',
        roam: false,
        map: 'Spain',
        label: {
          show: false,
        },
        select: {
          label: {
            show: false,
          },
          itemStyle: {
            areaColor: '#4193c4', //FIXME: Accent color
            borderWidth: 2,
          },
        },
        emphasis: {
          label: {
            show: false,
          },
          itemStyle: {
            areaColor: '#4193c4', //FIXME: Accent color
            borderWidth: 2,
          },
        },
        data: spainData,
      },
    ],
  };
  echarts.registerMap('Spain', SpainMap as any);

  return (
    <div className="h-full w-full">
      <ReactECharts option={option} />
    </div>
  );
};

export default MapChart;
