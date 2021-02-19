import React, { useRef, useState } from 'react'
import "../css/ContactPage.css"
import {
    Typography, TextField, Button,
    Dialog, DialogTitle, DialogContent, DialogActions
} from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

import { db, getTimestamp } from "../firebase"

const CustomColorTypography = withStyles({
    root: {
        color: "#414141"
    }
})(Typography)

function ContactPage() {
    const formRef = useRef()
    const [message, setMessage] = useState(false)

    const handleFormSubmit = (e) => {
        e.preventDefault()

        const message = {
            name: formRef.current.name.value,
            email: formRef.current.email.value,
            text: formRef.current.text.value,
            timestamp: getTimestamp()
        }
        console.log(message)
        db.collection('messages').add(message)
            .then(() => {
                setMessage(`Thank you ${message.name}, your Message is Received I'll get back to you as soon as I can.`)
                formRef.current.reset()
            })
            .catch(error => console.log(error.message))
    }

    const handleClose = () => setMessage(false)

    return (
        <div className="contact" >
            <div className="contact__wrapper">
                <CustomColorTypography variant="h4"> Get in touch </CustomColorTypography>

                <form onSubmit={handleFormSubmit} ref={formRef} className="contact__form" autoComplete="off">
                    <Typography color="textPrimary" variant="body1"> Whether you're interested in working on a project together or just want to say hello, feel free to leave a Message and I'll get back to you as soon as I can! </Typography>
                    <div className="contact__formGroup">
                        <TextField name="name" fullWidth label="Name" required />
                    </div>
                    <div className="contact__formGroup">
                        <TextField name="email" fullWidth label="Email" type="email" required />
                    </div>
                    <div className="contact__formGroup">
                        <TextField name="text" fullWidth label="Message" multiline rows={6} required />
                    </div>
                    <Button variant="contained" type="submit" color="secondary" fullWidth>Send</Button>
                </form>

                <div>
                    <Button target="_blank" href="https://github.com/mani-barathi" variant="contained"
                        startIcon={<GitHubIcon />} color="default">
                        GitHub
                    </Button>
                    &nbsp; &nbsp; &nbsp;
                    <Button target="_blank" href="https://www.linkedin.com/in/mani-bharathi-08/" variant="contained"
                        startIcon={<LinkedInIcon />} color="primary">
                        LinkedIn
                    </Button>
                </div>

            </div>

            { message &&
                <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={Boolean(message)}>
                    <DialogTitle id="simple-dialog-title">Message Sent</DialogTitle>
                    <DialogContent>
                        <Typography> {message} </Typography>
                    </DialogContent>
                    <DialogActions>
                        <Button variant="contained" color="secondary" onClick={handleClose}>Ok</Button>
                    </DialogActions>
                </Dialog>
            }

        </div >
    )
}

export default ContactPage
