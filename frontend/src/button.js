import { PostData } from "./mainSource";
import { useContext } from "react";

export const Button = () => {

    const { setSkip } = useContext(PostData);

    const navi = async () => {
        setSkip((skip) => skip + 1);
    }

    return (
        <button onClick={navi}>1</button>
    );
}