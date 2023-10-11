"use client"
import {signIn,signOut,useSession} from "next-auth/react";

function AuthSection( ) {
    const {data: session} = useSession()


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