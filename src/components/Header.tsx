const Header = () => {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hiking Adventures Gallery
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover breathtaking landscapes, serene trails, and unforgettable
            moments from hiking adventures around the world.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
