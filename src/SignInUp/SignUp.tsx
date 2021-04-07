import 'firebase/auth'
import { useAuth } from "reactfire"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { FormEvent } from 'react'

// https://firebase.google.com/docs/auth/web/email-link-auth
export default function SignUp() {
    const auth = useAuth()
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        console.log(formData.get("email"), formData.get("password"))
        auth.createUserWithEmailAndPassword(
            formData.get("email") as string,
            formData.get("password") as string)
            .catch(console.error)
    }
    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Enter password" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                    name="passwordConfirm"
                    type="password"
                    placeholder="Enter password" />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    )
}