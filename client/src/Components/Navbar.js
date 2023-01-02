import './css/Navbar.scss'

const Navbar = () => {
    return(
        <div className='nav'>
            <ul className='nav-list'>
                <li><a href='#top' className='nav-link'>Insura</a></li>
                <li><a href='#calc' relative="path" className="nav-link">Calculator</a></li>
                <li><a href='#about' className="nav-link">About</a></li>
            </ul>
        </div>
    );
}

export default Navbar;