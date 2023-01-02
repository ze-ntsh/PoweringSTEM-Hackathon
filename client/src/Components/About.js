import './css/About.scss'

const About = () => {
    return (
        <section id="about" className="about-container">
            <div className="title">About Us</div>
            <div className="about">
                <div className="about-image"></div>
                <div className="about-text">
                    <p>
                        Our annual insurance premium calculator is a powerful tool that helps 
                        individuals and businesses determine the cost of their insurance coverage. 
                        By using just a few pieces of information, the calculator uses a machine 
                        learning (ML) model to accurately predict the annual premium for a variety 
                        of insurance policies. The ML model has been trained on a vast amount of data 
                        to ensure the most accurate premium estimates possible.
                    </p>
                    <p>
                        Not only is the premium calculator convenient and easy to use, but it also 
                        saves time and effort by eliminating the need to request quotes from multiple 
                        insurance providers. This can help ensure that people have access to the medical 
                        care they need, as they will be able to afford the insurance premiums required to 
                        obtain coverage. With a single calculation, users can quickly and confidently 
                        determine the right coverage and budget for their needs.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About