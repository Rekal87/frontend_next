import Layout from '../components/layout/layout';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <div className='app'>
        <Component {...pageProps} />
      </div>
    </Layout>
  );
}

export default MyApp;
