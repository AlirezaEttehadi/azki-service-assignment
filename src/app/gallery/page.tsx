import Footer from '@assignment/components/Footer';
import Header from '@assignment/components/Header';
import ImageGallery from '@assignment/components/ImageGallery';
import mockImages from '@assignment/data/mock-images.data';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <Header />

      <main>
        <ImageGallery images={mockImages} />
      </main>

      <Footer />
    </div>
  );
}
