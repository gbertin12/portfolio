import { Link } from "react-router-dom";

interface ButtonCategorieProps {
    categorie: string;
}

export default function ButtonCategories({categorie} : ButtonCategorieProps) {
  return (
    <Link to={`/blog/${categorie}`}>
      <span className={`mr-1 inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset 
            ${categorie === 'all' ? 'bg-red-50 text-red-700 ring-red-600/10' : 
            categorie === 'economie' ? 'bg-yellow-50 text-yellow-700 ring-yellow-600/10' : 
            categorie === 'blockchain' ? 'bg-blue-50 text-blue-700 ring-blue-600/10' : 
            categorie === 'ecologie' ? 'bg-green-50 text-green-700 ring-green-600/10' : 
            'bg-gray-50 text-gray-600 ring-gray-500/10'}`}>

        {categorie === 'all' ? 'All' : 
            categorie === 'economie' ? 'Economie' : 
            categorie === 'blockchain' ? 'Blockchain' : 
            categorie === 'ecologie' ? 'Ecologie' : 
            'Non Répertorié'}
      </span>
    </Link>
  );

}