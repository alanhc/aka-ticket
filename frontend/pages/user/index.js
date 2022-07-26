import Layout from "../../components/Layout";
import CollectionRow from "../../components/CollectionRow";
import { getCollections } from "../../tools/network";
import { useEffect, useState } from "react";

const test_collections = [
  { name: "NFT Ticket #1", thumbnailUri: "https://assets.akaswap.com/ipfs/QmVbHWbNXK7nvgQAtoDdkwRhAJBbLmYAK9nRRG2poCqzkq", contract: "KT1AFq5XorPduoYyWxs5gEyrFK6fVjJVbtCj", tokenId: 6797 },
  { name: "NFT Ticket #2", thumbnailUri: "https://assets.akaswap.com/ipfs/QmfMkf4QU22DEW7at8DJJJUd86byQXnwDiMe3wiCmPrZLK", contract: "KT1AFq5XorPduoYyWxs5gEyrFK6fVjJVbtCj", tokenId: 6798 }
]

export default function UserHome() {

  const [collections, setCollections] = useState([]);
  useEffect(() => {
    const fetchCollections = async () => {
      const _tokens = await getCollections("tz1hHamH4QRSqA8NbzE8gE4ecP6QExoLJw6J");
      
      setCollections(_tokens);
    }
    fetchCollections();
    
  }, []);


  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        user
      </h1>
      {collections.map(token_metadata =>
        <CollectionRow {...token_metadata} key={token_metadata.id}/>
      )}

    </Layout >
  )
}