import Parser from 'rss-parser';

export async function getStaticProps() {
  const parser = new Parser();
  const feed = await parser.parseURL('https://news.google.com/rss/search?q=technology+AI&hl=en-IN&gl=IN&ceid=IN:en');
  return { props: { posts: feed.items || [] }, revalidate: 3600 };
}

export default function Home({ posts }) {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>TechTrends Daily</h1>
      <p>Latest Tech & AI News Updated Automatically</p>
      <div style={{ background: '#f4f4f4', padding: '15px', textAlign: 'center', margin: '20px 0', borderRadius: '5px' }}>
        <small>AdSense Ad Slot</small>
      </div>
      {posts.map((post, i) => (
        <div key={i} style={{ marginBottom: '20px', borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>
          <h3><a href={post.link} target="_blank" rel="noopener noreferrer" style={{ color: '#0066cc', textDecoration: 'none' }}>{post.title}</a></h3>
          <small>{new Date(post.pubDate).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
}
