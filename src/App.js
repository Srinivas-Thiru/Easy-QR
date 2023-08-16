import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';

import { useState } from 'react';
import './App.css';
import QRCode from 'qrcode';
import {ColorPicker} from "primereact/colorpicker"


function App() {
  const [url, setUrl] = useState("");
  const[qrcode, setQrcode] = useState("");
  const [qrColor, setQRColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");


  function GenerateQRCode(){
    QRCode.toDataURL(url,
      {
        width:800,
        margin:1,
        color:{
          dark: qrColor,
          light: bgColor
        }
      },(err, url) => {
      if (err) return console.log(err);
      setQrcode(url);
    })
  }

  return (
    <div className="App">
    <div className="options">
    <h1>QR Code Generator</h1>
    
    <div className="color-div">
    <label htmlFor="qrcolor"> QR Code Color: </label>
    <input 
    className='color-picker'
    id='qrColor'
    type='color'
    value={qrColor}
    onChange={(e)=>setQRColor(e.target.value)} />

  <label htmlFor="bgcolor"> Background Color: </label>
    <input 
    type='color'
    className='color-picker'
    id='bgcolor'
    value={bgColor}
    onChange={(e)=> setBgColor(e.target.value)} />
    </div>
    <div className='input-here' >

      <input type="text" 
      value={url} 
      placeholder='e.g. https://google.com'  
      onChange={(e) => {setUrl(e.target.value)}} />
      <button className='btn' onClick={GenerateQRCode} >Generate</button>
      
</div>
    </div>
      {qrcode && <div className='qr'>
        <img src={qrcode}/>
        <a className='btn' href={qrcode} download="qrcode.png">Download</a>
      </div>}
    </div>
  );
}

export default App;
