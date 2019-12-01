import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import LandingPage from "../LandingPage/LandingPage";
import LoginPage from "../../routes/LoginPage/LoginPage";
import DashboardPage from "../../routes/DashboardPage/DashboardPage";
import RegistrationPage from "../../routes/RegistrationPage/RegistrationPage";
import PaycheckPage from "../../routes/PaycheckPage/PaycheckPage";
import NotFoundPage from "../../routes/NotFoundPage/NoteFoundPage";
import PaycheckListPage from "../../routes/PaycheckListPage/PaycheckListPage";
import PublicOnlyRoute from "../Utilities/PublicOnlyRoute";
import PrivateRoute from "../Utilities/PrivateRoute";

class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    return (
      <div>
        <div className="App">
          <nav>
            {" "}
            <Header />
          </nav>
          <header>
            {" "}
            <Nav />
          </header>
          <main>
            {this.state.hasError && (
              <p className="red">There was an error! Oh no!</p>
            )}
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <PublicOnlyRoute path="/login" component={LoginPage} />
              <PublicOnlyRoute path="/register" component={RegistrationPage} />
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/paystub" component={PaycheckPage} />
              <PrivateRoute path="/paystubList" component={PaycheckListPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </main>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;

/* ========== APP PAGE ==========

              <Route component={NotFoundPage} />

      <body>
        <main className="App">
          <Header></Header>
          <Nav></Nav>
          <LandingPage></LandingPage>
        </main>
        <Footer></Footer>
      </body>

*/
