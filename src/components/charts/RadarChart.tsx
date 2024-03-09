'use client';
import React from 'react';
import ReactECharts from 'echarts-for-react';

export const RadarChart = () => {
  const option = {
    color: ['#FFE434', '#67F9D8', '#56A3F1', '#FF917C'],
    radar: [
      {
        indicator: [
          { text: 'Didáctico' },
          { text: 'Entretenido' },
          { text: 'Buen ambiente' },
          { text: 'Equilibrio vida - trabajo' },
          { text: 'Sueldo €' },
        ],
        startAngle: 90,
        splitNumber: 4,
        shape: 'circle',
        axisName: {
          formatter: '【{value}】',
          color: '#428BD4',
        },
        splitArea: {
          areaStyle: {
            color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowBlur: 10,
          },
        },
        axisLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0.8)',
          },
        },
        splitLine: {
          lineStyle: {
            color: 'rgba(211, 253, 250, 0.8)',
          },
        },
      },
    ],
    series: [
      {
        type: 'radar',
        emphasis: {
          lineStyle: {
            width: 4,
          },
        },
        data: [
          {
            value: [6, 7, 8, 9, 10],
            name: 'Data B',
            areaStyle: {
              color: 'rgba(255, 228, 52, 0.6)',
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="h-full w-full">
      <ReactECharts option={option} />
    </div>
  );
};