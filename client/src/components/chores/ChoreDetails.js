import { useEffect, useState } from "react";
import { getChoreDetails } from "../../managers/choreManager";

export default function ChoreDetails ({ loggedInUser, choreId }) {
    const [chore, setChore] = useState({});

    useEffect(() => {
        getChoreDetails(choreId).then(setChore);
    }, [choreId]);
    
    if (!chore) {
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
        Current Assignments: 
        {chore.choreAssignments?.map(ca => 
            ca ? "user " + ca.userProfileId + " " : "none"
        )}
        </div>
        <div>
        Current Completions: 
        {chore.choreCompletions?.map(cc =>
            cc ? "user " + cc.userProfileId + " " : "none"
        )}
        </div>

    </>
    )
}