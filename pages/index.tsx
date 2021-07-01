import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Layout from '@/components/Layout';
import client from '@/utils/apollo-client';

import { SITE_NAME } from '@/utils/constants';
import QUERY_POSTS from './posts.query.graphql';
import { Post } from '@/graphql/generated/types';

import heroImage from '../public/volcano.jpeg';

type IndexProps = {
  posts: Post[];
};

export const Index = ({ posts }: IndexProps): JSX.Element => {
  return (
    <Layout>
      <Head>
        <title>{SITE_NAME}</title>
      </Head>
      <section className="HomeHero w-4/5 h-screen overflow-hidden">
        <Image src={heroImage} layout="fixed" />
      </section>
      <div className="Section py-4">
        <section className="Mansory">
          {posts.map((post) => {
            return (
              <article key={post.slug} className="mt-12">
                <p className="dark:text-gray-400 mb-1 text-sm text-gray-500">
                  {/* {format(parseISO(post.date), 'MMMM dd, yyyy')} */}
                </p>
                <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
                  <a className="dark:text-white dark:hover:text-blue-400 text-gray-900">
                    <h1 className="mb-2 text-2xl font-semibold text-yellow-400">
                      {post.title}
                    </h1>
                  </a>
                </Link>
                <p className="mb-3">{post.description}</p>
                <p>
                  <Link as={`/blog/${post.slug}`} href={`/blog/[slug]`}>
                    <a>Read More</a>
                  </Link>
                </p>
              </article>
            );
          })}
        </section>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const { data } = await client.query({
    query: QUERY_POSTS,
  });

  return {
    props: {
      posts: data.posts,
    },
  };
}
export default Index;
