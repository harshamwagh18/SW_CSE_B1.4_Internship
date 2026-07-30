function UserList() {
    const users = [
       {id: 1, name:"harsha",role:"Developer"},
       {id: 2, name:"chittu",role:"Artist"},
       {id: 3, name:"hemi",role:"Farmer"},
       {id: 4, name:"gagana",role:"Developer"},
    ];
    return(
        <div className="list-box">
            <h3>User List</h3>
            <ul>
                {/* map() */}
                {users.map((user)=>(
                    <li key={user.id}>
                        {user.name}, is a {user.role}
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default UserList;