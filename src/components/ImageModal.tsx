'use client';

import Image from 'next/image';
import { type FC, useState } from 'react';

import CloseIcon from '@assignment/icons/CloseIcon';
import { IMockImage } from '@assignment/models/gallery.model';
import cn from '@assignment/utils/style.util';

import Modal from './Modal';

interface IImageModalProps {
  image: IMockImage;
  isOpen: boolean;
  onClose: () => void;
}

const ImageModal: FC<IImageModalProps> = ({ image, isOpen, onClose }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const renderCloseButton = () => {
    return (
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 cursor-pointer rounded-full border border-gray-200 bg-white/80 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl dark:border-gray-700 dark:bg-gray-800/80"
        aria-label="Close modal"
      >
        <CloseIcon />
      </button>
    );
  };

  const renderImageSection = () => {
    return (
      <div className="relative min-h-[50vh] flex-1 lg:min-h-full">
        <div className="relative h-full w-full">
          <Image
            src={image.imageUrl}
            alt={image.title}
            fill
            className={cn(`object-cover transition-opacity duration-500`, {
              'opacity-100': imageLoaded,
              'opacity-0': !imageLoaded,
            })}
            onLoad={() => setImageLoaded(true)}
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          {!imageLoaded && (
            <div className="absolute inset-0 flex animate-pulse items-center justify-center bg-gray-200 dark:bg-gray-800">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderDetailsSection = () => {
    return (
      <div className="w-full shrink-0 overflow-y-auto p-6 lg:w-96 lg:p-8">
        <div className="space-y-6">
          <div>
            <h1 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
              {image.title}
            </h1>
            <p className="mb-4 text-lg text-gray-600 dark:text-gray-300">
              {image.description}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                Location
              </h3>
              <p className="text-gray-900 dark:text-white">{image.location}</p>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                Date
              </h3>
              <p className="text-gray-900 dark:text-white">
                {new Date(image.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                Photographer
              </h3>
              <p className="text-gray-900 dark:text-white">
                {image.photographer}
              </p>
            </div>

            <div>
              <h3 className="mb-2 text-sm font-semibold tracking-wide text-gray-500 uppercase dark:text-gray-400">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {image.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800 dark:bg-blue-900/30 dark:text-blue-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-4 dark:border-gray-700">
            <button
              onClick={onClose}
              className="w-full cursor-pointer rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none dark:focus:ring-offset-gray-900"
            >
              Back to Gallery
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} className="max-w-6xl">
      {renderCloseButton()}

      <div className="flex h-full max-h-[90vh] flex-col lg:flex-row">
        {renderImageSection()}
        {renderDetailsSection()}
      </div>
    </Modal>
  );
};

export default ImageModal;
