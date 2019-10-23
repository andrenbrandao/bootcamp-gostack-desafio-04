import React, { Component } from 'react';

import './PostList.css';

import Post from './Post';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'André Brandão',
          avatar: 'https://avatars0.githubusercontent.com/u/3364098?v=4',
        },
        date: '04 Jun 2019',
        content: 'Pessoal, alguém sabe se a Rocketseat está contratando?',
        comments: [
          {
            id: 1,
            author: {
              name: 'Diego Fernandes',
              avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
      {
        id: 2,
        author: {
          name: 'Diego Fernandes',
          avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        },
        date: '10 Jun 2019',
        content:
          'Fala Dev! Quem aqui está preparado pra próxima Semana Omnistack?',
        comments: [
          {
            id: 1,
            author: {
              name: 'André Brandão',
              avatar: 'https://avatars0.githubusercontent.com/u/3364098?v=4',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
      {
        id: 3,
        author: {
          name: 'Diego Fernandes',
          avatar: 'https://avatars2.githubusercontent.com/u/2254731?v=4',
        },
        date: '13 Jun 2019',
        content: 'Fala Dev! Mais algum dúvida por aqui hoje?',
        comments: [
          {
            id: 1,
            author: {
              name: 'André Brandão',
              avatar: 'https://avatars0.githubusercontent.com/u/3364098?v=4',
            },
            content: 'Conteúdo do comentário',
          },
        ],
      },
    ],
  };

  render() {
    const { posts } = this.state;

    return (
      <div id="post-list">
        <ul>
          {posts.map(post => (
            <Post key={post.id} data={post} />
          ))}
        </ul>
      </div>
    );
  }
}

export default PostList;
