import { useState, useEffect } from 'react';
import { Instagram, ExternalLink, Loader2 } from 'lucide-react';

interface InstagramPost {
  url: string;
  description?: string;
  type?: 'photo' | 'video' | 'reel';
}

interface InstagramFeedProps {
  accountHandle?: string; // e.g., 'shivaopticsplus' (without @)
  postUrls?: string[]; // Direct post URLs
  maxPosts?: number;
  title?: string;
}

export default function InstagramFeed({ 
  accountHandle, 
  postUrls = [], 
  maxPosts = 9,
  title = 'Latest Instagram Posts'
}: InstagramFeedProps) {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        // If post URLs are provided, use them directly
        if (postUrls.length > 0) {
          const formattedPosts: InstagramPost[] = postUrls.slice(0, maxPosts).map(url => ({
            url: url.startsWith('http') ? url : `https://www.instagram.com/p/${url}/`,
            type: url.includes('/reel/') ? 'reel' : url.includes('/tv/') ? 'video' : 'photo'
          }));
          setPosts(formattedPosts);
          setLoading(false);
          return;
        }

        // If account handle is provided, try to fetch posts
        // Note: Instagram's API requires authentication, so we'll use a workaround
        // For now, we'll show a message that posts need to be added manually
        if (accountHandle) {
          // In a real implementation, you'd need:
          // 1. Instagram Basic Display API with user token
          // 2. Or Instagram Graph API with Facebook app
          // 3. Or a backend service that fetches posts
          
          // For now, we'll show that posts can be added via URLs
          setError('To display live posts, please add Instagram post URLs. Instagram API requires authentication.');
          setLoading(false);
        } else {
          setPosts([]);
          setLoading(false);
        }
      } catch (err) {
        setError('Failed to load Instagram posts');
        setLoading(false);
      }
    };

    fetchPosts();
  }, [accountHandle, postUrls, maxPosts]);

  const getPostId = (url: string) => {
    // Extract post ID from various Instagram URL formats
    const patterns = [
      /\/p\/([A-Za-z0-9_-]+)/,
      /\/reel\/([A-Za-z0-9_-]+)/,
      /\/tv\/([A-Za-z0-9_-]+)/
    ];
    
    for (const pattern of patterns) {
      const match = url.match(pattern);
      if (match) return match[1];
    }
    return null;
  };

  const getEmbedUrl = (url: string) => {
    const postId = getPostId(url);
    if (!postId) return null;
    
    // Check if it's a reel
    if (url.includes('/reel/')) {
      return `https://www.instagram.com/reel/${postId}/embed/`;
    }
    
    return `https://www.instagram.com/p/${postId}/embed/`;
  };

  if (loading) {
    return (
      <div className="py-12 flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-gold animate-spin" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-12 text-center">
        <p className="text-gray-400 mb-4">{error}</p>
        <p className="text-sm text-gray-500">
          Add Instagram post URLs to display posts. Format: https://www.instagram.com/p/POST_ID/
        </p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="py-12 text-center">
        <Instagram className="w-12 h-12 text-gray-600 mx-auto mb-4" />
        <p className="text-gray-400">No Instagram posts available</p>
        <p className="text-sm text-gray-500 mt-2">
          Add post URLs to display client content
        </p>
      </div>
    );
  }

  return (
    <div className="py-8">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
        <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-gold" />
        <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
        {accountHandle && (
          <a
            href={`https://www.instagram.com/${accountHandle}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal hover:text-gold transition-colors text-xs sm:text-sm flex items-center gap-1"
          >
            @{accountHandle}
            <ExternalLink className="w-3 h-3" />
          </a>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
        {posts.map((post, index) => {
          const embedUrl = getEmbedUrl(post.url);
          
          return (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden hover:border-gold/50 transition-all duration-300 group"
            >
              {embedUrl ? (
                <div className="aspect-square relative">
                  <iframe
                    src={embedUrl}
                    className="w-full h-full border-0"
                    allow="encrypted-media"
                    title={`Instagram post ${index + 1}`}
                    loading="lazy"
                  />
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 flex items-center justify-center"
                  >
                    <ExternalLink className="w-6 h-6 text-white" />
                  </a>
                </div>
              ) : (
                <a
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 hover:bg-white/10 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Instagram className="w-6 h-6 text-gold" />
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </div>
                  {post.description && (
                    <p className="text-sm text-gray-300 mt-2">{post.description}</p>
                  )}
                  <p className="text-xs text-teal mt-3 truncate">{post.url}</p>
                </a>
              )}
            </div>
          );
        })}
      </div>

      {accountHandle && (
        <div className="mt-6 text-center">
          <a
            href={`https://www.instagram.com/${accountHandle}/`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-teal hover:text-gold transition-colors"
          >
            View all posts on Instagram
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      )}
    </div>
  );
}

