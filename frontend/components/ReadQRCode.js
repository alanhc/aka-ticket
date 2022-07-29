import { QrReader } from 'react-qr-reader';
import React, { useState } from 'react';
import { verifyTicket } from '../tools/network';
export default function ShowQRCode(value) {
    const [data, setData] = useState('No result');

    return (
        <>
            <QrReader
                className='w-full'
                constraints={ {facingMode: 'environment'} }
                onResult={async(result, error) => {
                    if (!!result) {
                        const receive_ticket = JSON.parse(result.text)
                        console.log("verify:", receive_ticket)
                        //otp, address, contract, ticketid
                        const verify_result =  await verifyTicket(
                            receive_ticket.otp,
                            receive_ticket.address,
                            receive_ticket.contract,
                            receive_ticket.tokenId
                        );
                        console.log("verify_result:", verify_result)
                        
                        setData(verify_result.data);
                    }

                    if (!!error) {
                        console.info(error);
                    }
                }}
                //style={{ width: '100%' }}
            />
            <p>{data}</p>
        </>
    )
}