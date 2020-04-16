/**
 * This class organize World Wide COVID data
 * 
 * @author Utshab Saha
 * @email utshab500@gmail.com
 */
import React from 'react';
import Table from '../statelessComponents/fixedHeaderTable';

class WorldTable extends React.PureComponent {

    render() {
        // Table Data Preparation
        let tableData = [];
        if (Object.entries(this.props.data).length > 0) {
            for(let d in this.props.data) {
                tableData.push([
                    d, 
                    this.props.data[d][this.props.data[d].length-1].confirmed,
                    this.props.data[d][this.props.data[d].length-1].deaths,
                    this.props.data[d][this.props.data[d].length-1].recovered
                ]);
            }
        }
        return (
            <div>
                <Table 
                    heading={['Country', 'Confirmed', 'Deaths', 'Recovered']}
                    rows={tableData}
                />
            </div>
        );
    }
}

export default WorldTable;