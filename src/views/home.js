/**
 * View component
 * ES6 syntax
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import InfoIcon from '@material-ui/icons/Info';

import './custom.css';
import '../App.css';

import WorldTable from '../components/statefulComponents/worldTable';
import IndiaTable from '../components/statefulComponents/indiaTable';
import CardComponent from '../components/statelessComponents/card';
import CovidData from '../services/covidData';
import DataOperation from '../services/dataOperation';
import Tooltip from '@material-ui/core/Tooltip';



class Home extends React.Component {
    state = {
        selectedCountry: '',
        alert: false,
        worldCOVID: {},
        indiaCOVID: {},
        travelHistoryCOVID: {},
        highestMortality: null
    }

    componentDidMount () {
        new CovidData().getWorldData().then(res => {
            this.setState({worldCOVID: res.data})
        });

        new CovidData().getNationalTimeSeriesData().then(res => {
            this.setState({indiaCOVID: res.data})
        });

        new CovidData().getTravelHistoryData().then(res => {
            this.setState({travelHistoryCOVID: res.data})
        });
        
    }

    handleChange = ( event ) => {
        this.setState({selectedCountry: event.target.value});
    }

    gotToWorkSpace = () => {
        if (this.state.selectedCluster !== '') {
            this.props.history.push({
                pathname: 'workspace',
                search: '?cluster-name='+this.state.selectedCluster
            });
        }
        else {
            this.setState({ alert: true });
        }
    }

    handleClose = () => {
        this.setState({ alert: false });
    }

    setHighestMortality = ( object ) => {
        if(this.state.highestMortality === null) {
            this.setState({ highestMortality: object });
            console.log(object);
        }
    }

    render() {
        let countryList = Object.keys(this.state.worldCOVID);
        let countries = [];

        // Select Item Preparation
        if (countryList.length > 0) {
            for(let c in countryList) {
                countries.push({ value: countryList[c], name: countryList[c] });
            }
        }

        let mostConfirmedCountry = new DataOperation().getMostConfirmedWorlWide(this.state.worldCOVID);
        let mostDeathsCountry = new DataOperation().getMostDeathsWorldWhide(this.state.worldCOVID);    


        let mostAffectedIndia = 0;
        if (Object.keys(this.state.indiaCOVID).length > 0) {
            mostAffectedIndia = this.state.indiaCOVID.statewise[1];
        }

        // console.log(this.state.indiaCOVID);
        return (
            <div className='paddig-left-2per paddig-right-2per paddig-top-2rem'>
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={12} md={12}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12} md={12}>
                                <Typography variant="h5" component="h5">
                                    India COVID Data
                                </Typography>
                                <hr />
                            </Grid>
                            <Grid item xs={6} sm={2} md={2}>
                                <Typography variant="h5" component="h5">
                                    Active Cases
                                </Typography>
                                <Typography variant="h6" component="h6">
                                    {Object.keys(this.state.indiaCOVID).length > 0?this.state.indiaCOVID.statewise[0].active:''}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={2} md={2}>
                                <Typography variant="h5" component="h5">
                                    Confirmed Cases
                                </Typography>
                                <Typography variant="h6" component="h6">
                                    {Object.keys(this.state.indiaCOVID).length > 0?this.state.indiaCOVID.statewise[0].confirmed:''}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={2} md={2}>
                                <Typography variant="h5" component="h5">
                                    Deaths Confirmed
                                </Typography>
                                <Typography variant="h6" component="h6">
                                    {Object.keys(this.state.indiaCOVID).length > 0?this.state.indiaCOVID.statewise[0].deaths:''}
                                </Typography>
                            </Grid>
                            <Grid item xs={6} sm={2} md={2}>
                                <Typography variant="h5" component="h5">
                                    Recovered
                                </Typography>
                                <Typography variant="h6" component="h6">
                                    {Object.keys(this.state.indiaCOVID).length > 0?this.state.indiaCOVID.statewise[0].recovered:''}
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={4} md={4}>
                                <Typography variant="h5" component="h5">
                                    Highest Morality Rate
                                </Typography>
                                <Typography variant="h6" component="h6">
                                    {this.state.highestMortality !== null ? this.state.highestMortality[0]+': '+this.state.highestMortality[4].toFixed(4):''}
                                    <Tooltip title="Calculation is w.r.t 2011 India Cencus data & CDC guidelines" placement="top-end">
                                        <Button><InfoIcon fontSize='small'/></Button>
                                    </Tooltip>
                                </Typography>
                            </Grid>
                        </Grid>
                        <hr />
                    </Grid>
                </Grid>
                <br />
                <Grid container spacing={1}>
                    <Grid item xs={12} sm={3} md={3}>
                        <CardComponent 
                            width='100%'
                            haveCardMedia={false}
                            heading='Most Confirmed India'
                        >
                            <hr />
                            <Typography variant="h5" component="h5">
                                {mostAffectedIndia.confirmed}
                            </Typography>
                            <Typography variant="h6" component="h6">
                                {mostAffectedIndia.state}
                            </Typography>
                        </CardComponent>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <CardComponent 
                            width='100%'
                            haveCardMedia={false}
                            heading='Most Deaths India'
                        >
                            <hr />
                            <Typography variant="h5" component="h5">
                                {mostAffectedIndia.deaths}
                            </Typography>
                            <Typography variant="h6" component="h6">
                                {mostAffectedIndia.state}
                            </Typography>
                        </CardComponent>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <CardComponent 
                            width='100%'
                            haveCardMedia={false}
                            heading='Most Confirmed World'
                        >
                            <hr />
                            <Typography variant="h5" component="h5">
                                {mostConfirmedCountry.data}
                            </Typography>
                            <Typography variant="h6" component="h6">
                                {mostConfirmedCountry.country}
                            </Typography>
                        </CardComponent>
                        {/* <SelectComponent 
                            width='40%'
                            label='Select Country' 
                            selectValues={countries}
                            selectedValue={this.state.selectedCountry}
                            changed={(event) => this.handleChange(event)}
                        /> */}
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <CardComponent 
                            width='100%'
                            haveCardMedia={false}
                            heading='Most Deaths World'
                        >
                            <hr />
                            <Typography variant="h5" component="h5">
                                {mostDeathsCountry.data}
                            </Typography>
                            <Typography variant="h6" component="h6">
                                {mostDeathsCountry.country}
                            </Typography>
                        </CardComponent>
                    </Grid>
                </Grid>
                <br />
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6}>
                        <IndiaTable data={this.state.indiaCOVID} highestMortality={this.setHighestMortality}/>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <WorldTable data={this.state.worldCOVID}/>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Home;