import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider');
  }

  return context;
};

