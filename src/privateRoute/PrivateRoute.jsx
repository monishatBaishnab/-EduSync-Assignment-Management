import { Navigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';
import Loading from "../pages/Loading";

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if(loading){
        return <Loading />;
    }
    if(!user){
        return <Navigate to='/signin' state={location?.pathname}></Navigate>;
    }
    return children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
}

export default PrivateRoute;