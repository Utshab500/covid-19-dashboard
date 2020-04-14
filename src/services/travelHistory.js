/**
 * This class contains the Travel history calculation of inffected person
 * 
 * @author Utshab Saha
 * @email utshab500@gmail.com
 */

class TravelHistoryAnalysis {

    getTravelTypeNumbers = ( data ) => {
        let typeOfTravel = {};
        if (Object.entries(data).length > 0) {
            data.travel_history.map((d) => {
                // console.log(Object.keys(typeOfTravel));
                if(!Object.keys(typeOfTravel).includes(d.type.toUpperCase())) {
                    typeOfTravel[d.type.toUpperCase()] = 0;
                }
                else {
                    typeOfTravel[d.type.toUpperCase()] += 1;
                }
            });
        }
        return typeOfTravel;
    }

    getMaxTransmissionBy = ( data ) => {
        let travelData = this.getTravelTypeNumbers(data);
        let maxTransmission = {type: 'NA', count: 'NA'};
        let max = 0;
        let temp = Object.keys(travelData);
        for (let d in temp) {
            if(max < travelData[temp[d]]) {
                max = travelData[temp[d]];
                maxTransmission.type = temp[d];
                maxTransmission.count = max;
            }
        }
        return maxTransmission;
    }
}

export default TravelHistoryAnalysis;