import React from 'react'
import { HiChevronLeft, HiTrash } from 'react-icons/hi'
import CheckOutItems from './CheckOutItems';
import { open } from "./State/Slice/CheckOutSlice"
import { clear } from "./State/Slice/CardSlice"
import { useDispatch, useSelector } from 'react-redux';

const CheckOut = () => {
    const dispatch = useDispatch();
    const { cardItems, total, amount } = useSelector((state) => state.card); 
  return (
    <div className='bg-transparentBlack fixed z-30 top-0 left-0 w-full h-screen'>
        <div className='h-full bg-grey sm:w-[40rem] min-w-[15rem] overflow-y-auto'>
            <div className='p-6'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center cursor-pointer' onClick={() => dispatch(open())}>
                        <HiChevronLeft />
                        <span className='uppercase text-[0.95rem] select-none'>Continue Shopping</span>
                    </div>
                    <div>Shopping Bag ({amount})</div>
                </div>
                <div className="mt-8">
                    {cardItems.length === 0 ? (
                        <div className="uppercase text-center text-3xl">Your card is empty</div>
                    ) : (
                        <>
                            {cardItems.map((cardItem) => {
                                return (
                                    <CheckOutItems key={cardItem.id} cardItem={cardItem} />
                                )
                            })}
                            <div className='flex justify-between mt-12 items-center'>
                                <div>Total cost ${total.toFixed(2)}</div>
                                <HiTrash className='cursor-pointer text-3xl' onClick={() => dispatch(clear())} />
                            </div>
                            <div className="text-center cursor-pointer bg-black text-white p-3 mt-8">CheckOut</div>
                        </>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default CheckOut