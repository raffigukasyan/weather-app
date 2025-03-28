export const WeatherSummarySkeleton = () => {
  return (
    <div className="flex justify-center items-start gap-y-7 w-full flex-col animate-pulse">
      <div className="w-xs h-90 bg-gray-200 rounded-xl"></div>
      <div className='flex flex-col gap-y-5'>
        <div className="w-30 h-30 bg-gray-200"></div>
        <div className="w-30 h-5 bg-gray-200"></div>
      </div>
      <div className='w-full h-1 bg-gray-200'></div>
      <div className='flex flex-col gap-y-3'>
        <div className="w-30 h-5 bg-gray-200"></div>
        <div className="w-30 h-5 bg-gray-200"></div>
      </div>
      <div className='w-full h-25 rounded-xl bg-gray-200'>

      </div>
    </div>
  );
};
