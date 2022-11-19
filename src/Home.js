import "./App.css";
import { useState } from "react";


function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:8000/", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          product: name,
          price: email,
          quantity: mobileNumber,
        }),
      });
      let resJson = await res.json();
      if (res.status === 201) {
        const a = resJson.url;
        setName('')
        setEmail('')
        setMobileNumber('')
        setMessage('')
        window.open(a)
        setMessage("Order successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="product"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          value={email}
          placeholder="price"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={mobileNumber}
          placeholder="quantity"
          onChange={(e) => setMobileNumber(e.target.value)}
        />

        <button type="submit">Order</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Home;