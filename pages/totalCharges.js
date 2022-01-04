import Image from 'next/image'
import Total_Charges from '../public/images/Total_Charges.png'
import Header from "./components/Header"

export default function total_charges() {
    return (
        <>
            <div className="heading">
                <Header header="Total Charges" />
                <link rel="stylesheet"
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css"
                    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
                    crossOrigin="anonymous"></link>
                <div className="p_card1">
                    <div className="cardb">
                        <table cellpadding="4" cellspacing="4" border="0">
                            <thead>
                                <tr>
                                    <th colspan="2">Monthly Charges</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Electricity</td>
                                    <td>3271/-</td>
                                </tr>
                                <tr>
                                    <td>Internet </td>
                                    <td>950/-</td>
                                </tr>
                                <tr>
                                    <td>Water</td>
                                    <td>4625/-</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='p_tb'>
                            <a href="#" className="btn btn-info">Pay Now</a>
                        </div>
                    </div>
                </div>
                <div className="p_card1">
                    <div className="cardb">
                        <table cellpadding="4" cellspacing="4" border="0">
                            <thead>
                                <tr>
                                    <th colspan="2">Monthly Charges</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Electricity</td>
                                    <td>2896/-</td>
                                </tr>
                                <tr>
                                    <td>Internet </td>
                                    <td>672/-</td>
                                </tr>
                                <tr>
                                    <td>Water</td>
                                    <td>1724/-</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='p_tb'>
                            <a href="#" className="btn btn-info">Pay Now</a>
                        </div>
                    </div>
                </div>
                <div className='tc'>
                    <Image src={Total_Charges} alt="TC" />
                </div>

            </div>
        </>
    )
}