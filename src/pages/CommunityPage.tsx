import { useState } from 'react';
import Card from '../components/Card';
import { communityPosts } from '../data/mockData';

const CommunityPage = () => {
  const [post, setPost] = useState('');

  return (
    <div className="space-y-4">
      <Card title="Safe community space">
        <p className="mb-3 text-sm text-rose-700">Post anonymously or use your first name. Kind and respectful support only.</p>
        <textarea
          placeholder="Share your feeling or ask for support..."
          className="min-h-24 w-full rounded-xl border border-rose-200 p-3 text-sm"
          value={post}
          onChange={(event) => setPost(event.target.value)}
        />
        <button className="mt-3 w-full rounded-xl bg-calm-600 p-3 text-sm font-semibold text-white" type="button">
          Share safely
        </button>
      </Card>

      <Card title="Support categories">
        <div className="flex flex-wrap gap-2 text-xs">
          {['pregnancy journey', 'new motherhood', 'emotional support', 'questions and advice'].map((category) => (
            <span key={category} className="rounded-full bg-calm-100 px-3 py-1 text-calm-700">
              {category}
            </span>
          ))}
        </div>
      </Card>

      <div className="space-y-3">
        {communityPosts.map((item) => (
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
