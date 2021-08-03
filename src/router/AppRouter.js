import { BrowserRouter, Route, Switch } from "react-router-dom";
import Tables from "../component/table/Tables";
import Header from "../component/Header";
import NotFound from "../component/NotFound";
import Main from "../component/Main";
import Profile from "../component/profile/Profile";
import Login from "../component/auth/Login";
import Redirect from "../component/auth/Redirect";
import AddToQueue from "../component/queue/AddToQueue";

const AppRouter = () => (
    <BrowserRouter>
        <Header />
        <Switch>
            <Route path="/" component={Main} exact></Route>
            <Route path="/table" component={Tables} exact></Route>
            <Route path="/profile" component={Profile} exact></Route>
            <Route path="/login" component={Login} exact></Route>
            <Route path="/redirect" component={Redirect} exact></Route>
            <Route path="/queue/:id" component={AddToQueue} exact></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
);

export default AppRouter;