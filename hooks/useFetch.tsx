import {useEffect, useState} from "react";
import {getCharacters} from "../helpers/getCharacters.ts";

export const useFetch = () => {
    const [data, setData] = useState([]);

    const getData = async() => {
        const dataApi = await getCharacters();

        setData(dataApi.results);
    }

    useEffect(() => {
        getData();
    }, []);

    return {
        data,
    }
}