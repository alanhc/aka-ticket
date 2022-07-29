import { SigningType } from "@airgap/beacon-sdk";
import { useState, useContext } from "react";
import Layout from "../../components/Layout";
import ShowQRCode from "../../components/ShowQRCode";
import { TicketContext } from "../../context/ticketContext";
import { getActivateTicket } from "../../tools/network";
import { wallet } from "../../tools/wallet"
import { connectTezosWallet } from "../../tools/wallet"
let details = {
    name: "NFT Ticket #1",
    thumbnailUri: "https://assets.akaswap.com/ipfs/QmVbHWbNXK7nvgQAtoDdkwRhAJBbLmYAK9nRRG2poCqzkq",
    contract: "KT1QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ",
    tokenId: 6797
}

export default function Ticket(props) {
    const { ticket, setTicket } = useContext(TicketContext);
    //details = ticket;
    console.log(ticket)
    const [metadata, setMetadata] = useState({
        contract: "KT1QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ",
        tokenId: -1,
        otp: "otp_test", 
        address: "tz1XqjqZYQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ"
    });
    const [ct, setCt] = useState("1");
    const activateTicket = async() => {
        const res = await wallet.client.requestSignPayload({
            signingType: SigningType.MICHELINE,
            payload: "05010000000833313332333333343335333633373338"
        })
        //edsigta1nVTxyMkdGXvR3LERtHBDEVbFEGoQYuYZT7emhobhqXRBordKoMkBqkVcJCxYtgXmCzMzGS4tNnegw9rYbgfZ8wtdGaJ
        const address = await (await connectTezosWallet()).wallet;
        const contract = ticket.contract;
        const ticketid = ticket.tokenId;
        const cnt = ct;
        console.log("==", address, contract, ticketid, cnt, res.signature)
        const resp = await getActivateTicket(address, contract, ticketid, cnt, res.signature);

        setMetadata({
            otp:resp.data, contract:contract, tokenId:ticketid, address: address
        })
        
        //alert( JSON.stringify(metadata) );
    }
    
    //{JSON.stringify(ticket)} {ct}
    return (
        <Layout>
            {JSON.stringify(metadata)}
            <h1 className="text-3xl font-bold underline"> {ticket.name} </h1>
            <img src={ticket.thumbnailUri} width={500} height={500} />
            <input onChange={e => setCt(e.target.value)} className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0
focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" defaultValue="1" />
            <button className="btn btn-blue" onClick={() => activateTicket()}>activate</button>
            {metadata.otp.length!==32 && metadata.otp !== "otp_test" && <p>{metadata.otp}</p>}
            {metadata.otp.length===32 && metadata.otp !== "otp_test"  &&
                <ShowQRCode {...metadata} />
            }

        </Layout >
    )
}