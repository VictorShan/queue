import 'firebase/auth'
import { useAuth } from "reactfire"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button"

export default function SignUp() {

    return (
        <Form>
            <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Form.Group>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
            </Form.Group>
            <Button type="submit">Submit</Button>
        </Form>
    )
}