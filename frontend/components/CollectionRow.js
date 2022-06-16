import Layout from "./Layout";
import { Link } from "../routes";

export default function Collections(item) {
    const { name, thumbnailUri, contract, tokenId } = item ?? {};

    return (
        <div className="flex justify-center">
        <Link route="ticket" params= {{name: 'alan'}}>
        <a> 
          <div className="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
            <img className="w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src={thumbnailUri} alt="" />
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