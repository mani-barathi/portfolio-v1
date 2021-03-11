import React, { useState, useEffect } from 'react'
import "../css/AdminPage.css"
import AdminLogin from '../components/AdminLogin'

import { Typography, Button, IconButton } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"

import { auth, db } from "../firebase"

function AdminPage() {
    const [admin, setAdmin] = useState(null)
    const [messages, setMessages] = useState([])

    useEffect(() => {
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
    }, [])


    const handleAdminLogout = () => {
        auth.signOut()
            .then(() => setAdmin(null))
            .catch((error) => alert(error.message))
    }


    const deleteMessage = (messageId) => {
        if (window.confirm('Do You want to Delete this Message?'))
            db.collection('messages').doc(messageId).delete()
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
                        /*---- Message ----*/
                        <div key={message.id} className="adminpage__message">
                            <div className="adminpage__messageHeader">
                                <div>
                                    <Typography variant="h6" >{message.data.name}</Typography>
                                    <Typography variant="subtitle2">{message.data.email}</Typography>
                                </div>
                                <IconButton color="secondary" onClick={() => deleteMessage(message.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </div>
                            <Typography variant="subtitle1">{message.data.text}</Typography>
                            <Typography variant="caption" display="block" align="right">
                                {message.data.timestamp.toDate().toDateString()}
                            </Typography>

                        </div>
                    ))}

                </div>

            </div>
        </div>
    )
}

export default AdminPage
