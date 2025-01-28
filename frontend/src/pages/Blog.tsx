import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// interface Article 

interface Article {
    title: string;
    content: string;
    id: number;
    date: string;
    theme: string;
    imageSrc: string;
}


export default function Blog() {
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
    fetch('articles.json')
        .then((res) => res.json())
        .then((data: Article[]) => setArticles(data))
        .catch((err) => console.error(err));
    }, []);

    console.log(articles);
    function ListArticles() {
        return (  
            <>
                {articles.map((article) => (
                    <Link to={`/article/${article.id}`} key={article.id} className='group'>
                        <img 
                            alt={article.title}
                            src={article.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                        />
                        <h3 className="mt-1 text-lg font-medium text-gray-900">{article.title}</h3>
                        <p className="mt-4 text-sm text-gray-700">{article.theme}</p>
                        <p className="mt-4 text-sm text-gray-700">{article.date}</p>
                    </Link>
                ))}
            </>
        );
    }

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                    <ListArticles />
                </div>
            </div>
        </div>
    );
}