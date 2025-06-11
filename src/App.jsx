import React from 'react'
import logo from './assets/Jobply.png'
import imgback from './assets/elip.png'
import imgbacks from './assets/elip2.png'
import imgarus from './assets/arus.png'
import icgogle from './assets/goog.png'
import i from './assets/i.png'
import gr from './assets/gr.png'
import pp from './assets/pp.png'
import dx from './assets/dx.png'
import bach from './assets/intersect.png'
import r1 from './assets/r1.png'
import r2 from './assets/r2.png'
import r3 from './assets/r3.png'
import dd1 from './assets/dd1.png'
import dd2 from './assets/dd2.png'
import dd3 from './assets/dd3.png'
import dd4 from './assets/dd4.png'

import ss1 from './assets/ss1.png'
import ss2 from './assets/ss2.png'
import ss3 from './assets/ss3.png'
import ss4 from './assets/ss4.png'

import od from './assets/od.png'
import vidd from './assets/vidd.png'
import ri from './assets/ri.png'
import gr2 from './assets/gr2.png'
import gr3 from './assets/gr3.png'
import gr4 from './assets/gr4.png'
import ddf from './assets/ddf.png'
import './App.css';


function App() {
  return (
    <header>
      <nav className='nav'>
        <img src={logo} alt="" />
        <ul>
          <li>Home</li>
          <li>Categories</li>
          <li>Service</li>
          <li>Jobs</li>
          <li><button>Post a Vacancy</button></li>
        </ul>
      </nav>
      <main className='main'>
        <article className='art1'>
          <h1>Find & Apply For
Your Dream Job</h1>
<p>The website is chockablock with useful features, allowing you to efficiently search and apply for roles across all sectors, experience levels and locations.</p>
          <div className='div1'>
            <div className='div2'><i class="fa-solid fa-magnifying-glass"></i> <input type="text" className='inpSe' placeholder='Job title or Keyword' /> <div></div> <i class="fa-solid fa-location-dot"></i> <input type="text" className='inpLo' placeholder='Location' /> <button>Search</button></div>
          </div>
        </article>
        <article className='art4'>
           <div><img className='dd' src={imgback} alt="" /></div>
           <div><img className='ddd' src={imgbacks} alt="" /></div>
           <div><img src={imgarus} className='dddd' alt="" /></div>
           <img className='d' src={icgogle} alt="" />
           <img className='i' src={i} alt="" />
           <img className='gr' src={gr} alt="" />
           <img className='pp' src={pp} alt="" />
           <img className='dx' src={dx} alt="" />  
        </article>
      </main>
      
      <section className='sec1'>
          <article className='art2'>
          <h2>Popular Job Posts</h2>
            <img className='r1' src={r1} alt="" />
            <img className='r' src={r2} alt="" />
            <img className='r' src={r3} alt="" />
          </article>
          <p>View All <i class="fa-solid fa-arrow-right"></i></p>
      </section>

      <section className='sec2'>
        <h2>Job Categories</h2>
        <article className='art3'>
          <img src={dd1} alt="" />
          <img src={dd2} alt="" />
          <img src={dd3} alt="" />
          <img src={dd4} alt="" />
        </article>
        <article className='art3'>
          <img src={ss1} alt="" />
          <img src={ss2} alt="" />
          <img src={ss3} alt="" />
          <img src={ss4} alt="" />
        </article>
      </section>

      <section className='sec3'>
        <article className='art4'>
          <h2>Get Start New Job</h2>
          <p>create an account so you can get job information that suits you, and you can apply the salary your demand.</p>
          <button>Create an Account</button>
        </article>
        <img src={od} alt="" />
      </section>

      <section className='sec4'>
        <article>

       <img src={vidd} alt="" />
       <div className='art5'>
        <h2>Post a Job for
UX Designer</h2>
        <p>The website is chockablock with useful features, allowing you to efficiently search and apply for roles across all sectors, experience levels and locations.</p>
        <button>Post a Job</button>
       </div>
        </article>
      </section>

      <section className='sec5'>
        <h2>Great Feedback
From Candidates</h2>
        <article className='art6'>
          <div className='divka'>
            <img className='hg' src={ri} alt="" />
            <p>Very decent services & care about my health. Really happy with his advice. Lorem Ipsum is simply dummy text of the printing and typesetting industry Very decent services & care about my health. Really happy with his advice.</p>
            <div className='dcc'>
              <img src={gr2} alt="" />
              <div>
              <span><strong>Maria Jannat</strong></span>
              <p>Content Writer</p>
                <i class="fa-solid fa-star" style={{"color":"#FA9B44"}}></i>
                <i class="fa-solid fa-star" style={{"color":"#FA9B44"}}></i>
                <i class="fa-solid fa-star" style={{"color":"#FA9B44"}}></i>
                <i class="fa-solid fa-star" style={{"color":"#FA9B44"}}></i>
                <i class="fa-solid fa-star" style={{"color":"#FA9B44"}}></i>
              </div>
            </div>
          </div>
          <div className='divka'>
            <img className='hg' src={ri} alt="" />
            <p>Very decent services & care about my health. Really happy with his advice. Lorem Ipsum is simply dummy text of the printing and typesetting industry Very decent services & care about my health. Really happy with his advice.</p>
            <div className='dcc'>
              <img src={gr4} alt="" />
              <div>
              <span><strong>Maria Jannat</strong></span>
              <p>Content Writer</p>
                <i class="fa-solid fa-star" style={{"color":"#FA9B44"}}></i>
                <i class="fa-solid fa-star" style={{"color":"#FA9B44"}}></i>
                <i class="fa-solid fa-star" style={{"color":"#FA9B44"}}></i>
                <i class="fa-solid fa-star" style={{"color":"#FA9B44"}}></i>
                <i class="fa-solid fa-star" style={{"color":"#FA9B44"}}></i>
              </div>
            </div>
          </div>
          <div className='divka'>
            <img className='hg' src={ri} alt="" />
            <p>Very decent services & care about my health. Really happy with his advice. Lorem Ipsum is simply dummy text of the printing and typesetting industry Very decent services & care about my health. Really happy with his advice.</p>
            <div className='dcc'>
              <img src={gr3} alt="" />
              <div>
              <span><strong>Maria Jannat</strong></span>
              <p>Content Writer</p>
                <i class="fa-solid fa-star" style={{"color":"#FA9B44"}}></i>
                <i class="fa-solid fa-star" style={{"color":"#FA9B44"}}></i>
                <i class="fa-solid fa-star" style={{"color":"#FA9B44"}}></i>
                <i class="fa-solid fa-star" style={{"color":"#FA9B44"}}></i>
                <i class="fa-solid fa-star" style={{"color":"#FA9B44"}}></i>
              </div>
            </div>
          </div>
        </article>
      </section>
      <br /><br />
      <div className='rounded'>
         <div className="soz"></div>
         <div className="soz1"></div>
         <div className="soz1"></div>
         <div className="soz1"></div>
      </div>

      <br /><br />
      <div className='ro'>

      <img className='inp' src={ddf} alt="" />
      </div>
      <footer>
        <article>
          <img src={logo} alt="" />
          <p>152/3 , Western Road, New York</p>
          <span>Call Us: +99-8569-5234</span>
          <div className='ik'>
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-twitter" style={{"color":"#EE4F3C", "border":"2px solid #EE4F3C"}}></i>
            <i class="fa-brands fa-instagram"></i>
          </div>
        </article>

        <article>
          <h2>Explore</h2>
          <p style={{"color": "#EE4F3C"}}> Featured Job</p>
          <p>Recent Job Post</p>
          <p>Total Candidates</p>
          <p>Support</p>
        </article>

        <article>
          <h2>Useful Link</h2>
          <p >About Us</p>
          <p style={{"color": "#EE4F3C"}}>Contact Us</p>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </article>
        
        <article>
          <h2>Company</h2>
          <p>Blog</p>
          <p>Pricing</p>
          <p style={{"color": "#EE4F3C"}}>Careers</p>
          <p>Help & Support</p>
        </article>
      </footer>
    </header>
  )
}

export default App
