import '../styles/globals.css'
import TicektProvider from "../context/ticketContext";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <TicektProvider>
        <Component {...pageProps} />
      </TicektProvider>
    </div>

  )
}

export default MyApp
