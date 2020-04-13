/**
 * View component
 * ES6 syntax
 */

import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import SelectComponent from '../components/statelessComponents/select';
import Table from '../components/statelessComponents/fixedHeaderTable';
import CardComponent from '../components/statelessComponents/card';
import ButtonComponent from '../components/statelessComponents/button';
import SnackBarComponent from '../components/statelessComponents/snackbar';
import CovidData from '../controllers/covidData';
import './custom.css';
import '../App.css';


class Home extends React.Component {
    state = {
        selectedCountry: '',
        alert: false,
        COVID: {}
    }

    componentDidMount () {
        new CovidData().getData().then(res => {
            this.setState({COVID: res.data})
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

    render() {
        let countryList = Object.keys(this.state.COVID);
        let countries = [];
        // console.log(this.state.COVID);

        // Select Item Preparation
        if (countryList.length > 0) {
            for(let c in countryList) {
                countries.push({ value: countryList[c], name: countryList[c] });
            }
        }

        // Table Data Preparation
        let tableData = [];
        if (Object.entries(this.state.COVID).length > 0) {
            for(let d in this.state.COVID) {
                tableData.push([
                    d, 
                    this.state.COVID[d][this.state.COVID[d].length-1].confirmed,
                    this.state.COVID[d][this.state.COVID[d].length-1].deaths,
                    this.state.COVID[d][this.state.COVID[d].length-1].recovered
                ]);
            }
        }

        // Highest affected zones
        let highestConfirmed = 0;
        let highestDeaths = 0;
        let mostConfirmedCountry = {};
        let mostDeathsCountry = {};
        if (Object.entries(this.state.COVID).length > 0) {
            for(let d in this.state.COVID) {
                if (highestConfirmed < this.state.COVID[d][this.state.COVID[d].length-1].confirmed) {
                    highestConfirmed = this.state.COVID[d][this.state.COVID[d].length-1].confirmed;
                    mostConfirmedCountry = {
                        country: d,
                        data: this.state.COVID[d][this.state.COVID[d].length-1].confirmed
                    }; 
                }
                if (highestDeaths < this.state.COVID[d][this.state.COVID[d].length-1].deaths) {
                    highestDeaths = this.state.COVID[d][this.state.COVID[d].length-1].deaths;
                    mostDeathsCountry = {
                        country: d,
                        data: this.state.COVID[d][this.state.COVID[d].length-1].deaths
                    }; 
                }
            }
        }
        
        return (
            <div className='paddig-left-2per paddig-top-2rem'>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={7} md={7}>
                        <Table 
                            heading={['Country', 'Confirmed', 'Deaths', 'Recovered']}
                            rows={tableData}
                        />
                    </Grid>
                    <Grid item xs={12} sm={5} md={5}>
                        <CardComponent 
                            haveCardMedia={false}
                            heading='Most Confirmed'
                        >
                            <hr />
                            <Typography variant="h4" component="h4">
                                {mostConfirmedCountry.data}
                            </Typography>
                            <Typography variant="h5" component="h5">
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
                </Grid>
            </div>
        );
    }
}

export default Home;