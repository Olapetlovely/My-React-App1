import React, { useState } from 'react'

const FormElement = () => {

  // Form elemennnt
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();
  const [comment, setComment] = useState();
  const [payment, setPayment] = useState();
  const [shipping, setShipping] = useState();

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

 

  return (
    
      <div className='element-container'>
        {/* Form elemennt */}
        <input value={name} onChange={handleNameChange} type="text" />
        <p>Name: <span className="real-time-text">{name}</span></p>

        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <p>Quantity: <span className="real-time-text">{quantity}</span></p>

        <textarea value={comment} placeholder="Enter delivery instruction" onChange={handleCommentChange}></textarea>
        <p>Comment: <span className="real-time-text">{comment}</span></p>

        <select value="payment" onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Mastercard">Mastercard</option>
          <option value="Giftcard">Giftcard</option>
        </select>
        <p>Payment: <span className="real-time-text">{payment}</span></p>

        <div className="radio-wrapper">
          <label>
            <input type="radio" value="Pick Up" checked={shipping === "Pick Up"} onChange={handleShippingChange} />Pick Up</label>

          <label><input className="delivery" type="radio" value="Delivery" checked={shipping === "Delivery"} onChange={handleShippingChange} />
            Delivery </label>
        </div>
        <p>Shipping: <span className="real-time-text">{shipping}</span></p>

      </div>
  )
}

export default FormElement