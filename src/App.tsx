import './App.css';
import {useFetch} from "../hooks/useFetch.tsx";

export const App = () => {
    const { data } = useFetch();
    return (
        <div>
            {
                (data.length > 0) && data.map( ({ id, name, image}) => (
                    <div key={id}>
                        <h1>{name}</h1>
                        <img src={image}/>
                    </div>
                ))
            }
        </div>
    )
}
