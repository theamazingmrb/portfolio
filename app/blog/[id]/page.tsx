import { getPostData, getAllPostIds, PostData } from '@/lib/posts';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

interface PostProps {
  postData: PostData;
}

const fetchPostData = async (id: string): Promise<PostData> => {
  const postData = await getPostData(id);
  return postData;
};

const Post = async ({ params }: { params: { id: string } }) => {
  const postData = await fetchPostData(params.id);

  return (
    <>
      <Navbar />
      <article className="min-h-screen bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
          <div className="text-gray-500 mb-4">{postData.date}</div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml || '' }} />
        </div>
      </article>
      <Footer />
    </>
  );
};

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths.map(path => ({ id: path.params.id }));
}

export default Post;
