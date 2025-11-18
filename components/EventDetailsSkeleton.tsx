const SkeletonCard = () => (
    <div className="flex flex-col gap-4">
        <div className="skeleton h-48 w-full rounded-lg"></div>
        <div className="flex flex-col gap-2">
            <div className="skeleton h-4 w-4/5 rounded"></div>
            <div className="skeleton h-4 w-1/2 rounded"></div>
            <div className="skeleton h-4 w-1/3 rounded"></div>
        </div>
    </div>
);

const EventDetailsSkeleton = () => {
    return (
        <div className="space-y-12">
            {/* Main Event Details Skeleton */}
            <section className="animate-pulse">
                <div className="skeleton h-72 w-full rounded-xl md:h-96"></div>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div className="flex flex-col gap-6">
                        <div className="skeleton h-10 w-3/4 rounded"></div>
                        <div className="skeleton h-6 w-1/2 rounded"></div>
                        <div className="skeleton h-6 w-1/3 rounded"></div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <div className="skeleton h-5 w-1/4 rounded"></div>
                        <div className="skeleton h-4 w-full rounded"></div>
                        <div className="skeleton h-4 w-full rounded"></div>
                        <div className="skeleton h-4 w-4/5 rounded"></div>
                    </div>
                </div>
            </section>

            {/* Similar Events Skeleton */}
            <section className="animate-pulse">
                <div className="skeleton mb-8 h-8 w-1/3 rounded"></div>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
                    <SkeletonCard />
                    <SkeletonCard />
                    <SkeletonCard />
                </div>
            </section>
        </div>
    );
};

export default EventDetailsSkeleton;