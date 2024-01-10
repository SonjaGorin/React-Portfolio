import React from "react";

import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

// import { Ripple, initMDB } from "mdb-ui-kit";
// initMDB({ Ripple });
// import GitHubImage from "../../images/GitHub-logo-transparent.png";
// import LinkedInImage from "../../images/LinkedIn-logo-initials.png";
// import TwitterImage from "../../images/twitter-logo-transparent.png";


    //   <footer className="footer">
    //     <h1>Footer</h1>
    //     <div className="pop-on-hover">
    //         <a href="https://github.com/SonjaGorin" target="_blank">
    //             <img src={GitHubImage} alt="GitHub logo."></img>
    //         </a>
    //     </div>
    //     <div>
    //         <a href="https://ca.linkedin.com/" target="_blank">
    //             <img src={LinkedInImage} alt="Linked In logo."></img>
    //         </a>
    //     </div>
    //     <div>
    //         <a href="https://twitter.com/?lang=en" target="_blank">
    //             <img src={TwitterImage} alt="Twitter/X logo."></img>
    //         </a>
    //     </div>
    //   </footer>


function Footer() {
    return (
        <MDBFooter className='text-center text-white' style={{ backgroundColor: '#f1f1f1' }}>
            <MDBContainer className='pt-4'>
                <section className='mb-4'>
                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='https://twitter.com/?lang=en'
                        role='button'
                    >
                        <MDBIcon fab className='fa-twitter' />
                    </MDBBtn>
                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='https://ca.linkedin.com/'
                        role='button'
                    >
                        <MDBIcon fab className='fa-linkedin' />
                    </MDBBtn>
                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='https://github.com/SonjaGorin'
                        role='button'
                    >
                        <MDBIcon fab className='fa-github' />
                    </MDBBtn>
                </section>
                
            </MDBContainer>
            
        </MDBFooter>
        
    );
}
  
export default Footer;