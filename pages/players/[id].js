import Head from "next/head";
import Image from "next/image";
import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/players";
import utilStyles from "../../styles/utils.module.css";
import cardStyles from "../../styles/cards.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.name}</title>
            </Head>
            <div className={cardStyles.center}>
                <div className={cardStyles.card}>
                    <div className={cardStyles.additional}>
                        <div className={cardStyles.user_card}>
                            <div
                                className={[
                                    cardStyles.level,
                                    cardStyles.center,
                                ].join(" ")}
                            >
                                Overall: {postData.overall}
                            </div>
                            <Image src={postData.imageLink} alt={postData.name} width={500} height={350} className={cardStyles.img} />
                            <div
                                className={[
                                    cardStyles.points,
                                    cardStyles.center,
                                ].join(" ")}
                            >
                                포지션: {postData.position}
                            </div>
                        </div>
                        <div className={cardStyles.more_info}>
                            <h1>{postData.name}</h1>
                            <div className={cardStyles.coords}>
                                <span>{postData.nationality}</span>
                                <span>{postData.age}세</span>
                            </div>
                            <div className={cardStyles.coords}>
                                <span>{postData.clubName}</span>
                                <span>
                                    {postData.height}cm, {postData.weight}kg
                                </span>
                            </div>
                            <div className={cardStyles.stats}>
                                <div>
                                    <div className={cardStyles.title}>속도</div>
                                    <FontAwesomeIcon icon={faBolt} className={cardStyles.icon} />
                                    <div className={cardStyles.value}>
                                        {postData.pace}
                                    </div>
                                </div>
                                <div>
                                    <div className={cardStyles.title}>슈팅</div>
                                    <FontAwesomeIcon icon={faBolt} className={cardStyles.icon} />
                                    <div className={cardStyles.value}>
                                        {postData.shooting}
                                    </div>
                                </div>
                                <div>
                                    <div className={cardStyles.title}>패스</div>
                                    <FontAwesomeIcon icon={faBolt} className={cardStyles.icon} />
                                    <div className={cardStyles.value}>
                                        {postData.passing}
                                    </div>
                                </div>
                                <div>
                                    <div className={cardStyles.title}>
                                        드리블
                                    </div>
                                    <FontAwesomeIcon icon={faBolt} className={cardStyles.icon} />
                                    <div className={cardStyles.value}>
                                        {postData.dribbling}
                                    </div>
                                </div>
                                <div>
                                    <div className={cardStyles.title}>수비</div>
                                    <FontAwesomeIcon icon={faBolt} className={cardStyles.icon} />
                                    <div className={cardStyles.value}>
                                        {postData.defending}
                                    </div>
                                </div>
                                <div>
                                    <div className={cardStyles.title}>신체</div>
                                    <FontAwesomeIcon icon={faBolt} className={cardStyles.icon} />
                                    <div className={cardStyles.value}>
                                        {postData.physicality}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cardStyles.general}>
                        <h1>{postData.name}</h1>
                        <p>{postData.description}</p>
                        <span className={cardStyles.more}>Click for more</span>
                    </div>
                </div>
            </div>
        </Layout>
    );
}
