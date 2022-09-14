import { Link } from 'react-router-dom'

const WelcomePage = () => {

    return (
        <div className="welcome-page">
            <h1>WELCOME ALABAMA</h1>

            <Link to='/movies'>Go to Movies Catalog!</Link>
        </div>
    );
}

export default WelcomePage;
