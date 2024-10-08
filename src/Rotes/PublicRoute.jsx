import { useSelector } from 'react-redux';
import { selectIsLogedIn } from '../redux/auth/selectors';
import { Navigate, useLocation } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLogedIn);
  const location = useLocation();
  if (isLoggedIn) {
    return <Navigate to={location?.state ?? '/'} />;
  }
  return children;
};
