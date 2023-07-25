import axios from "axios";

// Get Token
export const token = async () => {
  try {
    const response = await axios.post("https://data.argaam.com/authenticate", {
      username: "ALHOKAIR_GROUP",
      password: "T44S21-PK4A51C4CF78967C857BE8F-X0007F-4Z",
    });
    if (response.status === 200) {
      return localStorage.setItem("token", response.data.jwtToken);
    } else {
      return false;
    }
  } catch (err) {
    console.log(err);
  }
};

//formatter
export const formatter = (formatterNum) => {
  return formatterNum?.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
};

// isNegative
export const isNegative = (isNegNum) => {
  if (isNegNum > 0) {
    return <span className="text-success">{formatter(isNegNum)}</span>;
  } else if (isNegNum < 0) {
    return (
      <span className="text-danger">{`(${formatter(
        Math.abs(isNegNum)
      )})`}</span>
    );
  }
};

export const isNegativePercentage = (isNegNum) => {
  if (isNegNum > 0) {
    return <span className="text-success">{formatter(isNegNum) + "%"}</span>;
  } else if (isNegNum < 0) {
    return (
      <span className="text-danger">{`(${formatter(
        Math.abs(isNegNum)
      )})%`}</span>
    );
  }
};


/*== API Configuration Data ==*/
const apiUser = "ALHOKAIR_GROUP";
const apiPassword = "T44S21-PK4A51C4CF78967C857BE8F-X0007F-4Z";
const baseUrl = "https://data.argaam.com";

const AccessRefreshTokens = {
  accessTokenExpireIn: new Date(2020),
  getAccessToken: async function () {
    var app = this;
    if (this.accessTokenExpireIn < new Date()) {
      var authUrl = baseUrl + "/authenticate";
      var data = { username: apiUser, password: apiPassword };
      try {
        const response = await axios.post(authUrl, data);
        var data_1 = response.data;
        app._token = data_1.jwtToken;
        app.accessTokenExpireIn = data_1.expires;
        localStorage.setItem("token", response.data.jwtToken);
        return Promise.resolve(this._token);
      } catch (exception) {
        console.log("Error:" + exception);
        throw exception;
      }
    } else {
      return Promise.resolve(this._token);
    }
  },
};

export default AccessRefreshTokens;

// export default fetchData;
