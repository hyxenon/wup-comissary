import React, { useState } from "react";
import { Navbar, ShopItems, SideLinks } from "../components";
import background1 from "../assets/background1.png";
import background2 from "../assets/background2.png";
import items from "../data/Items";

const Shop = () => {

  const [elements, setElements] = useState({
    category: true,
    department: false,
    books: false,
    others: false,
  })

  const itemsElements = items.map((item)=>(<ShopItems key={item.id} {...item} />))

  const departmentElements = items.map((item)=>{
        if(item.category === "uniform"){
          return <ShopItems key={item.id} {...item} />
        }
        return null
  })

  const booksElements = items.map((item)=>{
        if(item.category === "books"){
          return <ShopItems key={item.id} {...item} />
        }
        return null
  })

  const othersElements = items.map((item)=>{
    if(item.category === "others"){
      return <ShopItems key={item.id} {...item} />
    }
    return null
})

  return (
    <div className="overflow-hidden relative min-h-[90rem]">
      <Navbar page={'shop'}/>
      <SideLinks />
      <img
        className="absolute left-0 -top-40 -z-20 w-[1300px]"
        src={background2}
        alt="../assets/background2.png"
      />
      <img
        className="absolute right-0 bottom-0 -z-20"
        src={background1}
        alt="../assets/background1.png"
      />
      <main className="mt-8 grid grid-cols-[25%_75%] 3xl:grid-cols-[20%_80%]">
        
        <div className="mt-20">
          <ul className="flex flex-col items-end gap-4">
            <li onClick={()=> setElements({
               category: true,
               department: false,
               books: false,
               others: false,
            })} className={`uppercase cursor-pointer hover:scale-125 transition-all ${elements.category ? "font-extrabold" : "font-bold"}`}>Category</li>
            <li onClick={()=> setElements({
               category: false,
               department: true,
               books: false,
               others: false,
            })}  className={`uppercase cursor-pointer hover:scale-125 transition-all ${elements.department ? "font-extrabold" : "font-bold"}`}>Department</li>
            <li onClick={()=> setElements({
               category: false,
               department: false,
               books: true,
               others: false,
            })}  className={`uppercase cursor-pointer hover:scale-125 transition-all ${elements.books ? "font-extrabold" : "font-bold"}`}>Books</li>
            <li onClick={()=> setElements({
               category: false,
               department: false,
               books: false,
               others: true,
            })}  className="font-bold uppercase cursor-pointer hover:scale-125 transition-all">Others</li>
          </ul>
        </div>
        <div className="flex flex-col items-center gap-12 mb-20">
          <h1 className="uppercase text-3xl font-bold">Best Sellers</h1>
          <div className="grid grid-cols-3 gap-8">
              { elements.category ? itemsElements : null}
              { elements.department ? departmentElements : null}
              { elements.books ? booksElements : null}
              { elements.others ? othersElements : null}
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Shop;
