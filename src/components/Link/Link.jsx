import PropTypes from 'prop-types';
export const Link = ({route}) => {
  return (
    <div>
        <li className='mr-10 hover:bg-orange-100 p-1'><a href={route.path}>{route.name}</a></li>
    </div>
  )
}
Link.propTypes = {
  route: PropTypes.object
}