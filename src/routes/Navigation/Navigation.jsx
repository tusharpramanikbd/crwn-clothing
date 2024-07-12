import React from "react";
import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import {
  NavigationContainer,
  LogoContainer,
  NavLinks,
  NavLink,
} from "./Navigation.styles";
import CartIcon from "../../components/CartIcon/CartIcon";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/userSelector";
import { selectCartOpen } from "../../store/cart/cartSelector";
import { signOutStart } from "../../store/user/userAction";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to="/auth">SIGN IN</NavLink>
          )}
          {currentUser && <CartIcon />}
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </>
  );
};

export default Navigation;
