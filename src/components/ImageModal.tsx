'use client';

import Image from 'next/image';
import { type FC, useState } from 'react';

import CloseIcon from '@assignment/icons/CloseIcon';
import { IMockImage } from '@assignment/models/gallery.model';

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
        className="absolute cursor-pointer top-4 right-4 z-10 p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        aria-label="Close modal"
      >
        <CloseIcon />
      </button>
    );
  };

  const renderImageSection = () => {
    return (
      <div className="relative flex-1 min-h-[50vh] lg:min-h-full">
        <div className="relative w-full h-full">
          <Image
            src={image.imageUrl}
            alt={image.title}
            fill
            className={`object-cover transition-opacity duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            priority
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
            </div>
          )}
        </div>
      </div>
    );
  };

  const renderDetailsSection = () => {
    return (
      <div className="shrink-0 w-full lg:w-96 p-6 lg:p-8 overflow-y-auto">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {image.title}
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              {image.description}
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                Location
              </h3>
              <p className="text-gray-900 dark:text-white">{image.location}</p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
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
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                Photographer
              </h3>
              <p className="text-gray-900 dark:text-white">
                {image.photographer}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {image.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
            <button
              onClick={onClose}
              className="w-full px-6 py-3 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900"
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

      <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">
        {renderImageSection()}
        {renderDetailsSection()}
      </div>
    </Modal>
  );
};

export default ImageModal;
