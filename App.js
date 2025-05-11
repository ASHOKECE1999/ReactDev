// Nested
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const Header=()=>{ 
    return (
    <div className='Header'>
        <div className='logo-container'>
            <img src="https://img.freepik.com/free-vector/ecofood-logo-template_1195-33.jpg?semt=ais_hybrid&w=740"/>
        </div>
        <div className='nav-item-container'>
            <ul>
                <li>
                    Home
                </li>
                <li>
                    About
                </li>
                <li>
                    Contact US
                </li>
                <li>
                    Cart
                </li>
            </ul>
        </div>

    </div>
)}

const RestroCard=()=>{
    return <div className='res-card'>
        <img src="https://tse2.mm.bing.net/th?id=OIP.2iWS4NJfB5y_mu30Nsq_bwHaHa&pid=Api&P=0&h=180"/>
        <h1>Shaouse</h1>
        <h1>Rating : 4.4</h1>
    </div>
}

const Body=()=>{
    return(
        <div className='body'>
            <div className='search-bar'>
                <input type='text' placeholder='Search Here'/>
            </div>
            <div className='res-container'>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/>
                <RestroCard/> <RestroCard/> <RestroCard/> <RestroCard/> <RestroCard/>
            </div>

        </div>
    )
}
const AppLayout=()=>(
    <div className='app'>
        <Header/>
        <Body/>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)