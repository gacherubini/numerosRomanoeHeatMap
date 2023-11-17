import React from 'react';
import { TreeMapComponent } from '@syncfusion/ej2-react-treemap';
import '../App.css'


function TreeMap() {
    const data = [
        { State: 'Brazil', Population: 214993438 },
        { State: 'Colombia', Population: 50882891 },
        { State: 'Argentina', Population: 45195777 },
        { State: 'Ecuador', Population: 17688599 },
        { State: 'Chile', Population: 19213482 },
        { State: 'Peru', Population: 32971854 },
        { State: 'Venezuela', Population: 28435943 },
        { State: 'Bolivia', Population: 11673029 },
        { State: 'Paraguay', Population: 7132530 },
        { State: 'Uruguay', Population: 3473727 },
        { State: 'Falkland Islands', Population: 3480 },
        { State: 'French Guiana', Population: 31444 },
        { State: 'Guyana', Population: 786508 },
        { State: 'Suriname', Population: 586632 },
    ];

    const colorMapping = [
        { from: 3480, to: 7132532, color: '#c2deff' },  
        { from: 586632, to: 586632, color: '#b1d3fc' },  
        { from: 11673029, to: 11673030, color: '#99c4f7' },  
        { from: 11673029, to: 28435943, color: '#84bafa' },  
        { from: 32971854, to: 32971855, color: '#73b3ff' },  
        { from: 45195776, to: 45195777, color: '#56a2fc' },
        { from: 45195778, to: 50882892, color: '#3d94fc' },  
        { from: 50882895, to: 234993438, color: '#0f7afa' }, 
    ];
    
    return (
        <div>
            <h2>População mundial por País,informações extraidas do Banco de Dados de Indicadores de Desenvolvimento Mundial</h2>
            <TreeMapComponent 
            height='500px'
            width='85%'
            dataSource={data}
            weightValuePath='Population'
            rangeColorValuePath='Population'
            leafItemSettings={{
            labelPath: 'State',
            labelPosition:'Center',
            padding:0,
            colorMapping: colorMapping
        }}>
    </TreeMapComponent> 
        </div>
    );
}

export default TreeMap;
