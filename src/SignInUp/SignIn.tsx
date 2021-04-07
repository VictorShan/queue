
import 'firebase/auth'
import { useState } from 'react'
import { useAuth } from "reactfire"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"
import { FormEvent } from 'react'

export default function SignIn() {
    const auth = useAuth()
    const [email, setEmail] = useState<string | undefined>()
    const [password, setPassword] = useState<string | undefined>()
    const [valid, setValid] = useState<boolean>(true)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const formData = new FormData(event.target as HTMLFormElement)
        console.log(formData.get("email"), formData.get("password"))
        auth.signInWithEmailAndPassword(email, password)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    onChange={e => setEmail(e.target.value)}
                    // isInvalid={!email}
                    required />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                    name="password"
                    type="password"
                    placeholder="Enter password"
                    onChange={e => setPassword(e.target.value)}
                    // isInvalid={!password}
                    required />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    )
}