import 'firebase/auth'
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button'
import Dropdown from 'react-bootstrap/Dropdown'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { useAuth, useUser } from 'reactfire'

export default function AccountArea() {
    const { data: user } = useUser()
    const auth = useAuth()
    const router = useRouter()
    if (user) {
        const name = user.displayName || user.email
        return (
            <>
            <Dropdown>
                <Dropdown.Toggle variant="outline-dark">
                    {`Hi, ${name} `}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {/* <Dropdown.Item>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Dropdown.Item> */}
                    <Dropdown.Item onClick={() => router.push("/account")}>
                        Account
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item onClick={() => auth.signOut()}>
                        Sign out
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            </>
        )
    } else {
        return (
            <Button variant="outline-dark" onClick={() => router.push('/signIn')}>
                Sign In
            </Button>
        )
    }
}