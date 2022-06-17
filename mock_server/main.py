from fastapi import FastAPI, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware

"""_summary_
uvicorn main:app --reload
"""

origins = [
    "http://localhost:8000",
    "http://localhost:3000",
]
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
#http://localhost:8000/ticket/tz1hHamH4QRSqA8NbzE8gE4ecP6QExoLJw6J
@app.get("/ticket/{address}")
async def get_my_ticket(address: str):
    return {
        "result":[
            {
                "tokenId":6797,
                "contract":"KT1AFq5XorPduoYyWxs5gEyrFK6fVjJVbtCj",
                "thumbnailUri":"https://assets.akaswap.com/ipfs/QmVbHWbNXK7nvgQAtoDdkwRhAJBbLmYAK9nRRG2poCqzkq"
            },
            {
                "tokenId":6798,
                "contract":"KT1AFq5XorPduoYyWxs5gEyrFK6fVjJVbtCj",
                "thumbnailUri":"https://assets.akaswap.com/ipfs/QmfMkf4QU22DEW7at8DJJJUd86byQXnwDiMe3wiCmPrZLK"
            }
        ]
    }

@app.get("/activate/{contract}/{tokenId}")
async def root(contract: str, tokenId: int, signature=Form("")):
    return {
        "pk":"MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCADw79HhmGN6cKih8QNObrgnj6j45npqUJ5n6Y91MAwP1ENCRYSohLsG1WHDAeoPADIMbXJFHEl3YZLRzFYrJ8BIVzKBREeZ/ToqPt2zmrDxqxerhkTxCdZ/yF6npTcEs6+oXYx78Prl22ZJdi1mRdBHzggpqjv/fcmyWlgmw+AQIDAQAB",
		"otp": "abcdefghij",
		"valid_before": 2147483647
    }
#https://www.devglan.com/online-tools/rsa-encryption-decryption

@app.get("/verify/{contract}/{tokenId}")
async def root(contract: str, tokenId: int, signature=Form("")):
    return HTTPException(status_code=200, detail="success")