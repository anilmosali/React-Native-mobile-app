import React from "react";
import { useSelector } from "react-redux";

import AuthNavigator from ".//AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";
import SingUpStackNavigator from "./SingUpStackNavigator";

const MainNavigator = () => {
  const { isLoggedIn, skipFamilyAndFriendsScreenFlag } = useSelector(
    (state) => state.auth
  );
  console.log(isLoggedIn);

  return isLoggedIn ? (
    skipFamilyAndFriendsScreenFlag ? (
      <DrawerNavigator />
    ) : (
      <SingUpStackNavigator />
    )
  ) : (
    <AuthNavigator />
  );
};

export default MainNavigator;
