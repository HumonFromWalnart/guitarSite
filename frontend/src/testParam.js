import { Params, useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { PostData } from "./mainSource";

const Test = () => {
    // Define the string
    var defualt = 'Hello World!';

    // Encode the String
    var encodedStringBtoA = btoa(defualt);

    var decodedStringAtoB = atob(encodedStringBtoA);

    console.log(encodedStringBtoA);
    console.log(decodedStringAtoB);

}

export default Test;