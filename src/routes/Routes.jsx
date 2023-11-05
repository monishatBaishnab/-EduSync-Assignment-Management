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
                element: <AssignmentDetails />
            },
            {
                path: 'create',
                element: <CreateAssignment />
            },
            {
                path: 'update',
                element: <UpdateAssignment />
            },
            {
                path: 'myAssignment',
                element: <MyAssignment />
            },
            {
                path: 'submited',
                element: <SubmitedAssignment />
            }
        ]
    },
    {
        path: '/signin',
        element: <SignIn />
    },
    {
        path: '/signip',
        element: <SignUp />
    }
]);

export default Routes;