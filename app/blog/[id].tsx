import { GetStaticProps, GetStaticPaths } from 'next';
import { getAllPostIds, getPostData, PostData } from '@/lib/posts';

interface PostProps {
  postData: PostData;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params?.id as string);
  return {
    props: {
      postData,
    },
  };
};

const Post: React.FC<PostProps> = ({ postData }) => {
  return (
    <article>
      <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
      <div className="text-gray-600">{postData.date}</div>
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </article>
  );
};

export default Post;
