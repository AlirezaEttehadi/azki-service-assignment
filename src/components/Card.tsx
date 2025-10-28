'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { type FC } from 'react';

import { IMockImage } from '@assignment/models/gallery.model';

interface ICardProps {
  image: IMockImage;
  index: number;
}

const Card: FC<ICardProps> = ({ image, index }) => {
  const router = useRouter();

  const handleImageClick = () => {
    router.push(`/gallery/${image.id}`);
  };

  const renderImageSection = () => {
    return (
      <div className="relative aspect-square overflow-hidden">
        <Image
          src={image.thumbnailUrl}
          alt={image.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          priority={index < 4}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute right-4 bottom-4 left-4 translate-y-4 transform text-white opacity-0 transition-transform duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="mb-1 line-clamp-2 text-lg font-semibold">
            {image.title}
          </h3>
          <p className="line-clamp-2 text-sm text-gray-200">{image.location}</p>
        </div>
      </div>
    );
  };

  const renderCaptionSection = () => {
    return (
      <div className="p-4">
        <h3 className="mb-2 line-clamp-2 font-semibold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
          {image.title}
        </h3>
        <p className="mb-3 line-clamp-2 text-sm text-gray-600 dark:text-gray-300">
          {image.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {image.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
          {image.tags.length > 3 && (
            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300">
              +{image.tags.length - 3}
            </span>
          )}
        </div>
      </div>
    );
  };

  return (
    <div
      key={image.id}
      className="group relative transform cursor-pointer overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-gray-800"
      onClick={handleImageClick}
    >
      {renderImageSection()}
      {renderCaptionSection()}
    </div>
  );
};

export default Card;
