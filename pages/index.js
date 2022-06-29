import Head from 'next/head'

import Container from '../components/Container';
import Layout from '../components/Layout';
import MainContent from '../components/MainContent';
import { getHomepageData } from '../lib/api'

export async function getStaticProps() {

	const homepageData = await getHomepageData()

	return {
		props: { homepageData }
	}
}

const Home = ({ homepageData }) => {
  const { title, content } = homepageData;
  return <Layout>
    <Head>
      <title>Empire Housing and Development Corporation | Syracuse, NY</title>
    </Head>
    <Container>
    <MainContent content={content} />
    </Container>
  </Layout>
}
export default Home;