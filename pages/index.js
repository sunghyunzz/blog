import Head from 'next/head'
import Link from 'next/link'

import {getSortedPostsData} from '../lib/posts';
import Date from '../components/date'
import Layout from '../components/layout';

export default function Home({allPostsData}) {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main>
        <h1>blog.hwang.sh</h1>
        {allPostsData.map(({id, date, title}) => (
          <li key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <Date dateString={date}/>
          </li>
        ))}
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
