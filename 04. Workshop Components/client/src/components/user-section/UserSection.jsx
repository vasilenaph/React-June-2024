import { useEffect, useState } from 'react';
import Search from '../search/Search'
import Pagination from '../pagination/Pagination';
import UserList from './user-list/UserList';
import UserAdd from './user-add/UserAdd';
import UserDetails from './user-details/UserDetails';
import UserDelete from './user-delete/UserDelete';

const baseUrl = 'http://localhost:3030/jsonstore';

export default function UserSection(props) {
    const [users, setUsers] = useState([]);
    const [showAddUser, setShowAddUser] = useState(false);
    const [showUserDetailsById, setUserDetailsById] = useState(null);
    const [showUserDeleteById, setShowUserDeleteById] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        (async function getUsers() {

            try {
                const response = await fetch(`${baseUrl}/users`);
                const result = await response.json();
                const usersResult = Object.values(result);

                setUsers(usersResult);
            } catch (error) {
                alert(error.message);
            } finally {
                setIsLoading(false);
            }
        })();
    }, []);

    const addUserClickHandler = () => {
        setShowAddUser(true);
    }

    const addUserCloseHandler = () => {
        setShowAddUser(false);
    }

    const addUserSave = async (e) => {
        // prevent refresh
        e.preventDefault();

        // get user data
        const formData = new FormData(e.currentTarget);
        const userData = {
            ...Object.fromEntries(formData),
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
        };

        // make post request
        const response = await fetch(`${baseUrl}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData),
        });

        const createdUser = await response.json();

        // update local state
        setUsers(oldUsers => [...oldUsers, createdUser]);

        // close modal
        setShowAddUser(false);
    }

    const userDetailsClickhandler = (userId) => {
        setUserDetailsById(userId);
    }

    const userDeleteClickHandler = (userId) => {
        setShowUserDeleteById(userId);
    }

    const userDeleteHandler = async (userId) => {
        // Delete request to server
        const response = await fetch(`${baseUrl}/users/${userId}`, {
            method: 'DELETE',
        });

        // Delete from local state
        setUsers(oldUsers => oldUsers.filter(user => user._id !== userId))

        // Close modal
        setShowUserDeleteById(null);
    }

    return (
        <section className="card users-container">

            <Search />

            <UserList
                users={users}
                isLoading={isLoading}
                onUserDetailsClick={userDetailsClickhandler}
                onUserDeleteClick={userDeleteClickHandler}
            />

            {showAddUser && (
                <UserAdd
                    onClose={addUserCloseHandler}
                    onSave={addUserSave}
                />
            )}

            {showUserDetailsById && (
                <UserDetails
                    user={users.find(user => user._id === showUserDetailsById)}
                    onClose={() => setUserDetailsById(null)}
                />
            )}

            {showUserDeleteById && (
                <UserDelete
                    onClose={() => setShowUserDeleteById(null)}
                    onUserDelete={() => userDeleteHandler(showUserDeleteById)}
                />
            )}

            <button className="btn-add btn" onClick={addUserClickHandler}>Add new user</button>

            <Pagination />
        </section >
    );
}