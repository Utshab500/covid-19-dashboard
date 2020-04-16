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

class IndiaTable extends React.Component {

    tableData = [];

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.data !== this.props.data) {
            this.prepareTableData(nextProps);
            return true;
        }
        else {
            return false;
        }
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

    // Table Data Preparation
    prepareTableData = ( nextProps ) => {
        if (Object.entries(nextProps.data).length > 0) {
            let dataOperation = new DataOperation();
            let stateWisePopulation = new Census().getPopulation();
            let temp = [];
            Object.keys(stateWisePopulation).map(e => temp.push(e.toUpperCase()))
            stateWisePopulation = [...Object.entries(stateWisePopulation)];
            let stateList = [...temp];
            temp = [...nextProps.data.statewise];
            temp.shift();
            for(let d in temp) {
                let index = stateList.indexOf(temp[d].state.toUpperCase());
                if (index >= 0) {
                    this.tableData.push([ 
                        temp[d].state,
                        temp[d].confirmed,
                        temp[d].deaths,
                        temp[d].recovered,
                        dataOperation.getMortalityRate(temp[d].deaths, stateWisePopulation[index][1])
                    ]);
                }
                else {
                    this.tableData.push([ 
                        temp[d].state,
                        temp[d].confirmed,
                        temp[d].deaths,
                        temp[d].recovered,
                        'NA'
                    ]);
                }
            }
            this.setHighestMortality( this.tableData );
        }
    }

    render() {
        
        return (
            <div>
                <Table 
                    heading={['State', 'Confirmed', 'Deaths', 'Recovered', 'Mortality Rate']}
                    rows={this.tableData}
                />
            </div>
        );
    }
}

export default IndiaTable;