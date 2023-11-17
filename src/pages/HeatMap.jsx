import * as React from "react";
import { HeatMapComponent, Inject, Legend, Adaptor, Tooltip } from '@syncfusion/ej2-react-heatmap';import { registerLicense } from '@syncfusion/ej2-base';
import data from '../../img/data.json'

registerLicense('Ngo9BigBOggjHTQxAR8/V1NHaF5cXmVCf1FpRGVGfV5yd0VHalxZTnZXUj0eQnxTdEZiWH5YcXdVTmFdUkF+Vg==');

export function HeatMap() {
  
  // Função para personalizar o conteúdo da dica de ferramenta
  function tooltipTemplate(args) {
    args.content = [args.yLabel + ' | ' + args.xLabel + ' : ' + args.value + ' %'];
  }
  
  // Transformando os dados no formato adequado para o HeatMap
  const heatmapData = data.map((country, rowIndex) => {
    return Object.keys(country)
      .filter(key => key !== 'name')
      .map((year, colIndex) => {
        return [rowIndex, colIndex, country[year]];
      });
  }).flat();

  // Obtendo rótulos para o eixo X (nomes dos países)
  const xAxisLabels = data.map(country => country.name);

  // Obtendo rótulos para o eixo Y (anos)
  const yAxisLabels = Object.keys(data[0])
    .filter(key => key !== 'name');

  // Renderizando o componente HeatMap
  return (
    <HeatMapComponent
      titleSettings={{
        text: 'Porcentagem de eletricidade ao longo dos anos nos países ( % )',
        textStyle: {
          size: '20px',
          fontWeight: '700',
          fontStyle: 'Normal',
          fontFamily: 'Segoe UI'
        }
      }}
      xAxis={{
        labels: xAxisLabels
      }}
      yAxis={{
        labels: yAxisLabels
      }}
      dataSource={heatmapData}
      dataSourceSettings={{
        isJsonData: false,
        adaptorType: 'Cell'
      }}
      paletteSettings={{
        palette: [{ color: '#3498DB' }, { color: '#2C3E50' }]
      }}
      cellSettings={{
        border: {
          width: 0
        },
        textStyle: {
          color: 'white'
        },
        format: '{value} %'
      }}
      legendSettings={{
        visible: true
      }}
      tooltipRender={tooltipTemplate}
    >
      <Inject services={[Legend, Tooltip, Adaptor]} />
    </HeatMapComponent>
  );
}

export default HeatMap;