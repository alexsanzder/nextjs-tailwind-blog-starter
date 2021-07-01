import Link from 'next/link';
import client from '@/utils/apollo-client';

import Layout from '@/components/Layout';

import QUERY_POSTS from '../posts.query.graphql';
import QUERY_POST_BY_SLUG from './post_by_slug.query.graphql';

import { MetaProps } from '@/types/meta';
import { Post as PostType } from '@/graphql/generated/types';

type PostProps = {
  post: PostType;
};

export const Post = ({ post }: PostProps): JSX.Element => {
  const customMeta: MetaProps = {
    title: post.title,
    description: post.description,
    image: post.image?.url,
    published_at: post.published_at,
    type: 'article',
  };

  return (
    <Layout customMeta={customMeta}>
      <article>
        <h1 className="text-2xl text-yellow-500">{post.title}</h1>
        <p>{post.content}</p>
      </article>
    </Layout>
  );
};

// tell next.js how many pages there are
export async function getStaticPaths() {
  const { data } = await client.query({
    query: QUERY_POSTS,
  });

  const paths = data.posts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

// for each individual page: get the data for that page
export async function getStaticProps({ params }: any) {
  const { slug } = params;
  const { data } = await client.query({
    query: QUERY_POST_BY_SLUG,
    variables: { slug },
  });

  return {
    props: { post: data.posts[0] },
  };
}

export default Post;
