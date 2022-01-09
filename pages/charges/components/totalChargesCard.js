import React from 'react'

const TotalchargesCard = (props) => {
    return (
        <div className="p_card1">
            <div className="p_cardb">
                <table cellPadding="4" cellSpacing="4" border="0">
                    <thead>
                        <tr>
                            <th colSpan="2">Monthly Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Electricity</td>
                            <td>{props.electricity}</td>
                        </tr>
                        <tr>
                            <td>Internet </td>
                            <td>{props.internet}</td>
                        </tr>
                        <tr>
                            <td>Water</td>
                            <td>{props.water}</td>
                        </tr>
                    </tbody>
                </table>
                <div className='p_tb'>
                    <a href="#" className="btn btn-info">Pay Now</a>
                </div>
            </div>
        </div>
    )
}

export default TotalchargesCard