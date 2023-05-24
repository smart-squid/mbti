import testStyles from "../../styles/tests.module.css";
import data from "../../data/test.json";
import router, { useRouter } from "next/router";

export default function Test() {
    const r = useRouter();
    const testNum = router.query.id;
    const testData = data["Questions"][testNum - 1];

    if (parseInt(testNum) === 1) {
        localStorage.clear();
        localStorage.setItem("E", 0);
        localStorage.setItem("I", 0);
        localStorage.setItem("S", 0);
        localStorage.setItem("N", 0);
        localStorage.setItem("T", 0);
        localStorage.setItem("F", 0);
        localStorage.setItem("P", 0);
        localStorage.setItem("J", 0);
    }

    const handleClick = (e) => {
        localStorage.setItem(e.target.value.charAt(0), parseInt(localStorage.getItem(e.target.value.charAt(0))) + 1);
        localStorage.setItem(e.target.value.charAt(1), parseInt(localStorage.getItem(e.target.value.charAt(1))) + 1);
        if (parseInt(testNum) === data["Questions"].length) {
            r.push(`/result`);
            return;
        }
        r.replace(`/tests/${parseInt(testNum) + 1}`);
    };

    return (
        <div className={testStyles.body}>
            <progress className={testStyles.progress} value={testNum} max={data["Questions"].length}></progress>
            <img className={testStyles.test_image} src={`/images/tests/q${testNum}.jpg`}/>
            <h1 className={testStyles.label}>{testData.testText}</h1>
            <button
                className={testStyles.button}
                value={testData.value1}
                onClick={handleClick}
            >
                {testData.option1}
            </button>
            <button
                className={testStyles.button}
                value={testData.value2}
                onClick={handleClick}
            >
                {testData.option2}
            </button>
        </div>
    );
}
