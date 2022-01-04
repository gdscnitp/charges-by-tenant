import Header from "./components/Header"
import RentersList from "./components/RentersList"
import Image from 'next/image'
import ParticularSite from "../public/images/ParticularSite.png";
import NameLabel from './components/NameLabel';


export default function particular_site() {

    return (
        <>
            <div className="p_sitepage">
                <Header header="Site Status" />
                <link rel="stylesheet" 
                    href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" 
                    integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" 
                    crossOrigin="anonymous" 
                />
                <div className="p_site">
                    <div className="p_sitecontainer">
                        <div>
                            <NameLabel label="Site Name"/>
                        </div>
                        <div>
                            <NameLabel label="Site Type"/>
                        </div>
                        <div>
                            <span className="p_label">Address:</span>
                            <textarea className='p_textarea'  id="story" name="story" rows="5" cols="33">
                                Street: 294, Maharaja Mansion, Sardar Vallabhbhai Patel Rd, Mumbai, Maharashtra</textarea>
                        </div>
                    </div>
                    <div className='p_psite'>
                        <Image src={ParticularSite} alt="sub" />
                    </div>
                </div>
                <div className="p_particular">
                    <RentersList head="Renters Alloted" flat="Flat No." loc="Location" rentedFrom="RentedFrom" rentedTill="Rented Till" deposit="Deposit" />
                </div>
                <div className='p_btn3'>
                    <button className='p_btn1 p_btr'>Add New Tenant</button>
                </div>
            </div>

        </>
    )
}