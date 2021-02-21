import React from 'react'
import './styles/card.css'
require('dotenv').config()


const Card = () => {

// console.log(onClick())
const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID
const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET

  const REDIRECT_URI = "http://localhost:3000/dashboard"
  const baseUrl = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}`

  return (
    <div >

<section className="Card">
<div className="content unauthorized">
<div className="top">
  <img className="img-github" src="github.png" />
  <h1>Happy to see you<br />newcomer 👋</h1>
</div>
<div className="content-bottom">
  <a  className="btn" href={baseUrl}>SIGN IN WITH GITHUB</a>
  <p className="sign-in-text">in order to get started</p>
</div>
  </div>
  
  <div className="content authorized" style={{display: 'none'}}>
<div className="top">
  <img className="img-github" src="github.png" />
  <h1><span className="party-popper">🎉</span><br />Awesome!<br />You're authorized 🔒</h1>
</div>
</div>
 </section>
      </div>
      
    
    )
}

export default Card