import React from "react";
import Header from "../components/topbar/Topbar";
import { useContext, useState } from "react";
import { GlobalContext } from "../context/Provider";
import { signout } from "../context/actions/auth/auth.action";
import ContentLink from "../components/content/contentBar/Link";
import Rightbar from "../components/rightbar/Rightbar";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/footer";
const MainLayout = ({ children }) => {
  // const {
  //   authDispatch,
  //   authState: { user, isLoggedIn },
  // } = useContext(GlobalContext);

  // const [isAuthenticated, setIsAuthenticated] = React.useState(isLoggedIn);
  // const [authLoaded, setAuthLoaded] = React.useState(false);
  // // const [user, setUser] = useState({});

  // const getUser = async () => {
  //   try {
  //     // setUser(JSON.parse(localStorage.getItem("user")));
  //     if (user) {
  //       setAuthLoaded(true);

  //       setIsAuthenticated(true);
  //     } else {
  //       setAuthLoaded(true);

  //       setIsAuthenticated(false);

  //       window.location = "/signin";
  //     }
  //   } catch (error) {}
  // };
  const a = 1;
  React.useEffect(() => {
    // let controller = new AbortController();
    // getUser();
    // return () => controller?.abort();
  }, [a]);
  // console.log(`User`, user);

  return (
    <>
      {/* <!-- Start Preloader Area --> */}
      <div class="preloader-area">
        <div class="spinner">
          <div class="inner">
            <div class="disc"></div>
            <div class="disc"></div>
            <div class="disc"></div>
          </div>
        </div>
      </div>
      {/* <!-- End Preloader Area --> */}

      <div class="main-content-wrapper d-flex flex-column">
        <Header />

        <div className="content-page-box-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12">
                <ContentLink />
              </div>
            </div>
            {children}
          </div>
        </div>
        <Rightbar />
      </div>

      <Footer />
    </>
  );
};

export default MainLayout;
