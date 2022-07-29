import { createContext, Context, useState } from "react";

export const TicketContext = createContext({});
const TicektProvider = ({ children }) => {
    const [ticket, setTickets] = useState({
        name:"???",
        thumbnailUri:"https://assets.akaswap.com/ipfs/QmVbHWbNXK7nvgQAtoDdkwRhAJBbLmYAK9nRRG2poCqzkq",
        contract:"KT1AFq5XorPduoYyWxs5gEyrFK6fVjJVbtCj",
        tokenId:6797
    });
    const setTicket = (value) => {
        setTickets(value);
    };
    return <TicketContext.Provider value={{ ticket, setTicket }}>{children}</TicketContext.Provider>;
  };
  
  export default TicektProvider;
