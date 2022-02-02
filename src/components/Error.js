import { Link } from "react-router-dom";

const Error = () => {
    return ( 
        <div className="no-content">
            <h1>Sorry Page Not Found!</h1>
            <p>The Page Cannot be Found!</p>
            <Link to="/">Back To Homepage....</Link>
        </div>
    );
}
 
export default Error;