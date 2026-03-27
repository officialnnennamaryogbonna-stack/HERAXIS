import { useMemo, useState } from 'react';
import Card from '../components/Card';
import { communityPosts as seedPosts } from '../data/mockData';
import { communityPosts } from '../data/mockData';
import { CommunityPost } from '../types';

const categories: CommunityPost['category'][] = [
  'pregnancy journey',
  'new mum life',
  'postpartum recovery',
  'baby care',
  'emotional support'
];

const CommunityPage = ({ onNotify }: { onNotify: (message: string) => void }) => {
  const [posts, setPosts] = useState<CommunityPost[]>(seedPosts);
  const [post, setPost] = useState('');
  const [author, setAuthor] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [category, setCategory] = useState<CommunityPost['category']>('emotional support');
  const [activeCategory, setActiveCategory] = useState<CommunityPost['category'] | 'all'>('all');
  const [activePost, setActivePost] = useState<CommunityPost | null>(null);
  const [isSaving, setIsSaving] = useState(false);

  const filteredPosts = useMemo(
    () => (activeCategory === 'all' ? posts : posts.filter((item) => item.category === activeCategory)),
    [activeCategory, posts]
  );

  const handleSubmit = () => {
    if (!post.trim()) {
      onNotify('Please write something before posting.');
      return;
    }

    setIsSaving(true);
    window.setTimeout(() => {
      const newPost: CommunityPost = {
        id: `c-${Date.now()}`,
        author: isAnonymous ? 'Anonymous' : author.trim() || 'First name only',
        category,
        message: post.trim(),
        hearts: 0,
        comments: 0
      };
      setPosts((current) => [newPost, ...current]);
      setPost('');
      setAuthor('');
      setIsSaving(false);
      onNotify('Post published to community 💛');
    }, 700);
  };

  const reactToPost = (id: string) => {
    setPosts((current) => current.map((item) => (item.id === id ? { ...item, hearts: item.hearts + 1 } : item)));
    onNotify('You sent support 💛');
  };

  return (
    <div className="space-y-4">
      <Card title="Supportive community forum">
        <p className="mb-3 text-sm text-rose-700">Share experiences and encouragement in a safe, moderated-feel space.</p>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wide text-calm-600">Category</label>
        <select value={category} onChange={(event) => setCategory(event.target.value as CommunityPost['category'])} className="mb-3 w-full rounded-xl border border-rose-200 p-2 text-sm">
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        {!isAnonymous && (
          <input
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
            className="mb-2 w-full rounded-xl border border-rose-200 p-3 text-sm"
            placeholder="Your first name"
          />
        )}
const CommunityPage = () => {
  const [post, setPost] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(true);
  const [activeCategory, setActiveCategory] = useState<CommunityPost['category'] | 'all'>('all');

  const filteredPosts = useMemo(
    () => (activeCategory === 'all' ? communityPosts : communityPosts.filter((item) => item.category === activeCategory)),
    [activeCategory]
  );

  return (
    <div className="space-y-4">
      <Card title="Supportive community forum">
        <p className="mb-3 text-sm text-rose-700">
          Share experiences, ask questions, and encourage one another in a warm, moderated-feel space.
        </p>
        <textarea
          placeholder="Share your story or ask for support..."
          className="min-h-24 w-full rounded-xl border border-rose-200 p-3 text-sm"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />
        <label className="mt-2 flex items-center gap-2 text-sm text-calm-700">
          <input type="checkbox" checked={isAnonymous} onChange={(event) => setIsAnonymous(event.target.checked)} />
          Post anonymously
        </label>
        <button className="mt-3 w-full rounded-xl bg-calm-600 p-3 text-sm font-semibold text-white disabled:opacity-60" type="button" onClick={handleSubmit} disabled={isSaving}>
          {isSaving ? 'Publishing...' : 'Publish post'}
        <button className="mt-3 w-full rounded-xl bg-calm-600 p-3 text-sm font-semibold text-white" type="button">
          {isAnonymous ? 'Share anonymously' : 'Share with first name'}
        </button>
      </Card>

      <Card title="Browse categories">
        <div className="flex flex-wrap gap-2 text-xs">
          <button
            className={`rounded-full px-3 py-1 ${activeCategory === 'all' ? 'bg-calm-600 text-white' : 'bg-calm-100 text-calm-700'}`}
            onClick={() => setActiveCategory('all')}
            type="button"
          >
            all
          </button>
          {categories.map((item) => (
            <button
              key={item}
              className={`rounded-full px-3 py-1 ${activeCategory === item ? 'bg-calm-600 text-white' : 'bg-calm-100 text-calm-700'}`}
              onClick={() => setActiveCategory(item)}
              type="button"
            >
              {item}
          {categories.map((category) => (
            <button
              key={category}
              className={`rounded-full px-3 py-1 ${activeCategory === category ? 'bg-calm-600 text-white' : 'bg-calm-100 text-calm-700'}`}
              onClick={() => setActiveCategory(category)}
              type="button"
            >
              {category}
            </button>
          ))}
        </div>
      </Card>

      {filteredPosts.length === 0 ? (
        <Card title="No posts yet">
          <p className="text-sm text-rose-700">No posts in this category yet. You can be the first to share support.</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {filteredPosts.map((item) => (
            <Card key={item.id}>
              <p className="text-xs uppercase tracking-wide text-calm-600">{item.category}</p>
              <p className="mt-1 text-sm font-semibold text-calm-700">{item.author}</p>
              <p className="mt-2 text-sm text-rose-700">{item.message}</p>
              <div className="mt-3 flex gap-2">
                <button className="rounded-lg bg-calm-100 px-3 py-1 text-xs font-semibold text-calm-700" onClick={() => reactToPost(item.id)} type="button">
                  💛 {item.hearts}
                </button>
                <button className="rounded-lg bg-rose-100 px-3 py-1 text-xs font-semibold text-rose-700" onClick={() => setActivePost(item)} type="button">
                  Open thread ({item.comments})
                </button>
              </div>
            </Card>
          ))}
        </div>
      )}

      {activePost && (
        <div className="fixed inset-0 z-50 flex items-end bg-black/40">
          <div className="w-full rounded-t-3xl bg-white p-4">
            <p className="text-xs uppercase tracking-wide text-calm-600">{activePost.category}</p>
            <h3 className="mt-1 text-base font-semibold text-calm-700">{activePost.author}</h3>
            <p className="mt-2 text-sm text-rose-700">{activePost.message}</p>
            <p className="mt-2 text-xs text-calm-600">Comments are coming soon (read-only in MVP).</p>
            <button className="mt-4 w-full rounded-xl bg-calm-600 p-3 text-sm font-semibold text-white" type="button" onClick={() => setActivePost(null)}>
              Close thread
            </button>
          </div>
        </div>
      )}
      <div className="space-y-3">
        {filteredPosts.map((item) => (
          <Card key={item.id}>
            <p className="text-xs uppercase tracking-wide text-calm-600">{item.category}</p>
            <p className="mt-1 text-sm font-semibold text-calm-700">{item.author}</p>
            <p className="mt-2 text-sm text-rose-700">{item.message}</p>
            <p className="mt-2 text-xs text-rose-500">💛 {item.hearts} supportive hearts</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CommunityPage;
