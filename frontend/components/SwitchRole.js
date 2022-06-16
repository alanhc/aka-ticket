
import {Link} from "../routes"
export default () => {
    return (
        <div>
            <Link route="/verifier">
                <a className="text-blue-500">Verifier</a>
            </Link>
            <Link route="/user">
                <a className="text-blue-500">User</a>
            </Link>
            <Link route="#">
                <a className="text-blue-500">Connect Wallet</a>
            </Link>

        </div>

    )
}
