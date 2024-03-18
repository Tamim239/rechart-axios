import ProtoTypes from 'prop-types'
import { Feature } from '../Feature/Feature'
export const PriceOption = ({option}) => {
    const {price, name, features} = option
  return (
    <div className='bg-red-200 flex flex-col p-4 rounded-lg'>
        <h2 className='text-center'>
            <span className='text-7xl font-bold'>{price}</span>
            <span className='text-2xl'>/mon</span>
        </h2>
        <h4 className='text-3xl my-4 text-center'>{name}</h4>
        <div className='flex-grow pl-4'>
            {
                features.map((feature, index) => <Feature key={index} feature={feature}></Feature>)
            }
        </div>
        <button className='btn w-full bg-green-500 mt-10 hover:bg-black hover:text-white'>Buy Now</button>
    </div>
  )
}

PriceOption.propTypes = {
    option: ProtoTypes.object
}