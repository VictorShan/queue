import Tab from "react-bootstrap/Tab"
import Tabs from "react-bootstrap/Tabs"
import SignIn from "./SignIn"
import SignUp from "./SignUp"

export default function SignInUp() {
    return (
        <Tabs>
            <Tab eventKey="signIn" title="Sign In">
                <SignIn />
            </Tab>
            <Tab eventKey="signUp" title="Sign Up">
                <SignUp />
            </Tab>
        </Tabs>
    )
}