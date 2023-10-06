import { useEffect, useState } from "react";
import { getUserProfiles } from "../../managers/userProfileManager";
import { Button, Table } from "reactstrap";
import { useNavigate } from "react-router-dom";

export default function UserProfileList({ loggedInUser }) {
    const [usersWithRoles, setUsersWithRoles] = useState([]); 
    const navigate = useNavigate();

    useEffect(() => {
        getUserProfiles().then(setUsersWithRoles);
    }, []);
    
    const navToDetails = (id) => {
        console.log(id);
        navigate(`${id}`);

    }

    if (!usersWithRoles) {
        return null;
    }
    return (
        <>
            <h2>Users</h2>
            <Table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {usersWithRoles.map(u => (
                        <tr key={u.id}>
                            <th scope="row">{`${u.firstName} ${u.lastName}`}</th>
                            <td>{`${u.address}`}</td>
                            <td>{`${u.email}`}</td>
                            <td>{`${u.userName}`}</td>
                            <td>
                                {u.roles.map(r => (
                                    r
                                ))}
                            </td>
                            <td>
                                <Button
                                    color="info"
                                    onClick={() => {
                                        navToDetails(u.id);
                                    }}
                                >
                                    See Details
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    )
}