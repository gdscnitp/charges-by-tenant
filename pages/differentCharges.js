import Image from 'next/image'
import DifferentCharges from "../public/images/DifferentCharges.png";
import Header from "./components/Header"
import Label from "./components/NameLabel"
export default function different_charges(){
    return (
        <>
        <div className="heading">
        <Header header="GENERATE CHARGES OF DIFERENT ENTITIES" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossOrigin="anonymous"></link>
        <div className='charges'>
            <Label label="Electricity" />
            <Label label="Water" />
            <Label label="Gas Connection" />
            <Label label="Others" />

        <div className='btn2'>
            <button className='p_btn2'>GENERATE</button>
        </div>
        </div>
        

        <div className='dc'>
        <Image src={DifferentCharges} alt="dc"  /> 
        </div>
        
        </div>
        </>
    )
}