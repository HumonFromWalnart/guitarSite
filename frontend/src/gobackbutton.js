import { PostData } from "./mainSource";
import { useContext, useState } from "react";
import './button.css'

export const ReverseButton = () => {

    const { setSkip, skip } = useContext(PostData);

    // const [page, setPage] = useState(1);

    const navi = async () => {
        if (skip == 0) {
            setSkip(0)
        } else {
            setSkip((skip) => skip - 10);
        }
    }

    return (
        <button onClick={navi} id='button' >go back</button>
    );
}