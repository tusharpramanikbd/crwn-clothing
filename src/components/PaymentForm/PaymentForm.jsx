import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPE_CLASSES } from "../Button/Button";
import { PaymentFormContainer, FormContainer } from "./PaymentForm.styles";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;
  };

  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit Card Payment: </h2>
        <CardElement />
        <Button buttonType={BUTTON_TYPE_CLASSES.inverted}>Pay Now</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;