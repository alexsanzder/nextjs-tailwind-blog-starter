import { Maybe, Post as PostType } from '@/graphql/generated/types';

export interface MetaProps
  extends Pick<PostType, 'published_at' | 'title' | 'description'> {
  description?: Maybe<string> | undefined;
  image?: string;
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}
