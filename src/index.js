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
    return <div className='container'>
        <Header />
        <Menu />
        <Footer />
    </div>
}

function Header() {
    return <header className='header'><h1>Fast React Pizza Co.</h1></header>
}

function Menu() {
    const pizzas = pizzaData;
    const pizzasNo = pizzas.length;

    return (
        <main className='menu'>
            <h2>Our Menu </h2>

            {pizzasNo > 0 && (
                <ul className='pizzas'>
                    {pizzas.map(el => <Pizza pizzaObj={el} key={el.name} />)}
                </ul>
            )}
        </main>
    )
}

function Pizza(props) {

    console.log(props);

    if (props.pizzaObj.soldOut) return null;

    return (
        <li className='pizza'>
            <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
            <div>
                <h3>{props.pizzaObj.name}</h3>
                {/* <p>{props.pizzaObj.soldOut}</p> */}
                <p>{props.pizzaObj.ingredients}</p>
                <span>${props.pizzaObj.price}:00</span>
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
            {!isOpen ? <Order closeHour={closeHrs} /> : (
                <div className='order'>
                    <p>{closeMsg}</p>
                </div >
            )
            }
        </footer >
    )
}

function Order(props) {

    console.log(props);

    const openMsg = `We're open until ${props.closeHour}:00. Come visit us or order online.`;

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
