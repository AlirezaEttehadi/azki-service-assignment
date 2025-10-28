'use client';

import { type FC } from 'react';

import Card from '@assignment/components/Card';
import useImagePreloader from '@assignment/hooks/use-image-preloader.hook';
import { TMockImages } from '@assignment/models/gallery.model';

interface ImageGalleryProps {
  images: TMockImages;
}

const ImageGallery: FC<ImageGalleryProps> = ({ images }) => {
  useImagePreloader(images);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
      {images.map((image, index) => (
        <Card key={image.id} image={image} index={index} />
      ))}
    </div>
  );
};

export default ImageGallery;
