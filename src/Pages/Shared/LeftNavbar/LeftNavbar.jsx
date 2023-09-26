import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNavbar = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://the-news-dragon-server-644dx1aab-shefathossain7-gmailcom.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
            .catch(error => console.error(error))
    }, [])
    return (
        <div>
            <h4>All Category</h4>
            <div className="ps-4">
                {
                    categories.map(category => <p
                        key={category.id}
                    >
                        <Link to={`/category/${category.id}`} className="text-secondary text-decoration-none">{category.name}</Link>
                    </p>)
                }
            </div>
        </div>
    );
};

export default LeftNavbar;