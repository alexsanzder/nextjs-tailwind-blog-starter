import gql from 'graphql-tag';
import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/router'
import { QueryHookOptions, useQuery } from '@apollo/client';
import * as Apollo from '@apollo/client';
import type React from 'react';
import type { NormalizedCacheObject } from '@apollo/client';
export const PostsBySlugDocument = gql`
    query PostsBySlug($slug: String) {
  posts(where: {slug: $slug}) {
    title
    description
    content
  }
}
    `;
export async function getServerPagePostsBySlug
    (options: Omit<Apollo.QueryOptions<PostsBySlugQueryVariables>, 'query'>, apolloClient: Apollo.ApolloClient<NormalizedCacheObject> ){
        
        
        const data = await apolloClient.query<PostsBySlugQuery>({ ...options, query: PostsBySlugDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const usePostsBySlug = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<PostsBySlugQuery, PostsBySlugQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(PostsBySlugDocument, options);
};
export type PagePostsBySlugComp = React.FC<{data?: PostsBySlugQuery, error?: Apollo.ApolloError}>;
export const withPagePostsBySlug = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<PostsBySlugQuery, PostsBySlugQueryVariables>) => (WrappedComponent:PagePostsBySlugComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(PostsBySlugDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrPostsBySlug = {
      getServerPage: getServerPagePostsBySlug,
      withPage: withPagePostsBySlug,
      usePage: usePostsBySlug,
    }
export const PostsDocument = gql`
    query Posts {
  posts {
    slug
    title
    description
    content
  }
}
    `;
export async function getServerPagePosts
    (options: Omit<Apollo.QueryOptions<PostsQueryVariables>, 'query'>, apolloClient: Apollo.ApolloClient<NormalizedCacheObject> ){
        
        
        const data = await apolloClient.query<PostsQuery>({ ...options, query: PostsDocument });
        
        const apolloState = apolloClient.cache.extract();

        return {
            props: {
                apolloState: apolloState,
                data: data?.data,
                error: data?.error ?? data?.errors ?? null,
            },
        };
      }
export const usePosts = (
  optionsFunc?: (router: NextRouter)=> QueryHookOptions<PostsQuery, PostsQueryVariables>) => {
  const router = useRouter();
  const options = optionsFunc ? optionsFunc(router) : {};
  return useQuery(PostsDocument, options);
};
export type PagePostsComp = React.FC<{data?: PostsQuery, error?: Apollo.ApolloError}>;
export const withPagePosts = (optionsFunc?: (router: NextRouter)=> QueryHookOptions<PostsQuery, PostsQueryVariables>) => (WrappedComponent:PagePostsComp) : NextPage  => (props) => {
                const router = useRouter()
                const options = optionsFunc ? optionsFunc(router) : {};
                const {data, error } = useQuery(PostsDocument, options)    
                return <WrappedComponent {...props} data={data} error={error} /> ;
                   
            }; 
export const ssrPosts = {
      getServerPage: getServerPagePosts,
      withPage: withPagePosts,
      usePage: usePosts,
    }