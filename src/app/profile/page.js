"use client"
import {useSelector} from "react-redux";


function ProfilePage() {
    const user = useSelector(state => state.user.user)

    if (user) return (
        (
        <main>
            <h1>{user.name}</h1>
            <h1>{user.email}</h1>
            <img src={user.image} alt=""/>
        </main>
        )
    )
}


export default ProfilePage;