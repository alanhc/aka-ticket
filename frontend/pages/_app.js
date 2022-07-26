import '../styles/globals.css'
import TicektProvider from "../context/index";

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
