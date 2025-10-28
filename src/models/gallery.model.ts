interface IMockImage {
  id: string;
  title: string;
  description: string;
  tags: Array<string>;
  location: string;
  date: string;
  photographer: string;
  imageUrl: string;
  thumbnailUrl: string;
}

type TMockImages = Array<IMockImage>;

export type { IMockImage, TMockImages };
