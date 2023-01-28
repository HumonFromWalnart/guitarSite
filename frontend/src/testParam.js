import { Params, useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PostData } from "./mainSource";

const Test = () => {
    const navigation = useNavigate()

    const { usersData } = useContext(PostData);
    // const { id } = useParams();

    return (
        <div>
            {
                usersData?.map((cur) => {
                    return (
                        <>
                            <div>{cur.name}</div>
                            <button onClick={() => navigation(`/${cur._id}`)}>asd</button>
                        </>
                    );
                })
            }

        </div>
    )
}

export default Test;