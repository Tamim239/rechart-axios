import ProtoTypes from 'prop-types';
import { CiCircleCheck } from "react-icons/ci";
export const Feature = ({feature}) => {
  return (
    <div>
        <p className='flex items-center gap-2'><CiCircleCheck  className='bg-green-500 rounded-full text-xl text-white'/> {feature}</p>
    </div>
  )
}


Feature.propTypes = {
    feature: ProtoTypes.string
}