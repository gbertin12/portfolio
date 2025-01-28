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
        <div className='max-w-[80%] md:max-w-[70%] lg:max-w-[50%] mx-auto'>
            <h1 className=' py-3 font-bold text-4xl'>{article.title}</h1>
            <p className='pb-8 text-grey-700 font-light text-xs'>{article.date} - {article.theme}</p>
            <hr className='pb-6' />
            <p className=' prose prose-lg text-justify'>{article.content}</p>
        </div>
    );
}
