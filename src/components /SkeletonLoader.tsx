export const SkeletonLoader = () => {
  return (
    <div className="animate-pulse p-6 space-y-4">
      <div className="h-6 bg-gray-300 rounded w-1/3"></div>
      <div className="h-4 bg-gray-300 rounded w-2/3"></div>
      <div className="h-4 bg-gray-200 rounded w-full"></div>
    </div>
  );
};
