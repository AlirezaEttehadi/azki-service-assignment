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
        <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
          <h3 className="font-semibold text-lg mb-1 line-clamp-2">
            {image.title}
          </h3>
          <p className="text-sm text-gray-200 line-clamp-2">{image.location}</p>
        </div>
      </div>
    );
  };

  const renderCaptionSection = () => {
    return (
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
          {image.title}
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2">
          {image.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {image.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
          {image.tags.length > 3 && (
            <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
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
      className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
      onClick={handleImageClick}
    >
      {renderImageSection()}
      {renderCaptionSection()}
    </div>
  );
};

export default Card;
