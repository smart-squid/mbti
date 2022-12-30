import Link from "next/link";
import Head from "next/head";
import Script from "next/script";
import Layout from '../../components/layout';
import data from "../../assets/playerData.json" assert { type: "JSON" };
import styles from "../../styles/cards.module.css";

export default function Post() {
  const cards = data;

  return (
    <Layout>
      <Head>
        <title>분석 결과</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div className={styles.wrapper}>
        <h1>분석 결과</h1>
        <h2>
          <Link href="/">돌아가기</Link>
        </h2>
        <div className={styles.fut_player_card}>
          <div className={styles.player_card_top}>
            <div className={styles.player_master_info}>
              <div className={styles.player_rating}>
                <span>97</span>
              </div>
              <div className={styles.player_position}>
                <span>RW</span>
              </div>
              <div className={styles.player_nation}>
                <img
                  src="https://selimdoyranli.com/cdn/fut-player-card/img/argentina.svg"
                  alt="Argentina"
                  draggable="false"
                />
              </div>
              <div className={styles.player_club}>
                <img
                  src="https://selimdoyranli.com/cdn/fut-player-card/img/barcelona.svg"
                  alt="Barcelona"
                  draggable="false"
                />
              </div>
            </div>
            <div className={styles.player_picture}>
              <img
                src="https://selimdoyranli.com/cdn/fut-player-card/img/messi.png"
                alt="Messi"
                draggable="false"
              />
              <div className={styles.player_extra}>
                <span>4*SM</span>
                <span>4*WF</span>
              </div>
            </div>
          </div>
          <div className={styles.player_card_bottom}>
            <div className={styles.player_info}>
              <div className={styles.player_name}>
                <span>MESSI</span>
              </div>
              <div className={styles.player_features}>
                <div className={styles.player_features_col}>
                  <span>
                    <div className={styles.player_feature_value}>97</div>
                    <div className={styles.player_feature_title}>PAC</div>
                  </span>
                  <span>
                    <div className={styles.player_feature_value}>95</div>
                    <div className={styles.player_feature_title}>SHO</div>
                  </span>
                  <span>
                    <div className={styles.player_feature_value}>94</div>
                    <div className={styles.player_feature_title}>PAS</div>
                  </span>
                </div>
                <div className={styles.player_features_col}>
                  <span>
                    <div className={styles.player_feature_value}>95</div>
                    <div className={styles.player_feature_title}>DRI</div>
                  </span>
                  <span>
                    <div className={styles.player_feature_value}>95</div>
                    <div className={styles.player_feature_title}>DEF</div>
                  </span>
                  <span>
                    <div className={styles.player_feature_value}>95</div>
                    <div className={styles.player_feature_title}>PHY</div>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
