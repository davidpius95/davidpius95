import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { NonTechnicalList } from "./nonTechnical/NonTechnicalList";
import { NonTechnicalCreate } from "./nonTechnical/NonTechnicalCreate";
import { NonTechnicalEdit } from "./nonTechnical/NonTechnicalEdit";
import { NonTechnicalShow } from "./nonTechnical/NonTechnicalShow";
import { TechnicalList } from "./technical/TechnicalList";
import { TechnicalCreate } from "./technical/TechnicalCreate";
import { TechnicalEdit } from "./technical/TechnicalEdit";
import { TechnicalShow } from "./technical/TechnicalShow";
import { L2sList } from "./l2s/L2sList";
import { L2sCreate } from "./l2s/L2sCreate";
import { L2sEdit } from "./l2s/L2sEdit";
import { L2sShow } from "./l2s/L2sShow";
import { DeveloperList } from "./developer/DeveloperList";
import { DeveloperCreate } from "./developer/DeveloperCreate";
import { DeveloperEdit } from "./developer/DeveloperEdit";
import { DeveloperShow } from "./developer/DeveloperShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { TechnologyList } from "./technology/TechnologyList";
import { TechnologyCreate } from "./technology/TechnologyCreate";
import { TechnologyEdit } from "./technology/TechnologyEdit";
import { TechnologyShow } from "./technology/TechnologyShow";
import { RepositoryList } from "./repository/RepositoryList";
import { RepositoryCreate } from "./repository/RepositoryCreate";
import { RepositoryEdit } from "./repository/RepositoryEdit";
import { RepositoryShow } from "./repository/RepositoryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
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
        title={"OpenDevNetwork"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="NonTechnical"
          list={NonTechnicalList}
          edit={NonTechnicalEdit}
          create={NonTechnicalCreate}
          show={NonTechnicalShow}
        />
        <Resource
          name="Technical"
          list={TechnicalList}
          edit={TechnicalEdit}
          create={TechnicalCreate}
          show={TechnicalShow}
        />
        <Resource
          name="L2s"
          list={L2sList}
          edit={L2sEdit}
          create={L2sCreate}
          show={L2sShow}
        />
        <Resource
          name="Developer"
          list={DeveloperList}
          edit={DeveloperEdit}
          create={DeveloperCreate}
          show={DeveloperShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Technology"
          list={TechnologyList}
          edit={TechnologyEdit}
          create={TechnologyCreate}
          show={TechnologyShow}
        />
        <Resource
          name="Repository"
          list={RepositoryList}
          edit={RepositoryEdit}
          create={RepositoryCreate}
          show={RepositoryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
