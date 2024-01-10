import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

import "./Footer.css"

function Footer() {
    return (
        <MDBFooter className='footer text-center text-white'>
            <MDBContainer className='pt-2'>
                <section>
                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        target="_blank"
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='https://github.com/SonjaGorin'
                        role='button'
                    >
                        <MDBIcon fab className='fa-github' size="2x"/>
                    </MDBBtn>
                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        target="_blank"
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='https://ca.linkedin.com/'
                        role='button'
                    >
                        <MDBIcon fab className='fa-linkedin' size="2x"/>
                    </MDBBtn>
                    <MDBBtn
                        rippleColor="dark"
                        color='link'
                        target="_blank"
                        floating
                        size="lg"
                        className='text-dark m-1'
                        href='https://twitter.com/?lang=en'
                        role='button'
                    >
                        <MDBIcon fab className='fa-twitter' size="2x"/>
                    </MDBBtn>
                </section>
            </MDBContainer>
        </MDBFooter>
    );
}
  
export default Footer;