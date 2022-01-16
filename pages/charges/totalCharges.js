import Image from 'next/image'
import Total_Charges from '../../public/images/Total_Charges.png'
import Header from "./components/Header"
import TotalchargesCard from "./components/totalChargesCard"
import Taskbar from '../profile/components/Taskbar'

export default function total_charges() {
    return (
        <>
            <div className="p_heading">
                <link rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                    crossOrigin="anonymous"></link>
                <link
                    rel="stylesheet"
                    href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
                    integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p"
                    crossOrigin="anonymous" />

                <Taskbar />
                <div className="p_right">
                    <Header header="Total Charges" />
                    <TotalchargesCard electricity="3271" internet="950" water="4625" />
                    <TotalchargesCard electricity="2896" internet="672" water="1724" />

                </div>
                <div className='tc'>
                    <Image src={Total_Charges} alt="TC" />
                </div>

            </div>
        </>
    )
}