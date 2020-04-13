import React from 'react';
import SelectComponent from '../statelessComponents/select';

class ClusterSelect extends React.Component {

    state = {
        selectedCluster: ''
    }

    selectValues = [
        { value: 'eks-qa-cli', name: 'EKS-QA-CLI' },
        { value: 'wp-lite', name: 'WP-Lite' },
        { value: 'kops', name: 'KOPS' },
    ];

    componentDidMount () {
        if(Object.keys(this.props).includes('selectedCluster')) {
            this.setState({ selectedCluster: this.props.selectedCluster });
        }
    }

    handleChange = ( event ) => {
        this.setState({selectedCluster: event.target.value});
        this.props.change(event.target.value);
    }

    render() {
        return (
            <div>
                <SelectComponent 
                    width={this.props.width}
                    label='Select Cluster' 
                    selectValues={this.selectValues}
                    selectedValue={this.state.selectedCluster}
                    changed={(event) => this.handleChange(event)}
                />
            </div>
        );
    }
}

export default ClusterSelect;