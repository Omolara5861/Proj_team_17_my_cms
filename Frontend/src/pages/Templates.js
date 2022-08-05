import React from 'react'
import blog1 from '../assets/img/Rectangle 47.svg';
import blog2 from '../assets/img/Rectangle 48.svg';
import landingpage1 from '../assets/img/Rectangle 56.svg';
import landingpage2 from '../assets/img/Rectangle 67.svg';

export default function Templates() {
    return (
    <section className='template-page m-9'>
        <div className='header'>
        </div>
        <main>
            <h1>Browse by Category</h1>
            <div className='blogs-container'>
                <div className='title'>
                    <h3>Blogs</h3>
                    <a href='#'>See All</a>
                </div>
                < div className='images flex'>
                    <img src={blog1} alt='blog-template' />
                    <img src={blog2} alt='blog-template' />
                </div>
            </div>

            <div className='landing-pages-container'>
            <div className='title'>
                    <h3>Landing Pages</h3>
                    <a href='#'>See All</a>
            </div>
            < div className='images flex'>
                        <img src={landingpage1} alt='landing-page-template' />
                        <img src={landingpage2} alt='landing-page-template' />
                </div>
            </div>

            <div className='portfolio'>
            <div className='title'>
                    <h3>Portfolio</h3>
                    <a href='#'>See All</a>
                   
            </div>
            < div className='images flex'>
                    <div className='portfolio-template'>

                    </div>

                    <div className='portfolio-template'>

                    </div>
            </div>
            </div>
        </main>
    </section>
)
}
