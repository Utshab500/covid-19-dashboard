/**
 * This class contains the max min calculation
 * 
 * @author Utshab Saha
 * @email utshab500@gmail.com
 */

class DataOperation {
    getMostConfirmedWorlWide = ( data ) => {
        // Highest affected zones
        let highestConfirmed = 0;
        let mostConfirmedCountry = {};
        if (Object.entries(data).length > 0) {
            for(let d in data) {
                if (highestConfirmed < data[d][data[d].length-1].confirmed) {
                    highestConfirmed = data[d][data[d].length-1].confirmed;
                    mostConfirmedCountry = {
                        country: d,
                        data: data[d][data[d].length-1].confirmed
                    }; 
                }
            }
        }
        return mostConfirmedCountry;
    }

    getMostDeathsWorldWhide = ( data ) => {
        let highestDeaths = 0;
        let mostDeathsCountry = {};
        if (Object.entries(data).length > 0) {
            for(let d in data) {
                if (highestDeaths < data[d][data[d].length-1].deaths) {
                    highestDeaths = data[d][data[d].length-1].deaths;
                    mostDeathsCountry = {
                        country: d,
                        data: data[d][data[d].length-1].deaths
                    }; 
                }
            }
        }
        return mostDeathsCountry;
    }

    /**
     * Mortality Rate calculation is as per CDC guideline
     * https://www.cdc.gov/csels/dsepd/ss1978/lesson3/section3.html
     */
    getMortalityRate = ( deaths, population ) => {
        return ((deaths/population)*100000);
    }
}

export default DataOperation;