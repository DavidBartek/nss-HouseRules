import { useEffect, useState } from "react";
import { assignChore, getChoreDetails, unassignChore } from "../../managers/choreManager";
import { getUserProfiles } from "../../managers/userProfileManager";
import { FormGroup, Input, Label } from "reactstrap";

export default function ChoreDetails ({ loggedInUser, choreId }) {
    const [chore, setChore] = useState({});
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUserProfiles().then(setUsers);
        getChoreDetails(choreId).then(setChore);
    }, [choreId]);

// frustratingly, the below helper function (at .find) sometimes breaks the app saying that
// it cannot "find" undefined. This is React being annoying, and the best way to work around
// this annoyance would probably be to modify the getChoreDetails API endpoint to just
// .Include the User's details. But this was not asked for per requirements, and it's too late.

    // j

    const datePart = (dateString) => {
        return dateString.split("T")[0];
    }
    
    const handleAssign = (e, userId) => {
        e.preventDefault();
        assignChore(choreId, userId)
            .then(() => getChoreDetails(choreId).then(setChore));
    }

    const handleUnassign = (e, userId) => {
        e.preventDefault();
        unassignChore(choreId, userId)
            .then(() => getChoreDetails(choreId).then(setChore));
    }

    if (!chore || !users) {
        return null;
    }
    return (
    <>
        <h2>
        Chore: {chore.name} (Difficulty: {chore.difficulty})
        </h2>
        <div>
        To be completed every {chore.choreFrequencyDays} days
        </div>
        <div>
        Current Assignments...
        {/* {chore.choreAssignments?.map(ca => 
            ca ? userIdToName(ca.userProfileId) + " // " : "none"
        )} */}
        {users.map(u =>
            chore.choreAssignments?.find(ca => ca.userProfileId === u.id) ? (
            <FormGroup check inline key={u.id}>
                <Input checked type="checkbox" onChange={(e) => handleUnassign(e, u.id)}/>
                <Label check>{u.firstName} {u.lastName}</Label>      
            </FormGroup>
            ) : (
            <FormGroup check inline key={u.id}>
                <Input type="checkbox" onChange={(e) => handleAssign(e, u.id)}/>
                <Label check>{u.firstName} {u.lastName}</Label>      
            </FormGroup>
            )
        )}
    
        </div>
        <div>
        Current Completions...
        {chore.choreCompletions?.map(cc =>
            cc ? cc.userProfileId + " on " + datePart(cc.completedOn) + " // " : "none"
        )}
        </div>

    </>
    )
}