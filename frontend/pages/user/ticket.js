import Layout from "../../components/Layout";
import ShowQRCode from "../../components/ShowQRCode";

const details = {
    name:"NFT Ticket #1",
    thumbnailUri:"https://assets.akaswap.com/ipfs/QmVbHWbNXK7nvgQAtoDdkwRhAJBbLmYAK9nRRG2poCqzkq",
    contract:"KT1AFq5XorPduoYyWxs5gEyrFK6fVjJVbtCj",
    tokenId:6797
}
const value= {
    contract:"KT1AFq5XorPduoYyWxs5gEyrFK6fVjJVbtCj",
    tokenId:99999,
    otp:"DcU6FOeW2BobmJawe892E1tQ0s4YoCVCFDPwJVAYqZdevUg1n1DG4nQYlcwIMOoBqxcmNjKlMcPxXK2hg+lMX+A5HPyl6X3eZIG7eHYBFRBxWrDLiIXfhRBLXQZPsIvcKlsQgSoq5OORJiqqFVBcSIm02QRZ/Vj9nUnJJfGpONg="
}
export default function Ticket(props) {
    let detail = details

    return (
        <Layout>
            <h1 className="text-3xl font-bold underline"> {detail.name} </h1>
            <button className="btn btn-blue">activate</button>
            <ShowQRCode {...value}/>
        </Layout >
    )
}