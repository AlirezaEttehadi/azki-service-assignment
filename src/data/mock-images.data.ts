import { TMockImages } from '@assignment/models/gallery.model';

const mockImages: TMockImages = [
  {
    id: 'mountain-peak-sunrise',
    title: 'Mountain Peak Sunrise',
    description:
      'A breathtaking sunrise view from the summit of Mount Aspiring, capturing the golden hour light illuminating the surrounding peaks and valleys.',
    tags: ['sunrise', 'mountain', 'summit', 'golden-hour'],
    location: 'Mount Aspiring, New Zealand',
    date: '2024-03-15',
    photographer: 'Sarah Chen',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    id: 'forest-trail-mist',
    title: 'Misty Forest Trail',
    description:
      'An ethereal morning mist weaving through ancient redwood trees, creating a mystical atmosphere perfect for quiet contemplation.',
    tags: ['forest', 'mist', 'morning', 'redwoods'],
    location: 'Redwood National Park, California',
    date: '2024-02-28',
    photographer: 'Marcus Rodriguez',
    imageUrl:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200&h=800&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop',
  },
  {
    id: 'alpine-lake-reflection',
    title: 'Crystal Clear Alpine Lake',
    description:
      "Perfect mirror reflection of snow-capped peaks in the pristine waters of Lake Louise, showcasing nature's perfect symmetry.",
    tags: ['lake', 'reflection', 'alpine', 'crystal-clear'],
    location: 'Lake Louise, Banff National Park',
    date: '2024-01-20',
    photographer: 'Emma Thompson',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    id: 'desert-canyon-hike',
    title: 'Desert Canyon Adventure',
    description:
      'Navigating through narrow slot canyons carved by centuries of water erosion, revealing stunning geological formations.',
    tags: ['desert', 'canyon', 'slot-canyon', 'geology'],
    location: 'Antelope Canyon, Arizona',
    date: '2024-04-10',
    photographer: 'David Kim',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    id: 'coastal-cliff-trail',
    title: 'Dramatic Coastal Cliffs',
    description:
      'Hiking along rugged coastal cliffs with waves crashing below, offering spectacular ocean views and fresh sea air.',
    tags: ['coastal', 'cliffs', 'ocean', 'dramatic'],
    location: 'Big Sur, California',
    date: '2024-03-05',
    photographer: 'Lisa Wang',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    id: 'waterfall-cascade',
    title: 'Majestic Waterfall Cascade',
    description:
      'A powerful waterfall cascading down moss-covered rocks, surrounded by lush green vegetation and misty air.',
    tags: ['waterfall', 'cascade', 'moss', 'lush'],
    location: 'Yosemite National Park, California',
    date: '2024-02-14',
    photographer: 'Alex Johnson',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    id: 'autumn-trail-colors',
    title: 'Autumn Trail Colors',
    description:
      "A winding trail through vibrant autumn foliage, showcasing nature's spectacular color palette of reds, oranges, and golds.",
    tags: ['autumn', 'foliage', 'colors', 'trail'],
    location: 'Great Smoky Mountains, Tennessee',
    date: '2023-11-08',
    photographer: 'Maria Garcia',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    id: 'snow-covered-peaks',
    title: 'Snow-Covered Mountain Peaks',
    description:
      'Majestic snow-covered peaks reaching toward the sky, creating a winter wonderland perfect for alpine adventures.',
    tags: ['snow', 'peaks', 'winter', 'alpine'],
    location: 'Swiss Alps, Switzerland',
    date: '2024-01-12',
    photographer: 'Thomas Mueller',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    id: 'meadow-wildflowers',
    title: 'Mountain Meadow Wildflowers',
    description:
      'A colorful alpine meadow filled with wildflowers, creating a natural tapestry of colors against the mountain backdrop.',
    tags: ['meadow', 'wildflowers', 'alpine', 'colorful'],
    location: 'Rocky Mountain National Park, Colorado',
    date: '2024-07-22',
    photographer: 'Jennifer Lee',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    id: 'night-sky-stars',
    title: 'Starry Night Sky',
    description:
      'A clear night sky filled with countless stars, captured during a camping trip in the remote wilderness.',
    tags: ['night-sky', 'stars', 'camping', 'wilderness'],
    location: 'Death Valley National Park, California',
    date: '2024-06-15',
    photographer: "Ryan O'Connor",
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    id: 'river-crossing-bridge',
    title: 'Suspension Bridge River Crossing',
    description:
      'A historic suspension bridge spanning a rushing mountain river, offering both adventure and stunning valley views.',
    tags: ['bridge', 'river', 'suspension', 'historic'],
    location: 'Capilano Suspension Bridge, British Columbia',
    date: '2024-05-18',
    photographer: 'Amanda Foster',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
  {
    id: 'volcanic-landscape',
    title: 'Volcanic Landscape Trail',
    description:
      "Hiking through ancient volcanic terrain with unique rock formations and sparse vegetation, showcasing Earth's geological history.",
    tags: ['volcanic', 'landscape', 'geology', 'unique'],
    location: 'Lassen Volcanic National Park, California',
    date: '2024-08-30',
    photographer: 'Carlos Mendez',
    imageUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
  },
];

export default mockImages;
