import Layout from "./Layout";
import { Link } from "../routes";
import Image from "next/image";
import { TicketContext } from "../context/ticketContext";
import { useState, useContext } from "react";

export default function Collections(item) {
    const { name, thumbnailUri, contract, tokenId } = item ?? {};
    const { ticket, setTicket } = useContext(TicketContext);

    const onSelect = (_item)=>{
      //console.log("select!", _item, ticket)
      //alert("select!")
      setTicket(_item)
    }

    return (
        <div className="flex flex-col items-center" onClick={ ()=>onSelect(item)}>
        <Link route="/user/ticket" params= {{name: 'alan'}} >
        <a > 
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <Image className="w-1/2 h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={thumbnailUri} alt="" width={500} height={500}/>
            <div className="p-6 flex flex-col justify-start">
              <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
              <p className="text-gray-700 text-base mb-4">
                {contract}
              </p>
              <p className="text-gray-600 text-xs">{tokenId}</p>
            </div>
          </div>
        </a>
        </Link>
        </div>
    )
}