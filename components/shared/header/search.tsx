import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
// import { getAllCategories } from '@/lib/actions/product.actions';
import { SearchIcon } from 'lucide-react';

const Search = async () => {
  // const categories = await getAllCategories();

  return (
    <form action='/' method='GET'>
      <div className='flex w-full max-w-sm items-center space-x-2'>
        <Select name='category'>
          <SelectTrigger className='w-[180px] cursor-pointer'>
            <SelectValue placeholder='Tümü' />
          </SelectTrigger>
          <SelectContent >
            <SelectItem className='cursor-pointer' key={'All'} value={'all'} >
              Tümü
            </SelectItem>
            {/* {categories.map((x) => (
              <SelectItem key={x.category} value={x.category} className='cursor-pointer'>
                {x.category}
              </SelectItem>
            ))} */}
          </SelectContent>
        </Select>
        <Input
          name='q'
          type='text'
          placeholder='Ara...'
          className='md:w-[100px] lg:w-[300px]'
        />
        <Button className='cursor-pointer'>
          <SearchIcon />
        </Button>
      </div>
    </form>
  );
};

export default Search;