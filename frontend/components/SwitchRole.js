
import { Link } from "../routes"
import { useEffect, useState } from "react";
import {
    connectTezosWallet,
    getActiveTezosAccount,
    disconnectTezosWallet,
} from "../tools/wallet";

export default function SwitchRole(props) {
    const [tezosWallet, setTezosWallet] = useState(null);
    const handleConnectTezosWallet = async () => {
        
        
        const { success,wallet } = await connectTezosWallet();
        console.log("connecting..",wallet,success)
        setTezosWallet(wallet);
    };
    const handleDisconnectTezosWallet = async () => {
        const { success, wallet } = await disconnectTezosWallet();
        console.log("disconnect..", wallet, success)
        setTezosWallet(wallet);
    };
    return (
        <div>
            <Link route="/verifier">
                <a className="btn">Verifier</a>
            </Link>
            <Link route="/user">
                <a className="btn">User</a>
            </Link>
            <Link route="#">
                <a className="btn" onClick={tezosWallet ? handleDisconnectTezosWallet : handleConnectTezosWallet}>
                    {tezosWallet
                        ? tezosWallet.slice(0, 4) +
                        "..." +
                        tezosWallet.slice(tezosWallet.length - 4, tezosWallet.length)
                        : "Connect wallet"}
                </a>
            </Link>

        </div>

    )
}
