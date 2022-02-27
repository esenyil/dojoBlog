import { Link } from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <h2>Sorry, but I'm not sorry!</h2>
            <p>That page cannot be found</p>
            <Link to="/">Back to the homepage</Link>
        </div>
     );
}
 
export default NotFound;