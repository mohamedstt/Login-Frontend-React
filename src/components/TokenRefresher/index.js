import { connect } from "react-redux";
import { getToken } from "../../helpers/account";
import { getTokenExpires } from "../../helpers/jwt";
import { getFreshToken } from "../../actions/AccountActions";
import { useEffect } from "react";
const TRESHOLD = 30;

const TokenRefresher = ({ getFreshToken }) => {
  const calculate = () => {
    const token = getToken();
    const expires = getTokenExpires(token);
    const secondsToExpire = expires - Date.now() / 1000;

    return secondsToExpire;
  };

  useEffect(() => {
    getFreshToken();
    const secondsToExpire = calculate() - TRESHOLD;
    const id = setTimeout(getFreshToken, secondsToExpire * 1000);
    return () => clearTimeout(id);
  }, [getFreshToken]);
  return null;
};

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { getFreshToken })(TokenRefresher);
