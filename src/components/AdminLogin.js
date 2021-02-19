import React, { useRef, useEffect } from 'react'
import { TextField, Button, Typography } from "@material-ui/core"
import { auth } from "../firebase"

function AdminLogin({ setAdmin }) {
    const formRef = useRef()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser)
                setAdmin({ email: authUser.email })
        })
        return unsubscribe
    }, [setAdmin])

    const handleAdminLogin = (e) => {
        e.preventDefault()
        const email = formRef.current.email.value
        const password = formRef.current.password.value
        auth.signInWithEmailAndPassword(email, password)
            .catch(error => alert(error.message))

    }

    return (
        <div style={styles.adminlogin}>
            <form onSubmit={handleAdminLogin} ref={formRef} style={styles.adminlogin__form} autoComplete="off">
                <Typography variant="h5" align="center"> Admin Login </Typography>

                <TextField name="email" type="email" label="Email" required fullWidth />
                <br />
                <TextField name="password" type="password" label="Password" required fullWidth />
                <br />
                <Button type="submit" variant="contained" color="secondary">Sign In</Button>
            </form>
        </div>
    )
}

const styles = {
    adminlogin: {
        width: "100%",
        flex: "1",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    adminlogin__form: {
        width: "95%",
        maxWidth: "420px",
        display: "flex",
        flexDirection: "column",
        padding: "1rem 0.7rem",
        border: "1px solid lightgrey",
        borderRadius: "5px",
        boxShadow: "0px 5px 15px 0px rgba(50, 50, 50, 0.3)"
    }
}

export default AdminLogin
