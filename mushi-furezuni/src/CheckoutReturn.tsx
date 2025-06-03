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
import CheckoutSuccess from "./CheckoutSuccess";



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

    console.log('session data', data)
    // setStatus(data.status);
    // setCustomerEmail(data.customer_email);

    //   fetch(`/session-status?session_id=${sessionId}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       setStatus(data.status);
    //       setCustomerEmail(data.customer_email);
    //     });
    
  
    if (data.status === 'open') {
      return (
        <Navigate to="/checkout" />
      )
    }
  
    if (data.status === 'complete') {
      return (
        <section id="success">
        
            <CheckoutSuccess email={data.customer_email}/>
           
        </section>
      )
    }

    return null;
  }
export default CheckoutReturn;



