import axios from 'axios';

/**
 * This class collects the COVID data
 * 
 * @author Utshab Saha
 * @email utshab500@gmail.com
 */
class CovidData {

    getWorldData = () => {
        return axios.get('https://pomber.github.io/covid19/timeseries.json')
        .then(res => {            
            let response = res;
            return response;
        })
        .catch(err => {
            let response = {
                "msg" : "NA"
            };
            return response;
        });
    }

    // National time series, statewise stats and test counts
    getNationalTimeSeriesData = () => {
        return axios.get('https://api.covid19india.org/data.json')
        .then(res => {            
            let response = res;
            return response;
        })
        .catch(err => {
            let response = {
                "msg" : "NA"
            };
            return response;
        });
    }
}

export default CovidData;
