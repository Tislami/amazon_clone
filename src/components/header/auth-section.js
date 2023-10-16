"use client"
import {signIn,signOut,useSession} from "next-auth/react";
import {login, logout} from "@/services/redux/features/userSlice";
import {addToBasket} from "@/services/redux/features/basketSlice";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";


function AuthSection( ) {
    const {data: session} = useSession()
    const dispatch = useDispatch();

    useEffect(() => {
        if (session?.user) {
            dispatch(login(session.user));
        }
        else {dispatch(logout());}
    }, [session]);

    if (session) {
        return <div
            onClick={signOut}
            className={"link"} >
            <p >Hello, {session?.user?.name}</p >
            <p className={"font-extrabold md:text-sm"} >Account & Lists</p >
        </div >
    }

    return <div
        onClick={signIn}
        className={"link text-center"} >
        <p className={"font-bold text-lg"}>Sign In</p >
    </div >

}



export default AuthSection