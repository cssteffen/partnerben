import config from "../config";
import TokenService from "../services/token-service";

const PaycheckApiService = {
  getPaychecks() {
    return fetch(`${config.API_ENDPOINT}/paystubs`, {
      headers: {
        // authorization: `basic ${TokenService.getAuthToken()}`
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },
  getPaycheck(paycheckId) {
    return fetch(`${config.API_ENDPOINT}/paystubs/${paycheckId}`, {
      headers: {
        //authorization: `basic ${TokenService.getAuthToken()}`
        authorization: `bearer ${TokenService.getAuthToken()}`
      }
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  },

  postPaycheck(userId, paystub_date, ben_hours, vacation_hours, sick_hours) {
    return fetch(`${config.API_ENDPOINT}/paystubs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        //authorization: `basic ${TokenService.getAuthToken()}`
        authorization: `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify({
        user_id: userId,
        paystub_date,
        ben_hours,
        vacation_hours,
        sick_hours
      })
    }).then(res =>
      !res.ok ? res.json().then(e => Promise.reject(e)) : res.json()
    );
  }
};

export default PaycheckApiService;
