import axios from 'axios';

class CovidData {
    getData = () => {
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
}

export default CovidData;
