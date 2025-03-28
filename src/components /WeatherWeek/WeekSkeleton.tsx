export const WeekSkeleton = () => {
  return (
    <div className="flex justify-between gap-x-5 items-center w-full">
      {Array.from({ length: 7 }).map((_, idx) => (
        <div
          key={idx}
          className="w-full max-w-[100px] rounded-xl bg-white/80  px-3 py-5 shadow-xl"
        >
          <div className="flex flex-col gap-y-4 justify-center items-center animate-pulse">
            <div className="h-1 w-8 bg-gray-200"></div>
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
            <div className="h-1 w-12 bg-gray-200"></div>
          </div>
        </div>
      ))}
    </div>
  );
};
