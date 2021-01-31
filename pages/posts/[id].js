import Head from 'next/head'

import Date from '../../components/date';
import Layout from '../../components/layout';
import {getAllPostIDs, getPostData} from '../../lib/posts';

export default function Post({postData}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1>{postData.title}</h1>
        <Date dateString={postData.date}/>
        <div dangerouslySetInnerHTML={{__html: postData.contentHTML}}/>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIDs()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({params}) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}
