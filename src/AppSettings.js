const isProd = false;
const version = "Version 0.3 alpha";
const Localhost = "http://localhost:7071";
const Prodhost = "https://ipo2020-dev-appservice.azurewebsites.net";
const FunctionKey = "code=RL9gvBjKUqu7L0AL0OZorm/Zt4Jw4JfJFVvynKN93bjFihZBfkaICw==";
const ApiMethod = method => `${isProd ? Prodhost : Localhost}/api/${method}?${FunctionKey}`;

const AppSettings = {
  Version: version,
  RequestBallot: ApiMethod("RequestBallot")
};

export default AppSettings;