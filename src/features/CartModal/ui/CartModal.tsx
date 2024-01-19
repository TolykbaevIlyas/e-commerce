import { Button } from '@/shared/ui/button';
import React from 'react'

interface ICartModal{
    CartModalStatus:boolean; 
    setCartModalStatus: ()=>void;
}

const CartModal = ({CartModalStatus,setCartModalStatus}:ICartModal) => {
    const Cart =[
        {
            id:1,
            name: 'FavModal',
        },
        {
            id:2,
            name: 'FavModalStatus',
        }
    ]
  return (
    <div className='fixed top-0 left-0 bg-slate-950/60 w-screen h-screen duration-100 flex justify-center items-center z-10'>
    <div className='m-32 bg-slate-700 min-w-96 p-5 rounded-2xl'>
        <Button type='button' onClick={()=>setCartModalStatus(!CartModalStatus)} className=' float-right'>Close</Button>
        <div className='pt-20'>
            {Cart.map((cartt)=>
            <div>
                {cartt.name}
            </div>)}
        </div>
    </div>
</div>
  )
}

export default CartModal