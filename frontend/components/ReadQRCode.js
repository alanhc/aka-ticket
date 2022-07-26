import { QrReader } from 'react-qr-reader';
import React, { useState } from 'react';
export default function ShowQRCode(value) {
    const [data, setData] = useState('No result');

    return (
        <>
            <QrReader
                className='w-full'
                constraints={ {facingMode: 'environment'} }
                onResult={(result, error) => {
                    if (!!result) {
                        setData(result?.text);
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