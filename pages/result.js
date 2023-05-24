import resultStyles from "../styles/result.module.css";
import { useRouter } from "next/router";

export default function Result() {
    const r = useRouter();

    setTimeout(() => {
        getResult();
    }, 5000);

    const getResult = () => {
        let result = "";
        if (localStorage.getItem("E") > localStorage.getItem("I")) {
            result += "E";
        } else {
            result += "I";
        }

        if (localStorage.getItem("S") > localStorage.getItem("N")) {
            result += "S";
        } else {
            result += "N";
        }

        if (localStorage.getItem("T") > localStorage.getItem("F")) {
            result += "T";
        } else {
            result += "F";
        }

        if (localStorage.getItem("P") > localStorage.getItem("J")) {        
            result += "P";
        } else {
            result += "J";
        }

        alert(`MBTI 결과: ${result}`);

        r.push(`/players/${result}`);
    };

    return (
        <div className={resultStyles.body}>
            <h1>결과를 계산중입니다.</h1>
            <ins
                className="adsbygoogle"
                style={{ display: "block" }}
                data-ad-client=""
                data-ad-slot=""
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
            <div className={resultStyles.load_spinner}></div>
        </div>
    );
}
