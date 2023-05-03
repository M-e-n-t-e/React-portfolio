import React from "react";
import "./about.css";
import ME from "../../asset/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const about = () => {
    return (
        <div>
            <section id='about'>
                <h5>Get to know</h5>
                <h2>About me</h2>
                <div className='container about__container'>
                    <div className='about__me'>
                        <img src={ME} alt='About Image' />
                    </div>
                    <div className='about__content'>
                        <div className='about__cards'>
                            <article className='about__card'>
                                <FaAward className='about__icon' />
                                <h5>Eperience</h5>
                                <small>3+ Years working</small>
                            </article>

                            <article className='about__card'>
                                <FiUsers className='about__icon' />
                                <h5>Clients</h5>
                                <small>200+ Worldwide</small>
                            </article>

                            <article className='about__card'>
                                <VscFolderLibrary className='about__icon' />
                                <h5>Projects</h5>
                                <small>80+ Completed</small>
                            </article>
                        </div>

                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Commodi numquam recusandae laborum sunt porro,
                            eligendi asperiores veritatis quasi similique, quae
                            repellendus incidunt ad, quaerat facilis pariatur
                            magni minus harum cupiditate?
                        </p>
                        <a href="#contact" className="btn btn-primary">Let's Talk</a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default about;
