import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import AssignmentDetails from "../pages/AssignmentDetails/AssignmentDetails";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import UpdateAssignment from "../pages/UpdateAssignment/UpdateAssignment";
import MyAssignment from "../pages/MyAssignment/MyAssignment";
import SubmitedAssignment from "../pages/SubmitedAssignment/SubmitedAssignment";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import Assignments from "../pages/Assignments/Assignments";
import PrivateRoute from "../privateRoute/PrivateRoute";
import SubmitedAssignmentDetails from "../pages/SubmitedAssignmentDetails/SubmitedAssignmentDetails";

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'assignments',
                element: <Assignments />
            },
            {
                path: 'details/:id',
                element: <PrivateRoute><AssignmentDetails /></PrivateRoute>
            },
            {
                path: 'create',
                element: <PrivateRoute><CreateAssignment /></PrivateRoute>
            },
            {
                path: 'update/:id',
                element: <PrivateRoute><UpdateAssignment /></PrivateRoute>
            },
            {
                path: 'myAssignment',
                element: <PrivateRoute><MyAssignment /></PrivateRoute>
            },
            {
                path: 'submited',
                element: <PrivateRoute><SubmitedAssignment /></PrivateRoute>
            },
            {
                path: 'submitedDetails/:id',
                element: <PrivateRoute><SubmitedAssignmentDetails /></PrivateRoute>
            }
        ]
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/signup',
        element: <SignUp />
    }
]);

export default Routes;