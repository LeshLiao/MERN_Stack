import { Link } from 'react-router-dom'
import Counter from './Counter'

const Navbar = () => {
    return (
        <header>
            <div className="container">
                <Link to ="/">
                    <h1>Monthly Time Sheet</h1>
                </Link>
            </div>
            <Counter/>
        </header>
    )
}

export default Navbar