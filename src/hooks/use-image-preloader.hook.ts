import { useEffect } from 'react';

import { TMockImages } from '@assignment/models/gallery.model';

const useImagePreloader = (images: TMockImages) => {
  useEffect(() => {
    // Preload the first few images for better UX
    const imagesToPreload = images.slice(0, 6);

    imagesToPreload.forEach((image) => {
      const img = new Image();
      img.src = image.thumbnailUrl;

      // Also preload the full-size image for better modal experience
      const fullImg = new Image();
      fullImg.src = image.imageUrl;
    });
  }, [images]);
};

export default useImagePreloader;
