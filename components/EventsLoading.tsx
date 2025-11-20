const SkeletonCard = () => (
  <div className="bg-gray-800/40 border border-gray-700/60 rounded-lg shadow-md overflow-hidden">
    <div className="animate-pulse">
      {/* Image Placeholder */}
      <div className="w-full h-48 bg-gray-700"></div>
      <div className="p-4 space-y-3">
        {/* Title Placeholder */}
        <div className="h-6 bg-gray-700 rounded w-3/4"></div>
        {/* Date/Time Placeholder */}
        <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        {/* Location Placeholder */}
        <div className="h-4 bg-gray-700 rounded w-1/3"></div>
      </div>
    </div>
  </div>
);

export default function EventsLoading() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <li key={index} className="list-none">
          <SkeletonCard />
        </li>
      ))}
    </ul>
  );
}