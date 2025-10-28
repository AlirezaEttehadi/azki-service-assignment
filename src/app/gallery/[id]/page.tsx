'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

import ImageModal from '@assignment/components/ImageModal';
import mockImages from '@assignment/data/mock-images.data';

export default function ImagePage() {
  const params = useParams();
  const router = useRouter();

  // Find the image directly from params instead of using state
  const imageId = params.id as string;
  const image = mockImages.find((img) => img.id === imageId);

  useEffect(() => {
    if (!image) {
      // Redirect to gallery if image not found
      router.push('/gallery');
    }
  }, [image, router]);

  const handleClose = () => {
    router.push('/gallery');
  };

  if (!image) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <ImageModal image={image} isOpen={true} onClose={handleClose} />
    </div>
  );
}
