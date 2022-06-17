import QRCode from "react-qr-code";
//viewBox={`0 0 512 512`} style={{ height: "auto", maxWidth: "100%", width: "100%" }} size={512}
export default function ShowQRCode(value) {
    console.log(value);
    return (
        <div style={{ height: "auto", margin: "0 auto", maxWidth: 128, width: "100%" }}>
            <QRCode
                value={JSON.stringify(value)}
            />
        </div>
    )
}