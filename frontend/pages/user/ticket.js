import Layout from "../../components/Layout";
import QRCode from "react-qr-code";
const details = {
    name:"NFT Ticket #1",
    thumbnailUri:"https://assets.akaswap.com/ipfs/QmVbHWbNXK7nvgQAtoDdkwRhAJBbLmYAK9nRRG2poCqzkq",
    contract:"KT1AFq5XorPduoYyWxs5gEyrFK6fVjJVbtCj",
    tokenId:6797
}
const value=""
export default function Ticket(props) {
    let detail = details

    return (
        <Layout>
            <h1 className="text-3xl font-bold underline"> {detail.name} </h1>
            <button className="btn btn-blue">activate</button>
            <div style={{ height: "auto", margin: "0 auto", maxWidth: 64, width: "100%" }}>
                <QRCode
                size={256}
                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                value={value}
                viewBox={`0 0 256 256`}
                />
            </div>
        </Layout >
    )
}