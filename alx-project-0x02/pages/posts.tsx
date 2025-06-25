import React from 'react';
// eslint-disable-next-line import/no-absolute-path
import Header from '@/components/layout/Header';
import PostCard from '../components/common/PostCard';
import { PostProps } from '../interfaces';

interface PostsPageProps {
  posts: PostProps[];
}

export default function Posts({ posts }: PostsPageProps) {
  return (
    <>
      <Header />
      <main>
        <h1>Posts Page</h1>
        <p>This is the Posts page.</p>
        {posts.length === 0 ? (
          <p>No posts found.</p>
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

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const data = await res.json();
  const posts = data.map((post: any) => ({
    title: post.title,
    content: post.body,
    userId: post.userId,
  }));

  return {
    props: {
      posts,
    },
  };
}