import React, { useMemo, useState, useContext } from "react";
import { type Appearance, loadStripe} from '@stripe/stripe-js';
import {
  AddressElement,
  CheckoutProvider,
  PaymentElement,
  useCheckout,
  type CheckoutContextValue,
} from '@stripe/react-stripe-js';
import { CartContext } from "./CartContext";
import { useSuspenseQuery } from "@tanstack/react-query";
import { supabase } from "./supabase";
import { Container, Button } from "react-bootstrap";

const stripe_public_key = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
const stripePromise = loadStripe(stripe_public_key);

const validateEmail = async (email: string, checkout: CheckoutContextValue) => {
  const updateResult = await checkout.updateEmail(email);
  const isValid = updateResult.type !== "error";

  return { isValid, message: !isValid ? updateResult.error.message : null };
}

type EmailInputProps = {
    email: string,
    setEmail: (email:string) => void,
    error: null | string,
    setError: (error: null | string) => void,
}
const EmailInput = ({ email, setEmail, error, setError }:EmailInputProps) => {
  const checkout = useCheckout();

  const handleBlur = async () => {
    if (!email) {
      return;
    }
   
    const { isValid, message } = await validateEmail(email, checkout);
    if (!isValid) {
      setError(message);
    }
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setError(null);
    setEmail(e.currentTarget.value);
  };

  return (
    <>
    <Container>
      <label className="py-4">
        <h4>
        メールアドレス
        </h4>
        <input
          id="email"
          type="text"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          // placeholder="you@example.com"
          className="email-input"
        />
      </label>
      {error && <div id="email-errors">{error}</div>}
      </Container>
    </>
  );
};

const CheckoutForm = () => {
  const checkout = useCheckout();

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);


  const handleSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    console.log("submit")
    e.preventDefault();

    setIsLoading(true);
    
    const { isValid, message } = await validateEmail(email, checkout);
    if (!isValid) {
      setEmailError(message);
      setMessage(message);
      setIsLoading(false);
      return;
    }

    const confirmResult = await checkout.confirm();
    console.log("confirm result", confirmResult)

    // This point will only be reached if there is an immediate error when
    // confirming the payment. Otherwise, your customer will be redirected to
    // your `return_url`. For some payment methods like iDEAL, your customer will
    // be redirected to an intermediate site first to authorize the payment, then
    // redirected to the `return_url`.
    if (confirmResult.type === 'error') {
      setMessage(confirmResult.error.message);
    }

    setIsLoading(false);
  };

  return (
    <Container>
    <form onSubmit={handleSubmit}>
      <EmailInput
        email={email}
        setEmail={setEmail}
        error={emailError}
        setError={setEmailError}
      />
       <h4>請求先住所</h4>
      <AddressElement options={{mode: 'billing'}} />
      <h4>配送先住所</h4>
      <AddressElement options={{mode: 'shipping'}} />
      <h4>お支払い</h4>
      <PaymentElement id="payment-element" />
      {/* Show any error or success messages */}
      {message && <div id="payment-message">{message}</div>}
      <Button disabled={isLoading} type="submit" id="submit" className="btn-custom-primary mt-4 mb-5 button-center">
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          `${checkout.total.total.amount} を支払う`
        )}
      </Button>
      
      
    </form>
    </Container>
  );
}

const Checkout = () => {
  const context = useContext(CartContext);
    const {cart} = context;


    const {data} = useSuspenseQuery({
      queryKey: ['checkout', cart?.stripe_price_id],
      queryFn: async ()=> {
        const response = await supabase.functions.invoke('create-checkout-session', {
          body: { priceId: cart?.stripe_price_id },
        })
        if (response.error) {
          throw response.error
        }
        return response.data
        }
  })
 
  
  const appearance: Appearance= {
    theme: 'stripe',
    variables: {
      colorPrimary: '#31A87C',
      colorBackground: '#fefff5',
    },
  }

  return (
    <CheckoutProvider
      stripe={stripePromise}
      options={{
        fetchClientSecret: () => data.clientSecret,
        elementsOptions: {appearance},
      }}
    >
      <CheckoutForm />
    </CheckoutProvider>
  )
}
export default Checkout;