import React, { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import SectionTitle from "./SectionTitle";

const HydroponicsComponent = () => {


    const [items, setItems] = useState([]);

    const fetchItems = async (url) => {
        try {
          const response = await fetch(url);
          const data = await response.json();
          setItems(data);
          console.log(response);
          console.log(data);
        } catch (error) {}
      };
      console.log(items);
    
      useEffect(() => {
          fetchItems(`http://localhost:8881/allitemInCategory?catId=2`);
         
      }, []);
  const itemName = "Grow System";
  const itemThumbnail =
    "https://hydrilla.in/store/skin/frontend/tv_bigboom_package/tv_bigboom2/images/systems/hydroponics-190plants-pyramid-system.jpg";

  return (
    <>
      <div style={{ fontSize: "0.5rem" }}>
        <SectionTitle
          title="Hydropinics Systems"
          type=""
          titleStyles={{ margin: "2rem", fontSize: "0.5rem" }}
        />
      </div>

      <div style={{display:'flex',gap:'1rem'}}>

        

      {items.map((eachItem, index) => {
          const {catId, cost, itemId, itemName, itemThumbnail } = eachItem;

          return (
            <ItemCard
              key={itemId}
              itemName={itemName}
              itemThumbnail={itemThumbnail}
              itemId={itemId}
              cost={cost}
              categoryId = {catId}
            />
          );
        })}

      </div>

      
    </>
  );
};

export default HydroponicsComponent;
