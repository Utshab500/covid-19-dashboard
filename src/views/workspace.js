import React from 'react';
import BottomComponent from '../components/statelessComponents/bottomNavigation';
import VisibilityIcon from '@material-ui/icons/Visibility';
import CreateIcon from '@material-ui/icons/Create';
import Grid from '@material-ui/core/Grid';
import ClusterSelectComponent from '../components/statefulComponents/clusterSelect';
import ButtonComponent from '../components/statelessComponents/button';
import PageviewIcon from '@material-ui/icons/Pageview';
import './custom.css'

class WorkSpace extends React.Component {
    constructor( props ) {
        super(props);
        const query = new URLSearchParams(this.props.location.search);
        let selectedCluster = '';
        for (let param of query.entries()) {
            if (param[0] === 'cluster-name') {
                selectedCluster = param[1];
            }
        }
        this.state = {
            buttonNavigationValue: 'view',
            selectedCluster: selectedCluster
        };
    }
    

    buttonNavigationContents = [
        {label: 'View', value: 'view', icon:<VisibilityIcon />},
        {label: 'Create', value: 'create', icon:<CreateIcon />}
    ];

    handleChange = ( newValue) => {
        this.setState({ buttonNavigationValue: newValue });
    };

    clusterChange = ( selected ) => {
        this.setState({selectedCluster: selected});
    }

    render () {
        return (
            <div>
                <Grid container spacing={6} direction="row">
                    <Grid className="paddig-left-5per paddig-top-2rem" item xs={12} sm={8} md={8} lg={8}>
                        <BottomComponent 
                            buttonNavigationValue={this.state.buttonNavigationValue}
                            buttonNavigationContents={this.buttonNavigationContents}
                            width='20%'
                            change={this.handleChange}/>
                    </Grid>
                    <Grid item xs={6} sm={2} md={2} lg={2}>
                        <ClusterSelectComponent 
                            width='100%'
                            selectedCluster={this.state.selectedCluster}
                            change={this.clusterChange}/>
                    </Grid>
                    <Grid className='paddig-top-3rem' item xs={6} sm={2} md={2} lg={2}>
                        <ButtonComponent 
                            label='Search'
                            width='100%'
                            startIcon={<PageviewIcon />}
                            clicked={this.gotToWorkSpace}
                        />
                    </Grid>
                </Grid>
                <hr />
            </div>
        );
    }
}

export default WorkSpace;