'use client';
import React, { Suspense, lazy } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useSearchParams } from 'next/navigation';

const CheckoutForm = lazy(() => import('./_components/CheckoutForm'));

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);

function Checkout() {
	const searchParams = useSearchParams();
	const amount = Number(searchParams.get('amount'));

	if (isNaN(amount) || amount <= 0) {
		return <div>Invalid amount</div>;
	}

	const options = {
		mode: 'payment',
		currency: 'usd',
		amount: amount * 100
	};

	return (
		<Suspense fallback={<div></div>}>
			<Elements stripe={stripePromise} options={options}>
				<CheckoutForm amount={amount} />
			</Elements>
		</Suspense>
	);
}

export default Checkout;


