import React from 'react'
import ItemCard from '../Components/ItemCard'
import Navigationbar from '../Components/Navbar'

const ItemPage = () => {
  return (
    <>

<Navigationbar />
<div style={{display:'flex',gap:'1rem', margin:'100px 0',flex:'wrap'}}>

<ItemCard />
<ItemCard />
<ItemCard />
<ItemCard />
<ItemCard />

</div>

    
    </>
  )
}

export default ItemPage