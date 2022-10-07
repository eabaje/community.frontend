import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { React, useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import MainLayout from "./layout/mainLayout";
import NoLayout from "./layout/noLayout";
import AuthLayout from "./layout/authLayout";
import isAuthenticated from "./utils/isAuthenticated";
import ContentMiddle from "./components/content/middle";

function App() {
  const { user } = useContext(AuthContext);
  console.log("user", user);
  // window.addEventListener("beforeunload", () =>
  //   localStorage.removeItem("user")
  // );

  function RouteWithLayout({ layout, component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          React.createElement(
            layout,
            props,
            React.createElement(component, props)
          )
        }
      />
    );
  }

  const LoginLayoutRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <AuthLayout>
            <Component {...matchProps} />
          </AuthLayout>
        )}
      />
    );
  };
  const NoLayoutRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <NoLayout>
            <Component {...matchProps} />
          </NoLayout>
        )}
      />
    );
  };
  const AppLayoutRoute = ({ component: Component, ...rest }) => {
    // if (!isAuthenticated()) {
    //   window.location.href = "/signin";
    //   // history.push("/signin");
    // }

    return (
      <Route
        {...rest}
        render={(matchProps) => (
          <MainLayout>
            <Component {...matchProps} />
          </MainLayout>
        )}
      />
    );
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? (
            <AppLayoutRoute path="/" component={ContentMiddle} />
          ) : (
            <AppLayoutRoute path="/" component={ContentMiddle} />
          )}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
