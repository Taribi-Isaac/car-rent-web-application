import {  Carcard, Hero, ShowMore} from '@/components'
import CustomFilter from '@/components/CustomFilter'
import SearchBar from '@/components/SearchBar'
import { fuels, yearsOfProduction } from '@/constants'
import { fetchCars } from '@/utils'
import Image from 'next/image'

export default async function Home({searchParams}) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || '',
    model: searchParams.model || '',
    fuel: searchParams.fuel || '',
  limit: searchParams.limit || ''  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='mt-12 padding-x padding-y max-width' id="discover">
        <div className='home__text-container'>
          <h1 className='text-4xl font-extrabold'>Car catalogue</h1>
          <p>Explore the cars you might like</p>

        </div>
        <div className='home__filters'>
          <SearchBar/>

          <div className='flex home__filters-container'>
            <CustomFilter title="fuel" options={fuels}/>
            <CustomFilter title="Year" options={yearsOfProduction}/>

          </div>

        </div>

          {!isDataEmpty? (
            <section>
              <div className='home__cars-wrapper'>
                {allCars?.map((car)=> <Carcard car={car}/>)}

              </div>

              <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
              />
            </section>

        
          ): (
            <div className='home__error.container'>
              <h2 className='text-black text-xl font-bold'> Oops! no results</h2>
              <p>{allCars?.message}</p>
             
            </div>
          )} 

      </div>
      
      
    </main>
  )
}
