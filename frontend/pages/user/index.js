import Layout from "../../components/Layout";
import CollectionRow from "../../components/CollectionRow";
const test_collections = [
  { name: "NFT Ticket #1", thumbnailUri: "https://assets.akaswap.com/ipfs/QmVbHWbNXK7nvgQAtoDdkwRhAJBbLmYAK9nRRG2poCqzkq", contract: "KT1AFq5XorPduoYyWxs5gEyrFK6fVjJVbtCj", tokenId: 6797 },
  { name: "NFT Ticket #2", thumbnailUri: "https://assets.akaswap.com/ipfs/QmfMkf4QU22DEW7at8DJJJUd86byQXnwDiMe3wiCmPrZLK", contract: "KT1AFq5XorPduoYyWxs5gEyrFK6fVjJVbtCj", tokenId: 6798 }
]

export default function UserHome() {
  const items = test_collections
  function generateQRCode() {

  }
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        user
      </h1>
      {items.map(item =>
        <CollectionRow {...item} onclick={this.generateQRCode}/>
      )
      }
    </Layout >
  )
}