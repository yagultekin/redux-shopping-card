import React from 'react'
import { useParams } from 'react-router-dom'
import { add } from "./State/Slice/CardSlice"
import { useDispatch } from 'react-redux';
import{ items } from "../CardItems"

const ItemDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const item = items.find((item) => item.id === parseInt(id))
  const { name, price, image } = item;
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4">
      <div className="lg:flex items-center justify-center">
        <img src={image} alt="" className='lg:w-[35rem] md:w-[30rem] w-[25rem]'  />
        <div>
          <div className='text-3xl font-extrabold mb-4'>{name}</div>
          <div className='mb-4'>${price}</div>
          <p className='max-w-[400px] mb-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ad mollitia natus dicta tempore fugit, amet quis molestias commodi non, voluptatum minima atque illo itaque sint!</p>
          <button className='bg-black text-white p-3' onClick={() => dispatch(add(item))} >Add to Card</button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails