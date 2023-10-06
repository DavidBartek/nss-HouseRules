import { Route, Routes } from "react-router-dom";
import { AuthorizedRoute } from "./auth/AuthorizedRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./home/Home";
import UserProfileList from "./userProfiles/UserProfileList";
import UserProfileDetails from "./userProfiles/UserProfileDetails";
import ChoresList from "./chores/ChoresList";
import ChoreDetails from "./chores/ChoreDetails";
import CreateChore from "./chores/CreateChore";

export default function ApplicationViews({ loggedInUser, setLoggedInUser }) {
  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <Home />
            </AuthorizedRoute>
          }
        />
        <Route path="userprofiles">
          <Route index element={
            // viewing this route requires admin privileges
            <AuthorizedRoute roles={["Admin"]} loggedInUser={loggedInUser}>
              <UserProfileList />
            </AuthorizedRoute>
          } />
            <Route path=":id" element={
              <AuthorizedRoute roles={["Admin"]} loggedInUser={loggedInUser}>
                <UserProfileDetails />
              </AuthorizedRoute>
          } />
        </Route>
        <Route path="chores">
          <Route index element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
              <ChoresList loggedInUser={loggedInUser} />
            </AuthorizedRoute>
          } />
            <Route path=":id" element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <ChoreDetails roles={["Admin"]} loggedInUser={loggedInUser} />
              </AuthorizedRoute>
          } />
            <Route path="add" element={
              <AuthorizedRoute loggedInUser={loggedInUser}>
                <CreateChore roles={["Admin"]} loggedInUser={loggedInUser} />
              </AuthorizedRoute>
          } />
        </Route>
        <Route
          path="login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="register"
          element={<Register setLoggedInUser={setLoggedInUser} />}
        />
      </Route>
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  );
}
