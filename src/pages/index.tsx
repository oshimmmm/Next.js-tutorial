import Head from "next/head";
import Layout, { siteTitle } from "../../components/Layout";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { getSortedPostsData } from "../../lib/posts";
import { GetStaticProps } from "next";
import Date from "../../components/date";

// PostDataの型定義
interface PostData {
  id: string;
  date: string;
  title?: string;
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData: PostData[] = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
};

// Homeコンポーネントの型定義
interface HomeProps {
  allPostsData: PostData[];
}

export default function Home({ allPostsData }: HomeProps) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>My name is oshimmmm</p>
        <p>
          (This is a simple website, based on the {' '}
          <a href="https://nextjs.org/learn">Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href="/posts/[id]" as={`/posts/${id}`} legacyBehavior>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
