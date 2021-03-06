import Head from 'next/head'
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/util.module.css'
import Link from 'next/link'
import { getSortedPostsData } from '../lib/posts'

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          This is a sample website built using Next.js and deployed on  <a href="https://vercel.com">Vercel.</a> Guide can be found on{' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}><a>{title}</a></Link> <br />
                {id} <br />
                {date}
              </li>
            ) )
          }
        </ul>
      </section>
    </Layout>
  )
}

//for static generation of pages. Runs only on Server Side.
export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return{
    props: {
      allPostsData
    }
  }
}