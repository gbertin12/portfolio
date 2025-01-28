import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// interface Article
interface Article {
    title: string;
    content: string;
    id: number;
    date: string;
    theme: string;
}

export default function Article() {
    const { id } = useParams(); // Récupérer l'ID de l'article depuis l'URL
    const [article, setArticle] = useState<Article | null>(null);

    useEffect(() => {
        fetch('/articles.json')
            .then((res) => res.json())
            .then((data: Article[]) => {
                // Trouver l'article correspondant à l'ID
                const foundArticle = data.find((item) => item.id === Number(id));
                setArticle(foundArticle || null);
            })
            .catch((err) => console.error(err));
    }, [id]);

    if (!article) {
        return <p>Article non trouvé !</p>;
    }
    return (
        <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <small>{article.date} - {article.theme}</small>
        </div>
    );
}
