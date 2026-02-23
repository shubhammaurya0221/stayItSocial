# Instagram Posts Setup Guide

## How to Add Instagram Posts to Case Studies

### Option 1: Add Instagram Post URLs (Recommended)

Add specific Instagram post URLs directly to each case study. This works for photos, videos, and reels.

**Format:**
```typescript
instagramPosts: [
  { url: 'https://www.instagram.com/p/POST_ID/', description: 'Optional description' },
  { url: 'https://www.instagram.com/reel/REEL_ID/', description: 'Reel post' },
  { url: 'https://www.instagram.com/p/ANOTHER_POST_ID/' }
]
```

**Example:**
```typescript
{
  id: 1,
  brand: 'Shiva Optics Plus',
  // ... other fields
  instagramPosts: [
    { url: 'https://www.instagram.com/p/ABC123xyz/', description: 'Product showcase' },
    { url: 'https://www.instagram.com/reel/DEF456uvw/', description: 'Promotional reel' }
  ]
}
```

### Option 2: Add Instagram Account Handle (For Future API Integration)

Add the Instagram account handle (without @) to display account info and prepare for API integration.

```typescript
{
  id: 1,
  brand: 'Shiva Optics Plus',
  // ... other fields
  instagramHandle: 'shivaopticsplus'
}
```

## Getting Instagram Post URLs

1. Go to the Instagram post you want to display
2. Click the three dots (⋯) in the top right
3. Click "Copy link"
4. Paste the URL into the `instagramPosts` array

## Supported URL Formats

- Regular posts: `https://www.instagram.com/p/POST_ID/`
- Reels: `https://www.instagram.com/reel/REEL_ID/`
- IGTV: `https://www.instagram.com/tv/VIDEO_ID/`

## Notes

- Posts are embedded using Instagram's oEmbed API
- Posts will display in a responsive grid (1-3 columns based on screen size)
- Clicking on posts opens them in a new tab on Instagram
- For truly "live" automatic updates, you'll need to set up Instagram API (requires authentication)

