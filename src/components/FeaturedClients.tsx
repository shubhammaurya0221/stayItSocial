import { Instagram, ArrowRight, ExternalLink } from 'lucide-react';

interface FeaturedClient {
  id: number;
  brand: string;
  category: string;
  description: string;
  instagramHandle?: string;
  instagramPosts?: string[];
  gradient: string;
}

// Featured clients that will show on homepage with Instagram posts
const featuredClients: FeaturedClient[] = [
  {
    id: 1,
    brand: 'Cricstudioinc',
    category: 'Sports Content',
    description: 'Cricket content & brand building - Building a strong community around sports content and engagement',
    gradient: 'from-teal/20 to-gold/20',
    instagramHandle: 'cricstudioinc',
    instagramPosts: []
  },
  {
    id: 2,
    brand: 'Shiva Optics Plus',
    category: 'Premium Eyewear',
    description: 'Transforming premium eyewear brand presence with sophisticated, minimal design',
    gradient: 'from-gold/20 to-teal/20',
    instagramHandle: 'shivaoptics',
    instagramPosts: []
  },
  {
    id: 3,
    brand: 'Shiva Enterprise',
    category: 'E-commerce',
    description: 'Modern eyewear e-commerce social strategy - Thoughtfully selected products that complement collections',
    gradient: 'from-teal/20 to-gold/20',
    instagramHandle: 'shivaenterprise.in',
    instagramPosts: []
  },
  {
    id: 4,
    brand: 'The Quick Craft',
    category: 'AI & VR Solutions',
    description: 'AI-powered design & VR solutions - Leveraging AI and human creativity for design projects',
    gradient: 'from-gold/20 to-teal/20',
    instagramHandle: 'tqc.official',
    instagramPosts: []
  }
];

export default function FeaturedClients() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-black via-teal/5 to-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gold">Clients</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Transformative social media campaigns that drive real business results
          </p>
          <a
            href="#all-clients"
            className="inline-flex items-center gap-2 text-teal hover:text-gold transition-colors"
          >
            View All Clients
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        <div className="space-y-16">
          {featuredClients.map((client) => {
            return (
              <div
                key={client.id}
                className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${client.gradient} border border-white/10 transition-all duration-500`}
              >
                <div className="p-8 md:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-sm text-gray-300 mb-3">
                        {client.category}
                      </span>
                      <h3 className="text-3xl md:text-4xl font-bold mb-2">{client.brand}</h3>
                      <p className="text-gray-300 text-lg">{client.description}</p>
                    </div>
                    {client.instagramHandle && (
                      <a
                        href={`https://www.instagram.com/${client.instagramHandle}/`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-teal hover:text-gold transition-colors"
                      >
                        <Instagram className="w-6 h-6" />
                        <span className="hidden md:inline">@{client.instagramHandle}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

