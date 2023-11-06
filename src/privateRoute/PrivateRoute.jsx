import { Navigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {
    const {user, loading} = useAuth();
    const location = useLocation();
    if(loading){
        return;
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