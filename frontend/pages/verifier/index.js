import Layout from "../../components/Layout";
import ReadQRCode from "../../components/ReadQRCode";
export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
       verifier
      </h1>
      <ReadQRCode />
    </Layout>
  )
}