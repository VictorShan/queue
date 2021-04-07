import 'firebase/auth'
import { useRouter } from 'next/router'
import Button from 'react-bootstrap/Button'
import { useAuth, useUser } from 'reactfire'

export default function AccountArea() {
    const { data: user } = useUser()
    const auth = useAuth()
    const router = useRouter()
    if (user) {
        return (
            <Button onClick={() => auth.signOut()}>Sign Out</Button>
        )
    } else {
        return (
            <Button onClick={() => router.push('/signIn')}>Sign In</Button>
        )
    }
}