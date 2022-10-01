import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkContainer,
  FooterLinkWrap,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle,
  SocialMediaWrap,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  WebSiteRight,
  SocialMedia,
} from "./FooterEl";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <FooterLinkContainer>
            <FooterLinkWrap>
              <FooterLinkItems>
                <FooterLinkTitle>About Us</FooterLinkTitle>
                <FooterLink to="/">How it works</FooterLink>
                <FooterLink to="/">Testimonials</FooterLink>
                <FooterLink to="/">Careers</FooterLink>
                <FooterLink to="/">Investors</FooterLink>
                <FooterLink to="/">Term of Service</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Videos</FooterLinkTitle>
                <FooterLink to="/">Submit Video</FooterLink>
                <FooterLink to="/">Aambassadors</FooterLink>
                <FooterLink to="/">Agency</FooterLink>
                <FooterLink to="/">Influencer</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrap>

            <FooterLinkWrap>
              <FooterLinkItems>
                <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <FooterLink to="/">Contact</FooterLink>
                <FooterLink to="/">Destinations</FooterLink>
                <FooterLink to="/">Soponsorship</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Social Media</FooterLinkTitle>
                <FooterLink to="/">Instagram</FooterLink>
                <FooterLink to="/">Facebook</FooterLink>
                <FooterLink to="/">Youtube</FooterLink>
                <FooterLink to="/">Twitter</FooterLink>
              </FooterLinkItems>
            </FooterLinkWrap>
          </FooterLinkContainer>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              MooFarm
            </SocialLogo>
            <WebSiteRight>
              MooFarm © {new Date().getFullYear()} All rights reserved
            </WebSiteRight>
            <SocialIcons>
              <SocialIconLink
                href="//www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink
                href="//www.facebook.com"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
