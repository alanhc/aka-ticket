import Layout from "../components/Layout";

console.log("server:", process.env.SERVER_URL);

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    </Layout>
  )
}