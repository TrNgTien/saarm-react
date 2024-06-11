import { useParams } from 'react-router-dom';

const ApartmentMobile = () => {
  const { id = '' } = useParams();

  return <div>Aparmtnent No: {id}</div>;
};
export default ApartmentMobile;
