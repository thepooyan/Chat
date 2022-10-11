import '../styles/globals.scss'
import LayoutDefault from '../layouts/LayoutDefault';
import { ShareContextProvider } from '../func/ShareContext';

function MyApp({ Component, pageProps }) {

  const Layout = Component.layout || LayoutDefault;

  return <>
    <ShareContextProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ShareContextProvider>
  </>
}

export default MyApp
