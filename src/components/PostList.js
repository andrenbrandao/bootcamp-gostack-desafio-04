import React, { Component } from 'react';

import './PostList.css'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "André Brandão",
          avatar: "https://avatars0.githubusercontent.com/u/3364098?v=4"
        },
        date: "04 Jun 2019",
        content: "Pessoal, alguém sabe se a Rocketseat está contratando?",
        comments: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
            },
            content: "Conteúdo do comentário"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Diego Fernandes",
          avatar: "https://avatars2.githubusercontent.com/u/2254731?v=4"
        },
        date: "10 Jun 2019",
        content: "Fala Dev! Quem aqui está preparado pra próxima Semana Omnistack?",
        comments: [
          {
            id: 1,
            author: {
              name: "André Brandão",
              avatar: "https://avatars0.githubusercontent.com/u/3364098?v=4"
            },
            content: "Conteúdo do comentário"
          }
        ]
      }
    ]
  };

  render() {
    return(
      <div id='post-list'>
      <ul>{ this.state.posts.map(post => (<li key={post.id}><div className="author-info"><img src={post.author.avatar} alt="avatar"/><div className="post-data"><strong>{post.author.name}</strong><small className='date'>{post.date}</small></div></div><p>{post.content}</p></li>))}</ul>
      </div>
    )
  }
}

export default PostList;
