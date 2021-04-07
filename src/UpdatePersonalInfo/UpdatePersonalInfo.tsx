import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import FormLabel from 'react-bootstrap/FormLabel'
import Button from 'react-bootstrap/Button'
import styles from './UpdatePersonalInfo.module.scss'

export default function UpdatePersonalInfo() {
    return (
        <div className={styles.container}>
            <h3 className={styles.title}>Update Personal Information</h3>
            <Form>
                <Form.Row>
                    <Form.Group as={Col}>
                        <FormLabel>First Name</FormLabel>
                        <FormControl
                            name="firstName"
                            type="text"
                            placeholder="First name"/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl
                            name="lastName"
                            type="text"
                            placeholder="Last name"/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <FormLabel>Username</FormLabel>
                        <FormControl
                            name="username"
                            type="text"
                            placeholder="ex. pandaMan"/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <FormLabel>Email</FormLabel>
                        <FormControl
                            name="email"
                            type="email"
                            placeholder="ex. pandas@moon.com"
                            required/>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col}>
                        <FormLabel>Password</FormLabel>
                        <FormControl
                            name="password"
                            type="password"
                            required/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <FormLabel>Submit changes?</FormLabel>
                        <FormControl
                            as={Button}
                            variant="outline-success">
                            Submit
                        </FormControl>
                    </Form.Group>
                </Form.Row>
            </Form>
        </div>
    )
}