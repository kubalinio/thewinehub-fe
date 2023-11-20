
import FilterLayout from '@/features/public/shared/layouts/containers/FilterLayout';
import TopViewBikes from '@/features/public/bikes/containers/TopViewBikes';
import Feedback from '@/features/public/bikes/containers/Feedback';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { bikeQueries } from '@/api/actions/bike/bike.queries';

export default async function Page() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['bikes'],
    queryFn: bikeQueries.getAllBikes,
  });


  return (
    <FilterLayout>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <TopViewBikes />
        <TopViewBikes />
        <Feedback />
      </HydrationBoundary>
    </FilterLayout>
  );
}
