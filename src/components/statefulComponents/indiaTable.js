/**
 * This class organize State Wise COVID data in India
 * 
 * @author Utshab Saha
 * @email utshab500@gmail.com
 */
import React from 'react';
import Table from '../statelessComponents/fixedHeaderTable';
import Census from '../../consts/census';
import DataOperation from '../../services/dataOperation';

class IndiaTable extends React.Component{

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    setHighestMortality( data ) {
        let highestMortality = 0;    
        let highestMortalityState = {};
        data.map(d => {
            if(highestMortality < d[4]) {
                highestMortality = d[4];
                highestMortalityState = [...d];
            }
        });
        this.props.highestMortality(highestMortalityState);
    }

    render() {
        // Table Data Preparation
        let tableData = [];
        if (Object.entries(this.props.data).length > 0) {
            let dataOperation = new DataOperation();
            let stateWisePopulation = new Census().getPopulation();
            let temp = [];
            Object.keys(stateWisePopulation).map(e => temp.push(e.toUpperCase()))
            stateWisePopulation = [...Object.entries(stateWisePopulation)];
            let stateList = [...temp];
            temp = [...this.props.data.statewise];
            temp.shift();
            for(let d in temp) {
                let index = stateList.indexOf(temp[d].state.toUpperCase());
                if (index >= 0) {
                    tableData.push([ 
                        temp[d].state,
                        temp[d].confirmed,
                        temp[d].deaths,
                        temp[d].recovered,
                        dataOperation.getMortalityRate(temp[d].deaths, stateWisePopulation[index][1])
                    ]);
                }
                else {
                    tableData.push([ 
                        temp[d].state,
                        temp[d].confirmed,
                        temp[d].deaths,
                        temp[d].recovered,
                        'NA'
                    ]);
                }
            }
            this.setHighestMortality( tableData );
        }
        return (
            <div>
                <Table 
                    heading={['State', 'Confirmed', 'Deaths', 'Recovered', 'Mortality Rate']}
                    rows={tableData}
                />
            </div>
        );
    }
}

export default IndiaTable;