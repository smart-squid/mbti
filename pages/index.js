import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/players";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <section
                className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}
            >
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, name, overall }) => (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/players/${id}`}>{name}</Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                {overall}
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
            <Link href="/posts/first-post">
                <p>나와 비슷한 축구선수 찾기 &rarr;</p>
            </Link>
            <p>나와 비슷한 성향을 가진 축구선수는 누구일까요?</p>
        </Layout>
    );
}
