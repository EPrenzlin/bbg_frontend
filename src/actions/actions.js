const API = ""

//   export const searchIPO = () => {
//     return dispatch => {
//       fetch(API + "/exemptions")
//       .then(response => response.json())
//       .then(exemptions => {
//           dispatch({type:'SET_EXEMPTIONS', exemptions})
//       })
//       }
//     }

    export const searchIPO = () => {
        finnhubClient.ipoCalendar("2020-01-01", "2020-06-15", (error, data, response) => {
            console.log(data)
        })
    }