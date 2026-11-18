import React from 'react';
import Hero from './Hero';
import Services from './Services';
import { RestaurantWork, Contact } from './Features';
import './restaurant.css';
export default function Home() {
  return <div className="restaurant-home"><Hero /><Services /><RestaurantWork /><Contact /></div>;
}
