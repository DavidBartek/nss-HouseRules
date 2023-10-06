import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getUserProfileDetails } from "../../managers/userProfileManager";
import { Table } from "reactstrap";

export default function UserProfileDetails ( {loggedInUser} ) {
    const params = useParams();
    const id = params.id;
    const [userDetails, setUserDetails] = useState({});
    
    useEffect(() => {
        getUserProfileDetails(id).then(setUserDetails);
    }, [])
    
    if (!userDetails) {
        return null;
    }
    return (
        <Table hover>
            <thead>
                <tr>
                    <th>{userDetails.firstName} {userDetails.lastName}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Address: {userDetails.address}</td>
                </tr>
                <tr>
                    <td>Chores Assigned: {userDetails.choreAssignments ? (userDetails.choreAssignments.map(ca => ca.chore.name + " ")) : ""}</td>
                </tr>
                <tr>
                    <td>Chores Completed: {userDetails.choreCompletions ? (userDetails.choreCompletions.map(ca => ca.chore.name + ` (completed on ${ca.completedOn}) `)) : ""}</td>
                </tr>
            </tbody>
        </Table>
    )
}