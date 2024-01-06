import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import UpdateAssignmentForm from "../../layouts/updateAssigmentForm/updateAssigmentForm";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UpdateAssignment = () => {
    const [assignment, setAssignment] = useState({});
    const { id } = useParams();
    const axios = useAxiosSecure();
    const { user } = useAuth();
    

    useEffect(() => {
        axios.get(`/assignments/${id}?email=${user.email}`)
            .then(res => setAssignment(res?.data));
    }, [axios, id, user.email])
    return (
        <div>
            <UpdateAssignmentForm assignment={assignment} />
        </div>
    );
};

export default UpdateAssignment;