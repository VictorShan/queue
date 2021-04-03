import { useFirebaseApp } from "reactfire";


export default function Test() {
    const app = useFirebaseApp()
    return (
        <p>{app.name}</p>
    )
}