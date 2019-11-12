const dev = {
    "APIAddress": "http://localhost",

    "GoogleConfig": {
        "ClientID": "193508431213-m0598lnnn1mniedafvgdeq3oe0pqpc27.apps.googleusercontent.com",
        "ClientSecrect": "rPSipWb0Bi25vPy3FrJlHhXY"
    }
}

const prod = {
    "APIAddress": "http://localhost",

    "GoogleConfig": {
        "ClientID": "193508431213-m0598lnnn1mniedafvgdeq3oe0pqpc27.apps.googleusercontent.com",
        "ClientSecrect": "rPSipWb0Bi25vPy3FrJlHhXY"
    }
}

const config = process.env.REACT_APP_STAGE === 'dev' ? dev : prod

export default config
