const Home = ({ posts }) => {
  return (
    <main>
      <h1>NextJS Text</h1>
      <h2>Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title.rendered}</li>
        ))}
      </ul>
    </main>
  );
};

export const getStaticProps = async () => {
  const res = await fetch(
    'https://sites.hostgrano.com.br/rodrigoguerra/wp-json/wp/v2/posts',
  );
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
};

export default Home;
