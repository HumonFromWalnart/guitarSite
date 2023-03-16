import { instance } from "./axiosSrc";
import { useContext } from "react";
import { PostData } from "./mainSource";

export const Delete = (props) => {
    const { postId } = props;
    const { refresh } = useContext(PostData);

    const onClick = async () => {
        console.log(postId)
        const { data } = await instance.delete(`/deletePost/${postId}`);
        await refresh()
    }


    return (
        <button onClick={onClick}>Delete</button>
    )
}