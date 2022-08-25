import React from "react";

import {
    Box,
    Container,
    Row,
    Column,
    FooterLink,
    Heading,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
           
            <Container>
                <Row>
                    <Column>
                        <Heading>About Us</Heading>
                        <FooterLink href="#">Aim</FooterLink>
                        <FooterLink href="#">Vision</FooterLink>
                        <FooterLink href="#">Testimonials</FooterLink>
                    </Column>
                    <Column>
                        <Heading>Services</Heading>
                        <FooterLink href="#https://www.shiprocket.in/shipment-tracking/">Track Your Order</FooterLink>
                        <FooterLink href="#">Warranty & Support</FooterLink>
                        <FooterLink href="#">Return Policy</FooterLink>
            

                    </Column>
                    <Column>
                        <Heading>Contact Us</Heading>
                        <FooterLink href="https://www.google.com/maps/place/Kanini+Software+Solutions+India+Private+Limited/@12.9061902,80.2237317,17z/data=!3m1!4b1!4m5!3m4!1s0x3a525d97c837366b:0xd99f0e98308ef647!8m2!3d12.9061902!4d80.2259204">Chennai</FooterLink>
                        <FooterLink href="https://www.google.com/maps/place/Kanini+Software+Solutions+India+Private+Limited/@11.0307788,76.914237,12z/data=!4m6!3m5!1s0x3ba859eae8e9dadb:0x1815f9b1e6d2b56b!8m2!3d11.0307854!4d77.0175088!15sCiRrYW5pbmkgc29mdHdhcmUgc29sdXRpb25zIGNvaW1iYXRvcmWSARBzb2Z0d2FyZV9jb21wYW55">Coimbatore</FooterLink>
                        
                    </Column>
                    <Column>
                        <Heading>Social Media</Heading>
                        <FooterLink href="https://www.facebook.com/campaign/landing.php?campaign_id=14884913640&extra_1=s%7Cc%7C589460569891%7Cb%7Cfacebook%20signin%7C&placement=&creative=589460569891&keyword=facebook%20signin&partner_id=googlesem&extra_2=campaignid%3D14884913640%26adgroupid%3D128696221832%26matchtype%3Db%26network%3Dg%26source%3Dnotmobile%26search_or_content%3Ds%26device%3Dc%26devicemodel%3D%26adposition%3D%26target%3D%26targetid%3Dkwd-3821998899%26loc_physical_ms%3D9061891%26loc_interest_ms%3D%26feeditemid%3D%26param1%3D%26param2%3D&gclid=Cj0KCQjw0oyYBhDGARIsAMZEuMureuJAawHG2u91-HcYYvKKVDrf5WQnrptzA5DW0fpNSM1CsRXFUO8aAjPqEALw_wcB">
                            <i className="fab fa-facebook-f">
                                <span style={{ marginLeft: "10px" }}>
                                    Facebook
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="https://www.instagram.com/accounts/login/">
                            <i className="fab fa-instagram">
                                <span style={{ marginLeft: "10px" }}>
                                    Instagram
                                </span>
                            </i>
                        </FooterLink>
                        <FooterLink href="#">
                            <i className="fab fa-twitter">
                                <span style={{ marginLeft: "10px" }}>
                                    Twitter
                                </span>
                            </i>
                        
                            <div class="col-lg-4 text-center mt-3 payment-box">
                                <img loading="lazy" height="50" width="350" alt="" src="//cdn.shopify.com/s/files/1/0057/8938/4802/files/Fotter_payment_icn_2_900x_aff68517-98f4-4a82-9aee-2405cea66251_350x.png?v=1650262054" srcset="//cdn.shopify.com/s/files/1/0057/8938/4802/files/Fotter_payment_icn_2_900x_aff68517-98f4-4a82-9aee-2405cea66251_350x.png?v=1650262054 350w" />

                            </div>
                           
                           
                        </FooterLink>
                    </Column>
                </Row>
            </Container>
        </Box>
    );
};
export default Footer;
