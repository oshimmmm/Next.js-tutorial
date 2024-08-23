import Head from "next/head";
import Layout from "../../../components/Layout";
import { getAllPostIds, getPostData } from "../../../lib/posts";
import Date from "../../../components/date";
import utilStyles from "../../styles/utils.module.css"

export default function Post({ postData }: {postData: any}) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
                <meta name="description" content={postData.content} />
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
};

export const getStaticPaths = async () => {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({ params }: {params: { id: string} }) => {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    };
};