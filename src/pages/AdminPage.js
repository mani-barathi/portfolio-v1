import React, { useState, useEffect } from 'react'
import "../css/AdminPage.css"
import AdminLogin from '../components/AdminLogin'
import AdminMessage from '../components/AdminMessage'

import { Typography, Button } from "@material-ui/core"

import { auth, db } from "../firebase"

function AdminPage() {
    const [admin, setAdmin] = useState(null)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        if (!admin) return

        const unsubscribe = db.collection('messages').orderBy('timestamp', 'desc')
            .onSnapshot(snapshot => {
                setMessages(
                    snapshot.docs.map(doc => ({
                        id: doc.id,
                        data: doc.data()
                    }))
                )
            })
        return unsubscribe
    }, [admin])


    const handleAdminLogout = () => {
        auth.signOut()
            .then(() => setAdmin(null))
            .catch((error) => alert(error.message))
    }

    if (!admin)
        return <AdminLogin setAdmin={setAdmin} />

    return (
        <div className="adminpage">
            <div className="adminpage__wrapper">
                <div className="adminpage__header">
                    <Typography variant="h4">Admin Page</Typography>
                    <Button color="secondary" onClick={handleAdminLogout} >Logout</Button>
                </div>

                <div className="adminpage__messages">
                    <Typography variant="h5">Messages</Typography>

                    {messages.map(message => (
                        <AdminMessage key={message.id} id={message.id} data={message.data} />
                    ))}

                </div>

            </div>
        </div>
    )
}

export default AdminPage
