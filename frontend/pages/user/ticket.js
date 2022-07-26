import { useState, useContext } from "react";
import Layout from "../../components/Layout";
import ShowQRCode from "../../components/ShowQRCode";
import { TicketContext } from "../../context/index";
let details = {
    name:"NFT Ticket #1",
    thumbnailUri:"https://assets.akaswap.com/ipfs/QmVbHWbNXK7nvgQAtoDdkwRhAJBbLmYAK9nRRG2poCqzkq",
    contract:"KT1QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ",
    tokenId:6797
}

export default function Ticket(props) {
    const { ticket, setTicket } = useContext(TicketContext);
    //details = ticket;
    console.log(ticket)
    const [ metadata, setMetadata ] = useState({
        contract: "KT1QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ",
        tokenId: 2,
        otp: "otp_test"
    });

    return (
        <Layout>
            <h1 className="text-3xl font-bold underline"> {ticket.name} </h1>
            <img src={ticket.thumbnailUri} width={500} height={500}/> 
            <button className="btn btn-blue">activate</button>
            { (metadata.tokenId!==-1)?
                <ShowQRCode {...metadata}/>:<div></div>
            }
        </Layout >
    )
}