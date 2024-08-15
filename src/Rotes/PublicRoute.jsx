import { useSelector } from 'react-redux';
import { selectIsLogedIn } from '../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

export const PublicRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectIsLogedIn);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }
  return children;
};
