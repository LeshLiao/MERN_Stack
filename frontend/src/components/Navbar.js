import { Link } from 'react-router-dom'
import PriceCalculator from '../components/PriceCalculator'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to ="/">
                    <h1>Monthly Time Sheet_001</h1>
                    <h2>{new PriceCalculator(2000).getTotal()}</h2>
                </Link>
            </div>
        </header>
    )
}

export default Navbar