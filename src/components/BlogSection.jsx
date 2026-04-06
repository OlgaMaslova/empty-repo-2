import './BlogSection.css';

const posts = [
  {
    id: 1,
    title: 'Introducing Supernaut',
    slug: 'introducing-supernaut',
    date: '2025-06-10',
    excerpt:
      'Supernaut is an AI-powered development assistant built to accelerate how teams plan, write, and ship software. Say hello to a smarter way to build.',
  },
];

function BlogCard({ post }) {
  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="blog-card">
      <h2 className="blog-card__title">{post.title}</h2>
      <time className="blog-card__date" dateTime={post.date}>
        {formattedDate}
      </time>
      <p className="blog-card__excerpt">{post.excerpt}</p>
      <a className="blog-card__link" href="#">
        Read more
      </a>
    </article>
  );
}

export default function BlogSection() {
  return (
    <section className="blog-section">
      <h1 className="blog-section__heading">Blog</h1>
      <div className="blog-section__grid">
        {posts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </section>
  );
}
