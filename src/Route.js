import React from "react";
import { Redirect, HashRouter, Switch, Route } from "react-router-dom";
import ViewHome from "./views/ViewHome";
import { ViewTeachingInformation } from "./views/ViewTeachingInformation";
import { ViewProjects } from "./views/ViewProjects";
import { ViewChemistryLab } from "./views/ViewChemistryLab";
import { ViewActivities } from "./views/ViewActivities";
import { ViewConsultancies } from "./views/ViewConsultancies";
import { ViewApplications } from "./views/ViewApplications";
import { ViewTeachingMaterials } from "./views/ViewTeachingMaterials";
import { ViewTeacherPosts } from "./views/ViewTeacherPosts";

const Routes = () => {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={ViewHome} />
        <Route
          exact
          path="/informacion-docente"
          component={ViewTeachingInformation}
        />
        <Route exact path="/proyectos" component={ViewProjects} />
        <Route exact path="/laboratorio-quimica" component={ViewChemistryLab} />
        <Route exact path="/actividades" component={ViewActivities} />
        <Route exact path="/asesorias" component={ViewConsultancies} />
        <Route exact path="/aplicaciones" component={ViewApplications} />
        <Route
          exact
          path="/material-didactico"
          component={ViewTeachingMaterials}
        />
         <Route
          exact
          path="/material-didactico/articulos-docentes"
          component={ViewTeacherPosts}
        />
        <Redirect to="/" />
      </Switch>
    </HashRouter>
  );
};

export default Routes;
