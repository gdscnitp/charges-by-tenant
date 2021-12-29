import Image from 'next/image'
import tenant from '../../public/images/tenant.png'
import Home_fill from '../../public/images/Home_fill.png'
import Ellipse47 from '../../public/images/Ellipse47.png'
import Twitter from '../../public/images/Twitter.png'
import Facebook from '../../public/images/Facebook.png'
import Google from '../../public/images/Google.png'


function tenant_signin() {
    return (
        <>
            <div className='fish'> 
            <Image src={Home_fill} alt="sub"  /> 
            </div>
            <div className='fishes'> 
            <Image src={Ellipse47} alt="sub"  /> 
            </div>
            <div className='img'> 
            <Image src={tenant} alt="tenant"  /> 
            </div>
            <div className='side' >
            <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous" />
                <div className='disp'>
                    Tenant Sign In
                </div>
                <div className='form-group'>
                <i class="fas fa-user"></i>
                    <input type="text" name="name" id="name" autocomplete="off" placeholder='Email Address' />
                </div>
                <div className='form-group'>
                    <i class="fas fa-lock"></i>
                    <input type="password" name="password" id="password" autocomplete="off" placeholder='Password'/>
                </div>
                <div className='btn'>
                    <button id="btn1">Sign In</button>
                </div>
                <div className='icon'>
                        <div className='icon2'>
                            or signIn with
                        </div>
                        <div className='icon1'>
                            <Image src={Facebook} alt="sub" height={27} width={48} />
                        </div>
                        <div className='icon1'>
                            <Image src={Google} alt="sub" height={15} width={45} />
                        </div>
                        <div className='icon1'>
                            <Image src={Twitter} alt="sub"  height={27} width={48}/>
                        </div>
                </div>
            </div>
        </>
    )
}

export default tenant_signin