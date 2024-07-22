import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import Spinner from "react-bootstrap/esm/Spinner";

export default function Article() {
    const { articleId } = useParams();
    const {
        data: article,
        isFetching
    } = useFetch(`http://localhost:3030/jsonstore/advanced/articles/details/${articleId}`, {});

    return (
        <>
            {isFetching
                ? <Spinner />
                : <article>
                    <h1>{article.title}</h1>
                    <p>{article.content}</p>
                </article>
            }

        </>
    );
}