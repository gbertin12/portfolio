import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import  ButtonCategories  from '../components/ButtonCategories';


// interface Article 

interface Article {
    title: string;
    content: string;
    id: number;
    date: string;
    theme: string;
    imageSrc: string;
}

const categories = ['all', 'economie', 'blockchain', 'ecologie', 'nonclasse'];



export default function Blog() {
    const [articles, setArticles] = useState<Article[]>([]);
    const { categorie } = useParams();

    useEffect(() => {
    fetch('/articles.json')
        .then((res) => res.json())
        .then((data: Article[]) => setArticles(data))
        .catch((err) => console.error(err));
    }, []);

    console.log(categorie);
    function ListArticles() {
        return (  
            <>
                {articles.map((article) => (
                    article.theme === categorie || categorie === 'all' ? 
                    <Link to={`/article/${article.id}`} key={article.id} className='group'>
                        <img 
                            alt={article.title}
                            src={article.imageSrc}
                            className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75 xl:aspect-7/8"
                        />
                        <h3 className="mt-2 text-lg font-medium text-gray-900">{article.title}</h3>
                        <ButtonCategories categorie={article.theme} />
                        <p className=" text-sm text-gray-700">{article.date}</p>
                    </Link> : null
                ))}
            </>
        );
    }

    function NavBarCategories() {
        return (
            <div className='mx-auto w-max'>
                {categories.map((categorie) => (ButtonCategories({categorie})))}      
            </div>
        )
    }

    return (
        <div className="bg-white">
            <NavBarCategories />
            <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-8">
                <div className='grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
                    <ListArticles />
                </div>
            </div>
        </div>
    );
}