import Head from 'next/head'

import Container from '../components/Container';
import Layout from '../components/Layout';
import MainContent from '../components/MainContent';
import { getHomepageData, getMainMenuItems } from '../lib/api'

export async function getStaticProps() {
	const homepageData = await getHomepageData();
  const menuItems = await getMainMenuItems();

	return {
		props: { homepageData, menuItems }
	}
}

const Home = ({ homepageData, menuItems }) => {
  const { content } = homepageData;
  return <Layout menuItems={menuItems}>
    <Head>
      <title>Empire Housing and Development Corporation | Syracuse, NY</title>
    </Head>
    <Container>
    <MainContent content={content} />
    </Container>
  </Layout>
}
export default Home;