import '../styles/globals.scss'
import LayoutDefault from '../layouts/LayoutDefault';
import { ShareContextProvider } from '../func/ShareContext';
import { Provider } from 'react-redux';
import MsgStore from '../redux/MsgStore';

function MyApp({ Component, pageProps }) {

  const Layout = Component.layout || LayoutDefault;


  return <>
    <Provider store={MsgStore}>
      <ShareContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ShareContextProvider>
    </Provider>
  </>
}

export default MyApp
