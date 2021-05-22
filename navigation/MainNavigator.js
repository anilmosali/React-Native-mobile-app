import React from "react";
import { useSelector } from "react-redux";

import AuthNavigator from ".//AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";

const MainNavigator = () => {
  const isAuthorizedFlag = useSelector((state) => state.auth.isLoggedIn);
  console.log(isAuthorizedFlag);

  return isAuthorizedFlag ? <DrawerNavigator /> : <AuthNavigator />;
};

export default MainNavigator;
