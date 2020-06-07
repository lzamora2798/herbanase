import React from 'react';
import { Container, Button, Link } from 'react-floating-action-button'
import HelpIcon from '@material-ui/icons/Help';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import FacebookIcon from '@material-ui/icons/Facebook';
const floatbot =() => {

    return (
        <Container className="mr-0 pr-0">
        <Link href="#"
            tooltip="whatsapp">
            <WhatsAppIcon/>
            </Link>
            <Link href="https://www.facebook.com/herbanase/"
            tooltip="facebook">
            <FacebookIcon/>
            </Link>
        <Button
            tooltip="The big plus button!"
            rotate={true}
            ><HelpIcon/></Button>
        </Container>
    );
}

export default floatbot;

// onClick={() => alert('FAB Rocks!')}