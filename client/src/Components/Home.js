import './css/Home.scss'

const Home = () => {
    return (
        <section className='home-container'>
            <div className='parallax'></div>
            <div className='text'>
                <div className='title'>Insura</div>
                <div className='subt'>Get an estimate today</div>
            </div>
            
            
            <a href='#calc'>
                <div className='arrow3'>
                    <div className='arrow2'></div>
                </div>
            </a>
        </section>
    )
}

export default Home