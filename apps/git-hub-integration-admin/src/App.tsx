import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { OAuthTokenList } from "./oAuthToken/OAuthTokenList";
import { OAuthTokenCreate } from "./oAuthToken/OAuthTokenCreate";
import { OAuthTokenEdit } from "./oAuthToken/OAuthTokenEdit";
import { OAuthTokenShow } from "./oAuthToken/OAuthTokenShow";
import { GitHubUserList } from "./gitHubUser/GitHubUserList";
import { GitHubUserCreate } from "./gitHubUser/GitHubUserCreate";
import { GitHubUserEdit } from "./gitHubUser/GitHubUserEdit";
import { GitHubUserShow } from "./gitHubUser/GitHubUserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"GitHubIntegration"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="OAuthToken"
          list={OAuthTokenList}
          edit={OAuthTokenEdit}
          create={OAuthTokenCreate}
          show={OAuthTokenShow}
        />
        <Resource
          name="GitHubUser"
          list={GitHubUserList}
          edit={GitHubUserEdit}
          create={GitHubUserCreate}
          show={GitHubUserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
