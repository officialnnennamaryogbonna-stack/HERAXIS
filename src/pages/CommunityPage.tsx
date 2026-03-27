import { useMemo, useState } from 'react';
import Card from '../components/Card';
import { communityPosts } from '../data/mockData';
import { CommunityPost } from '../types';

const categories: CommunityPost['category'][] = [
  'pregnancy journey',
  'new mum life',
  'postpartum recovery',
  'baby care',
  'emotional support'
];

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
