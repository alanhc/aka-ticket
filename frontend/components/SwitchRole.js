
import {Link} from "../routes"
export default () => {
    return (
        <div>
            <Link route="/verifier">
                <a className="btn">Verifier</a>
            </Link>
            <Link route="/user">
                <a className="btn">User</a>
            </Link>
            <Link route="#">
                <a className="btn">Connect Wallet</a>
            </Link>

        </div>

    )
}
