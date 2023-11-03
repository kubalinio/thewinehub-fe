import FilterLayout from '@/features/public/shared/layouts/containers/FilterLayout';
import { Button } from 'shared/components/ui/Button'

export default function Page() {
  return (
    <FilterLayout>
      <section className='w-full'>
        <h1>Content</h1>
        <Button variant='outline'>Click me</Button>
      </section>
    </FilterLayout>
  );
}
