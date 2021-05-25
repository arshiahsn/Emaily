import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import {handleToken} from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const Payments  = () => {
    const dispatch = useDispatch();

    return (
        <StripeCheckout
            name="Emaily"
            description="5$ for 5 email credits"
            amount={500}
            token={token => dispatch(handleToken(token))}
            stripeKey={process.env.REACT_APP_STRIPE_KEY}
        >
            <button className="btn">
                Add Credits
            </button>
        </StripeCheckout>
    );
}

export default Payments;