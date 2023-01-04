import Head from "next/head";
import { getAllPostIds, getPostData } from "../../lib/players";
import cardStyles from "../../styles/cards.module.css";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);

    return {
        props: {
            postData,
        },
    };
}

export default function Post({ postData }) {
    return (
        <>
            <Head>
                <title>{postData.korName}</title>
            </Head>
            <div className={cardStyles.player_card}>
                <div className={cardStyles.player_card_title}>
                    <h2>당신과 비슷한 유형의 축구선수는..</h2>
                </div>
                <div className={cardStyles.player_card_detail}>
                    <div className={cardStyles.player_card_detail_header}>
                        <div className={cardStyles.player_card_detail_position}>
                            <h3>{postData.position}</h3>
                        </div>
                        <div className={cardStyles.player_card_detail_info}>
                            <div className={cardStyles.player_card_detail_number}>
                                <h1 className={postData.mbti + "-text"}>{postData.backNumber}</h1>
                            </div>
                            <div className={cardStyles.player_card_detail_name}>
                                <h2>{postData.firstName}<br/>{postData.lastName}</h2>
                            </div>
                            <div className={cardStyles.player_card_detail_ovr}>
                                <h3>OVR</h3>
                                <h3>{postData.overall}</h3>
                            </div>
                        </div>
                    </div>
                    <div className={[cardStyles.player_card_detail_body, postData.mbti + "-bg"].join(" ")}>
                        <div className={postData.mode === "dark" ?
                            [
                                cardStyles.player_card_detail_stats,
                                cardStyles.dark,
                            ].join(" ") : [
                                cardStyles.player_card_detail_stats,
                                cardStyles.light,
                            ].join(" ")}>
                            <div>
                                <div>
                                    {
                                        postData.position === "GK" ?
                                        <h3 className={cardStyles.left}>다이빙</h3> :
                                        <h3 className={cardStyles.left}>속도</h3>
                                    }
                                </div>
                                <div>
                                    <h3 className={cardStyles.right}>{postData.pac}</h3>
                                </div>
                            </div>
                            <div>
                                <div>
                                    {
                                        postData.position === "GK" ?
                                        <h3 className={cardStyles.left}>핸들링</h3> :
                                        <h3 className={cardStyles.left}>슈팅</h3>
                                    }
                                </div>
                                <div>
                                    <h3 className={cardStyles.right}>{postData.sho}</h3>
                                </div>
                            </div>
                            <div>
                                <div>
                                    {
                                        postData.position === "GK" ?
                                        <h3 className={cardStyles.left}>킥</h3> :
                                        <h3 className={cardStyles.left}>패스</h3>
                                    }
                                </div>
                                <div>
                                    <h3 className={cardStyles.right}>{postData.pas}</h3>
                                </div>
                            </div>
                            <div>
                                <div>
                                    {
                                        postData.position === "GK" ?
                                        <h3 className={cardStyles.left}>반응</h3> :
                                        <h3 className={cardStyles.left}>기술</h3>
                                    }
                                </div>
                                <div>
                                    <h3 className={cardStyles.right}>{postData.dri}</h3>
                                </div>
                            </div>
                            <div>
                                <div>
                                    {
                                        postData.position === "GK" ?
                                        <h3 className={cardStyles.left}>스피드</h3> :
                                        <h3 className={cardStyles.left}>수비</h3>
                                    }
                                </div>
                                <div>
                                    <h3 className={cardStyles.right}>{postData.def}</h3>
                                </div>
                            </div>
                            <div>
                                <div>
                                    {
                                        postData.position === "GK" ?
                                        <h3 className={cardStyles.left}>위치</h3> :
                                        <h3 className={cardStyles.left}>신체</h3>
                                    }
                                </div>
                                <div>
                                    <h3 className={cardStyles.right}>{postData.phy}</h3>
                                </div>
                            </div>
                        </div>
                        <div className={[cardStyles.player_card_detail_image, postData.mbti].join(" ")}>
                            <img src={postData.imageLink} />
                        </div>
                        <div className={cardStyles.player_card_detail_club_logo}>
                            <img src={postData.clubImage} />
                        </div>
                        <div className={cardStyles.player_card_detail_nation_logo}>
                            <img src={postData.nationImage} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
