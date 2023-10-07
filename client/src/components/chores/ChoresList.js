import { useEffect, useState } from "react";
import { completeChore, deleteChore, getChores } from "../../managers/choreManager";
import { Button, Table } from "reactstrap";
import ChoreDetails from "./ChoreDetails";
import { Link } from "react-router-dom";

export default function ChoresList ({ loggedInUser }) {
    const [chores, setChores] = useState([]);
    const [detailsOpen, setDetailsOpen] = useState(false);
    const [selectedChoreId, setSelectedChoreId] = useState(null);

    useEffect(() => {
        getChores().then(setChores);
    }, []);

    const handleCompleteChore = (e, choreId) => {
        e.preventDefault();
        // console.log(`Chore id: ${choreId}`)
        // console.log(`User id: ${loggedInUser.id}`)
        completeChore(choreId, loggedInUser.id)
            .then(() => getChores()
            .then(setChores))
    }

    const handleDeleteChore = (e, choreId) => {
        e.preventDefault();
        // console.log(`Delete chore id ${choreId}`);
        deleteChore(choreId).then(() => {
            getChores().then(setChores);
        });
    };

    const toggleDetails = (choreId) => {
        setSelectedChoreId(choreId ? choreId : null);
        setDetailsOpen(!detailsOpen);
    }

    if (!chores) {
        return null;
    }
    return (
        <>
            {loggedInUser.roles.includes("Admin") ? (
            <Link to="/chores/add">Add Chore</Link> ) : "" }
            <Table hover>
                <thead>
                    <tr>
                        <th>Chore</th>
                        <th>Difficulty</th>
                        <th>Frequency</th>
                        <th>Complete</th>
                        {loggedInUser.roles.includes("Admin") ? (<th>Delete</th>) : ""}
                        {loggedInUser.roles.includes("Admin") ? (<th>Details</th>) : ""}
                    </tr>
                </thead>
                <tbody>
                    {chores.map(c => 
                        <tr key={c.id}>
                            <td>{c.name}</td>
                            <td>{c.difficulty} / 5</td>
                            <td>Every {c.choreFrequencyDays} days</td>
                            <td>
                                <Button
                                    color="success"
                                    onClick={(e) => handleCompleteChore(e, c.id)}>
                                    Complete
                                </Button>
                            </td>
                            {loggedInUser.roles.includes("Admin") ? (
                                <td>
                                    <Button
                                        color="danger"
                                        onClick={(e) => handleDeleteChore(e, c.id)}>
                                        Delete Chore
                                    </Button>
                                </td> ) : "" }
                            {loggedInUser.roles.includes("Admin") ? (
                                <td>
                                    <Button
                                        color="info"
                                        onClick={() => toggleDetails(c.id)}>
                                        See details
                                    </Button>
                                </td> ) : ""}
                        </tr>
                    )}
                </tbody>
            </Table>
            <div>
                {detailsOpen ? <ChoreDetails choreId={selectedChoreId}/> : ""}
            </div>
        </>
    )
}