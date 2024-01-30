import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';

const pizzaData = [
    {
        name: "Focaccia",
        ingredients: "Bread with italian olive oil and rosemary",
        price: 6,
        photoName: "pizzas/focaccia.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Margherita",
        ingredients: "Tomato and mozarella",
        price: 10,
        photoName: "pizzas/margherita.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Spinaci",
        ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
        price: 12,
        photoName: "pizzas/spinaci.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Funghi",
        ingredients: "Tomato, mozarella, mushrooms, and onion",
        price: 12,
        photoName: "pizzas/funghi.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: true,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];

function App() {
    return (
        <div className='container'>
            <Header />
            <Menu />
            <Footer />
        </div>
    )
}

function Header() {
    return (
        <header className='header'>
            <h1>
                Fast React Pizza Co.
            </h1>
        </header>
    )
}

function Menu() {
    const pizzas = pizzaData;
    const pizzasNo = pizzas.length;

    return (
        <main className='menu'>
            <h2>Our Menu </h2>


            {pizzasNo > 0 && (
                <>
                    <p>Authenic italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
                    <ul className='pizzas'>
                        {pizzas.map(el => <Pizza pizzaObj={el} key={el.name} />)}
                    </ul>
                </>
            )}
        </main>
    )
}

function Pizza({ pizzaObj }) {

    console.log(pizzaObj);

    if (pizzaObj.soldOut) return null;

    return (
        <li className='pizza'>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                {/* <p>{pizzaObj.soldOut}</p> */}
                <p>{pizzaObj.ingredients}</p>
                <span>${pizzaObj.price}:00</span>
            </div>
        </li>
    )
}

function Footer() {
    const hour = new Date().getHours();
    const openHrs = 8;
    const closeHrs = 23;
    const closeMsg = `Sorry we're closed. We gonna open at ${openHrs}:00!`;
    const isOpen = hour >= openHrs && hour <= closeHrs;

    return (
        <footer className='footer'>
            {!isOpen ? <Order closeHour={closeHrs} openHour={openHrs} /> : (
                <div className='order'>
                    <p>{closeMsg}</p>
                </div >
            )
            }
        </footer >
    )
}

function Order({ closeHour, openHour }) {

    console.log(closeHour);

    const openMsg = `We're open from ${openHour}:00 until ${closeHour}:00. Come visit us or order online.`;

    return (
        <div className='order'>
            <p>{openMsg}</p>
            <button className='btn'>
                Order
            </button>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<React.StrictMode><App /></React.StrictMode>);
