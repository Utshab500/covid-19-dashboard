class Analysis {

    analysisIndia = ( data ) => {
        let resp = {};
        if (Object.entries(data).length > 0) {

            // Write analysis code

            // prints data in console
            console.log("India Data");
            console.log(data);
        }
        return resp;
    }

    analysisWorld = ( data ) => {
        let resp = {};
        if (Object.entries(data).length > 0) {

            // Write analysis code

            // prints data in console
            console.log("World Data");
            console.log(data);
        }
        return resp;
    }

    analysis = ( data, flag ) => {
        return (flag === 'IN') ? this.analysisIndia(data) : this.analysisWorld(data);
    }

}

export default Analysis;