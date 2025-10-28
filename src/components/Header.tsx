const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white">
            Hiking Adventures Gallery
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Discover breathtaking landscapes, serene trails, and unforgettable
            moments from hiking adventures around the world.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
