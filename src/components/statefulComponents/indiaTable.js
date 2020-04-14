/**
 * This class organize State Wise COVID data in India
 * 
 * @author Utshab Saha
 * @email utshab500@gmail.com
 */
import React from 'react';
import Table from '../statelessComponents/fixedHeaderTable';

class IndiaTable extends React.Component{

    shouldComponentUpdate(nextProps, nextState) {
        return true;
    }

    render() {
        // Table Data Preparation
        let tableData = [];
        if (Object.entries(this.props.data).length > 0) {
            let temp = [...this.props.data.statewise];
            temp.shift();
            for(let d in temp) {
                tableData.push([ 
                    temp[d].state,
                    temp[d].confirmed,
                    temp[d].deaths,
                    temp[d].recovered,
                ]);
            }
        }
        return (
            <div>
                <Table 
                    heading={['State', 'Confirmed', 'Deaths', 'Recovered']}
                    rows={tableData}
                />
            </div>
        );
    }
}

export default IndiaTable;