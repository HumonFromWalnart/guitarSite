import { PostData } from "./mainSource";
import { useContext, useState } from "react";
import './button.css'

export const Button = () => {

    const { setSkip } = useContext(PostData);

    // const [page, setPage] = useState(1);

    const navi = async () => {
        setSkip((skip) => skip + 10);
        // setPage(page + 1)
    }

    return (
        <button onClick={navi} id='button'>next</button>
    );
}