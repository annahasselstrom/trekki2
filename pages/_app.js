import '../styles/globals.css'
import LayoutCopy from '../components/LayoutCopy'

// nesting all pages inside the Layout component
function MyApp({ Component, pageProps }) {
  return (
    <LayoutCopy>
      <Component {...pageProps} />
    </LayoutCopy>
  )
}

export default MyApp
