import Head from "next/head";
import indexStyles from "../styles/index.module.css";
import { getSortedPostsData } from "../lib/players";
import { useRouter } from "next/router";

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData,
        },
    };
}

export default function Home({ allPostsData }) {
    const r = useRouter();

    const startTest = () => {
        localStorage.clear();
        r.push(`/tests/${1}`);
    };

    return (
        <>
            <Head>
                <title>나와 비슷한 축구선수는?</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={indexStyles.body}>
                <h2 className={indexStyles.title} >나와 비슷한 성향을 가진 축구선수는 누구일까요?</h2>
                <img className={indexStyles.main_image} src="/images/main.jpg" />
                <button className={indexStyles.button} onClick={startTest}>테스트 시작하기</button>
            </div>
        </>
    );
}
