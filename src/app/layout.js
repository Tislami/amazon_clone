import '../styles/globals.css'
import Header from "@/components/header";
import {getServerSession} from "next-auth";
import SessionProvider from "@/services/auth/session-provider";
import ReduxProvider from "@/services/redux/redux-provider";


export const metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default async function RootLayout({children}) {
    const session = await getServerSession()

    return (
        <html lang="en">
        <body className={"bg-gray-100"}>
        <ReduxProvider>
            <SessionProvider session={session}>
                <Header/>
                {children}
            </SessionProvider>
        </ReduxProvider>
        </body>
        </html>
    )
}
