import { type } from 'os'
import React from 'react'
type priceProps = {
    price: number;
    id: number;
    options?: {title: string; additionalPrice: number}[]; 
}

const Price = ({price,id,options}: priceProps) => {
  return (
    <div className='flex flex-col gap-4'>
        <h2 className='text-2xl font-bold'>${price.toFixed(2)}</h2>
        {/* OPTIONS CONTAINER */}
        <div className="flex gap-4">
            {options?.map((option) => (
                <button className='p-2 ring-1 ring-blue-400 rounded-md' key={option.title}>{option.title}</button>
            ))}
        </div>
        {/* QUANTITY AND ADD BUTTON CONTAINER */}
        <div className="flex justify-between items-center">
            {/* QUANTITY */}
            <div className='flex justify-between w-full p-3 ring-1 ring-blue-500'>
                <span>Quantity</span>
                <div>
                    <button>{'<'}</button>
                    <span>1</span>
                    <button>{'>'}</button>
                </div>
            </div>
            {/* CART BUTTON */}
            <button className='uppercase w-56 bg-blue-500 text-white ring-1 p-3'>
                Add tO Cart
            </button>
        </div>
    </div>
  )
}

export default Price