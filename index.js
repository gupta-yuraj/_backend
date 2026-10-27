require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

const gitHubData = {
  "login": "gupta-yuraj",
  "id": 185403800,
  "node_id": "U_kgDOCw0JmA",
  "avatar_url": "https://avatars.githubusercontent.com/u/185403800?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/gupta-yuraj",
  "html_url": "https://github.com/gupta-yuraj",
  "followers_url": "https://api.github.com/users/gupta-yuraj/followers",
  "following_url": "https://api.github.com/users/gupta-yuraj/following{/other_user}",
  "gists_url": "https://api.github.com/users/gupta-yuraj/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/gupta-yuraj/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/gupta-yuraj/subscriptions",
  "organizations_url": "https://api.github.com/users/gupta-yuraj/orgs",
  "repos_url": "https://api.github.com/users/gupta-yuraj/repos",
  "events_url": "https://api.github.com/users/gupta-yuraj/events{/privacy}",
  "received_events_url": "https://api.github.com/users/gupta-yuraj/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Yuraj Gupta",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 11,
  "public_gists": 0,
  "followers": 1,
  "following": 3,
  "created_at": "2024-10-17T16:42:13Z",
  "updated_at": "2026-10-22T07:34:16Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!');


});

app.get('/shinchan', (req, res)  =>  {
    res.send("HOIIIIIIIIIIIIIII")
})

app.get('/login',(req , res) => {
    res.send('<h1> login to the shinchan.com</h1>')

})

app.get('/shiru', (req, res) => {
  res.send('<h2> BURI BURI</h2>')

})

app.get('/github', (req, res) =>{
  res.json(gitHubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Port is successfully running ${port}`);
});