import React, { useEffect, useState } from 'react';
import Header from '../components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(res => res.json())
      .then(data => {
        setPosts(
          data.map((post: any) => ({
            title: post.title,
            content: post.body,
            userId: post.userId,
          }))
        );
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <main>
        <h1>Posts Page</h1>
        <p>This is the Posts page.</p>
        {loading ? (
          <p>Loading posts...</p>
        ) : (
          posts.map((post, idx) => (
            <PostCard
              key={idx}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))
        )}
      </main>
    </>
  );
}