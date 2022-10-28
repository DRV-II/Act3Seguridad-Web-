import { useState } from "react";
import { Link } from "react-router-dom";

function User({user}){
    const [active, setActive] = useState(user.is_active)
    function clickEvent(e){
        setActive(!active);
    }
    return(
        <a href="#" className={"list-group-item list-group-item-action"+(active ? "active" : "")} aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{user.name}</h5>
                <small>{active ? "Active" : "Inactive"}</small>
            </div>
            <p className="mb-1">{user.email}</p>
            <button onClick={clickEvent} type="button" 
            className={active ? "btn btn-primary" : "btn btn-outline-primary"}>
                {active ? "Deactivate" : "Activate"}
            </button>
        </a>
    )
}

function UserList({ users }){
    return <div className="list-group">
        {users.map((user) => <User user={user} key={user.name}></User>)}
    </div>
}

const userList = [
    {
        name: "Edgar",
        is_active: false,
        email: "edgar@tec.mx"
    },
    {
        name: "SoyHumano",
        is_active: false,
        email: "soyhumano@tec.mx"
    },
    {
        name: "Paulina",
        is_active: false,
        email: "paulina@tec.mx"
    }
]

function UserPage(){
    return(
        <>
            <h1>User List</h1>
            <UserList users={userList}></UserList>
            <Link to="/">
                <button type="button" className="btn btn-primary">Return to Home</button>
            </Link>
        </>
    );
}

export default UserPage;
/*
import { useState } from "react";
import { Link } from "react";

function User({user}) {
    const [active, setActive] = useState(user.is_active)

    function clickEvent(e) {
        setActive(!active);
    }
    return (
        <a href="#" className={"list-group-item list-group-item-action " + (active ? "active" : "")} aria-current="true">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{user.name}</h5>
                <small>{active ? "Active" : "Inactive"}</small>
            </div>
            <p className="mb-l">{user.email}</p>
            <button onClick={clickEvent} type="button"
                className={active ? "btn btn-primary" : "btn btn-outline-primary"}>
                    {activate ? "Deactivate" : "Activate"}
            </button>
        </a>
    )
}

function UserList({ users }) {
    return <div className="list-group">
        {users.map((user) => <User user={user} key={user.name}></User>)}
    </div>
}

const userList = [
    {
        name: "Edgar",
        is_active: false,
        email: "edgar@tec.mx"
    },
    {
        name: "SoyHumano",
        is_active: false,
        email: "soyhumano@tec.mx"
    },
    {
        name: "Paulina",
        is_active: false,
        email: "paulina@tec.mx"
    }
]

function UserPage() {
    return (
        <>
            <h1>User List</h1>
            <UserList users={userList}></UserList>
            <Link to="/">
                <button type="button" className="btn btn-primary">Return to Home</button>
            </Link>
        </>
    )
}

export default UserPage;
*/