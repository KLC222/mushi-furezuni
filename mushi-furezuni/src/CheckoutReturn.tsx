import React, { useState, useEffect, useMemo } from "react";
import { type Appearance, loadStripe} from '@stripe/stripe-js';
import {
  CheckoutProvider
} from '@stripe/react-stripe-js';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router";
import { supabase } from "./supabase";
import { useSuspenseQuery } from "@tanstack/react-query";



const CheckoutReturn = () => {
    const [status, setStatus] = useState(null);
    const [customerEmail, setCustomerEmail] = useState('');
  
    
      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      const session_id = urlParams.get('session_id');
    
      const {data} = useSuspenseQuery({
        queryKey: ['checkout_return', session_id],
        queryFn: async ()=> {
          const response = await supabase.functions.invoke('session-status', {
            body: { session_id: session_id },
          })
          if (response.error) {
            throw response.error
          }
          return response.data
          }
    })
    setStatus(data.status);
    setCustomerEmail(data.customer_email);
    //   fetch(`/session-status?session_id=${sessionId}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setStatus(data.status);
    //       setCustomerEmail(data.customer_email);
    //     });
    
  
    if (status === 'open') {
      return (
        <Navigate to="/checkout" />
      )
    }
  
    if (status === 'complete') {
      return (
        <section id="success">
          <p>
            We appreciate your business! A confirmation email will be sent to {customerEmail}.
  
            If you have any questions, please email <a href="mailto:orders@example.com">orders@example.com</a>.
          </p>
        </section>
      )
    }

    return null;
  }
export default CheckoutReturn;



