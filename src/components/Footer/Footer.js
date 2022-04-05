import React from 'react'
import { Button } from '../../globalStyles';
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import {
    FooterContainer,
    FooterSubscription,
    FooterSubHeading,
    FooterSubText,
    Form,
    FooterInput,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from '../../styles/Footer.elements';

export const Footer = () => {
    return (
        <FooterContainer>
            <FooterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to recesive the latest news and
                    trends
                </FooterSubHeading>
                <FooterSubText>You can un subcribe at any time.</FooterSubText>
                <Form>
                    <FooterInput
                        name='email'
                        type='email'
                        placeholder='Your Email' />
                    <Button fontBig>Subscribe</Button>
                </Form>
            </FooterSubscription>

            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon />
                        Massage Abi
                    </SocialLogo>
                    <WebsiteRights>Massage Abi &copy; 2022 </WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='' target='_blank' aria-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}
