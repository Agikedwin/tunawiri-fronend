import axios from 'axios';

const urlAuth ='http://41.89.200.201:8050/'; 
//const urlAuth = 'http://0.0.0.0:8050/';
//const urlSms = 'http://localhost:8050/';



var apiUrl = "";


axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'true'; // for all requests
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET, POST, OPTIONS';
axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, Content-Type, X-Auth-Token';
axios.defaults.headers.common['Access-Control-Max-Age'] = '4567';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';

let headers = {
    "Content-type": "application/json; charset=UTF-8",
    "Authorization": 'Bearer ' //+ localStorage.getItem('tokenKey')
};
export default {

    async filterUrl(urlid: any) {
        console.log("================", urlid)

        switch (urlid) {
            case 3:
                apiUrl = urlAuth;
                break;
            case 3:
                apiUrl = urlAuth;
                break;
            case 3:
                apiUrl = urlAuth;
                break;


        }


    },

    async getEntries(urlpath: any, urlid: any) {
        let data;
        console.log(' AT API --------', urlAuth + urlpath)
        await axios
            .get(urlAuth + urlpath)
            .then((res: any) => {

                data = res.data;

            })
            .catch((error: any) => {
                // eslint-disable-next-line
                // tslint:disable-next-line:no-console
                console.log(error);
            });
        return data;
    },

    async addEntry(urlpath: any, payload: any, urlid: any) {
        this.filterUrl(urlid)
        let data: any;
        // tslint:disable-next-line:no-console
        console.log('playload at API', urlAuth + urlpath)
        console.log('playload Data at API', payload)
        await axios
            .post(urlAuth + urlpath, payload, { headers }).then((res: any) => {
                data = res;
                console.log(res)
            })
            .catch((error: any) => {
                // eslint-disable-next-line
                // tslint:disable-next-line:no-console
                console.error('erroer agik :: ', error);
            });
        return data;

    },
    async corsChecker(urlpath: any) {
        let data: any;
        await axios
            .get(urlAuth + urlpath, {
                headers
            })
            .then((res: any) => {
                data = res.data;
            })
            .catch((error: any) => {
                // tslint:disable-next-line:no-console
                console.error(error);
            });
        return data;

    },
    async editEntry(urlpath: any, id: any, payload: any, urlid: any) {
        let data: any;
        this.filterUrl(urlid)
        await axios
            .put(apiUrl + urlpath + '/' + id, payload, {
                headers
            })
            .then((res: any) => {
                data = res;
            })
            .catch((error: any) => {
                // tslint:disable-next-line:no-console
                console.log(error);
            });
        return data;
    },
    async deleteEntry(urlpath: any, id: any, payload: any, urlid: any) {
        let data: any;
        this.filterUrl(urlid)
        await axios
            .delete(urlAuth + urlpath + '/' + id, payload)
            .then((res: any) => {
                data = res;
            })
            .catch((error: any) => {
                // tslint:disable-next-line:no-console
                console.log(error);
            });
        return data;
    },
    async getEntry(urlpath: any, searchValue: any, urlid: any) {
        let data: any;
        console.log('playload at API', urlAuth + urlpath + '/' + searchValue)
        await axios
            .get(urlAuth + urlpath + '/' + searchValue, {
                headers
            })
            .then((res: any) => {
                data = res.data;
                console.log(data)
            })
            .catch((error: any) => {
                // tslint:disable-next-line:no-console
                console.log(error);
            });
        return data;
    },


    async getSingleEntry(urlpath: any, recordid: any, urlid: any) {
        let data: any;
        this.filterUrl(urlid)
        await axios
            .get(apiUrl + urlpath + '/' + recordid, {
                headers
            })
            .then((res: any) => {
                data = res;
            })
            .catch((error: any) => {
                // tslint:disable-next-line:no-console
                console.log(error);
            });

        return data;
    },


    async countOccurrences(data: any, factor:any) {
        console.log(" FACTOR ", factor["More than half the days"])

        

       
        const countOccurrences = []

        // Iterate over the object properties
        for (let key in data) {
            // Get the value of the current property
            const value = data[key];
            console.log("value ::::::", value)

            // If the value is not in the countOccurrences object, initialize its count to 1
            if (!countOccurrences[value] && value !=="") {
                countOccurrences[value] = 1;
            } else  if(value!==""){
                // If the value is already in the countOccurrences object, increment its count
                countOccurrences[value]++;
            }
        }

        // Output the count of each unique value and calculate the sum
        let sum = 0;
        let multiplier =0
        for (let value in countOccurrences) {
            if (factor[value]){
                multiplier = (countOccurrences[value] * factor[value])
                console.log("Value ::: of factor", multiplier)

            }


            sum += multiplier
        }

        return sum


    },

    async colorScheme(scheme:any){
        switch(scheme){   
            case "Mild": return "warning";
            case "Moderate": return "secondary";
            case "Severe": return "danger";
            default: return "secondary";      
        }
    }
}
