import React from 'react'
import axios from 'axios'
require('dotenv').config()

const Dashboard = () => {
    const GITHUB_CLIENT_ID = process.env.GITHUB_CLIENT_ID
    const GITHUB_CLIENT_SECRET = process.env.GITHUB_CLIENT_SECRET
    const token = null
    const REDIRECT_URI = "http://localhost:3000/dashboard"
    // async function accessToken(req, res,code) {
        // <<<<<<<<<<<<<<With AXIOS>>>>>>>>>>>>>>>>>>>>></With>
    // const code = req.query.code
    // const body = {
    //   client_id: GITHUB_CLIENT_ID,
    //   client_secret: GITHUB_CLIENT_SECRET,
    //   code
    // }
    // const opts = 
    // axios.post(`https://github.com/login/oauth/access_token&uri_redirect=http://localhost:3000/dashboard`, body, opts).then(res => res.data['access_token']).then(_token => {
    //   token = _token
    //   res.json({ ok: token })
    //   console.log(token)
    // })
        
    // }
    // accessToken()
     const  accessToken = (code)=> {
            const body = {

                client_id: GITHUB_CLIENT_ID,
                client_secret: GITHUB_CLIENT_SECRET,
                code,
                uri_redirect: REDIRECT_URI
            }
            const opts = { headers: { accept: 'application/json' } }
            axios.post(`https://github.com/login/oauth/access_token&uri_redirect=http://localhost:3000/dashboard`, body, opts)
    }
accessToken()
    return (
        <div>
            <h1>Welcome to your Dashboard</h1>
        </div>
    )
}

export default Dashboard
















// ??????????????????????????????Error Code ????????????????????????????????????????????????

// axios.post({
//     method:"POST",
//     url:`https://github.com/login/oauth/access_token`,
//     headers:{
//         "Content-Type": "application/json"

//     },
//     body:{
//         client_id:GITHUB_CLIENT_ID,
//         client_secret:GITHUB_CLIENT_SECRET,
//         code 
//     }
// })
//   const token = null
//   async function accessToken(code) {

//     const request = await fetch("https://github.com/login/oauth/access_token", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//             client_id:GITHUB_CLIENT_ID,
//             client_secret:GITHUB_CLIENT_SECRET,
//             code
//         })
//     });
//     const text = await request.text();
//     const params = new URLSearchParams(text);
//     return params.get("access_token");

    // <<<<<<<<<<<<<<With AXIOS>>>>>>>>>>>>>>>>>>>>></With>
    // const code = req.query.code
    // const body = {
    //   client_id: GITHUB_CLIENT_ID,
    //   client_secret: GITHUB_CLIENT_SECRET,
    //   code
    // }
    // const opts = { headers: { accept: 'application/json' } }
    // axios.post(`https://github.com/login/oauth/access_token`, body, opts).then(res => res.data['access_token']).then(_token => {
    //   token = _token
    //   res.json({ ok: token })
    //   console.log(token)
    // })
//   }
