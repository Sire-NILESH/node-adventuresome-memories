import axios from 'axios';
import { showAlert } from './alerts';
const stripe = Stripe(
  'pk_test_51JWJ70SHkzkRG21mPCIgtqOGMcws87vJ5ZX2tx4BV5wDaOzyDVwXwhQ2FCb6LMXTUInLeYLg8tDSBIbXjrBK7wqN00xMWPeeOz'
);

export const bookTour = async (tourId) => {
  try {
    // 1) Get checkout session from API
    const session = await axios(`/api/v1/bookings/checkout-session/${tourId}`);

    // 2) Create checkout form + charge credit card
    const checkoutPageUrl = session.data.session.url;
    window.location.assign(checkoutPageUrl);
  } catch (error) {
    showAlert('error', error);
  }
};
