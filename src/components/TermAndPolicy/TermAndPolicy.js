import React, { Component } from 'react';
import styles from './TermAndPolicy.scss';
import classNames from 'classnames/bind';


const cx = classNames.bind(styles);

class TermAndPolicy extends Component {
  render() {
    return (
      <div className={cx('positioner')} >
        <p>PingPong Terms of Use</p><br/>
        Last updated March 22, 2018<br/><br/>
        The website located at www.PingPong.com (the “Site”) is a copyrighted work belonging to PingPong Holdings, Inc. (PingPong,” “Us,”“Our,” and/or “We”), 
        and its affiliates, subsidiaries, parent company, and other related companies. PingPong provides websites, including PingPong.com, PingPong.ca, PingPong.de, 
        and related sub-domains, mobile and/or software applications that host content related to cannabis varieties and related products which include reviews 
        and ratings provided by its users, directories of cannabis dispensaries and medical providers, and cannabis-related news stories and other articles 
        (collectively, with all other services provided through the Site, the “Services”). Certain features of the Site or Services may be subject to additional 
        guidelines, terms, or rules, which will be posted on the Site or Services in connection with such features. All such additional terms, guidelines, 
        and rules are incorporated by reference into this Agreement. References to “you” and “your” refer to you, a user of our Site and/or Services.
        <br/><br/>
        THESE TERMS OF USE (“AGREEMENT”) SETS FORTH THE LEGALLY BINDING TERMS FOR YOUR USE OF THE SITE AND SERVICES. BY ACCESSING OR USING THE SITE OR SERVICES, 
        YOU ARE ACCEPTING THIS AGREEMENT AND YOU REPRESENT AND WARRANT THAT YOU HAVE THE RIGHT, AUTHORITY, AND CAPACITY TO ENTER INTO THIS AGREEMENT. YOU MAY NOT ACCESS 
        OR USE THE SITE OR SERVICES OR ACCEPT THE AGREEMENT IF YOU DO NOT HAVE THE CAPACITY TO ENTER INTO THIS AGREEMENT. IF YOU DO NOT AGREE WITH ALL OF THE PROVISIONS OF 
        THIS AGREEMENT, DO NOT ACCESS AND/OR USE THE SITE OR SERVICES. IF YOU ARE USING THE SITE OR SERVICES ON BEHALF OF A COMPANY, ENTITY, OR ORGANIZATION, YOU REPRESENT 
        AND WARRANT THAT YOU ARE AN AUTHORIZED REPRESENTATIVE OF SUCH COMPANY, ENTITY, OR ORGANIZATION WITH THE AUTHORITY TO BIND IT TO THIS AGREEMENT.
        <br/><br/>
        PLEASE READ THESE TERMS CAREFULLY, AS THEY CONTAIN AN AGREEMENT TO ARBITRATE AND OTHER IMPORTANT INFORMATION REGARDING YOUR LEGAL RIGHTS, REMEDIES, 
        AND OBLIGATIONS. THE AGREEMENT TO ARBITRATE REQUIRES (WITH LIMITED EXCEPTION) THAT YOU SUBMIT CLAIMS YOU HAVE AGAINST US TO BINDING AND FINAL ARBITRATION, 
        AND FURTHER (1) YOU WILL ONLY BE PERMITTED TO PURSUE CLAIMS AGAINST COMPANY ON AN INDIVIDUAL BASIS, NOT AS 4.2 PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR 
        REPRESENTATIVE ACTION OR PROCEEDING, AND (2) YOU WILL ONLY BE PERMITTED TO SEEK RELIEF (INCLUDING MONETARY, INJUNCTIVE, AND DECLARATORY RELIEF) ON AN INDIVIDUAL BASIS.
        <br/><br/>
        1. IMPORTANT DISCLAIMERS. ALL INFORMATION CONTAINED ON THE SITE AND SERVICES IS FOR INFORMATIONAL PURPOSES ONLY. CONTENT POSTED BY LEAFLY ON ANY WEBSITE, 
        MOBILE APPLICATION, SOCIAL MEDIA CHANNEL, THIRD-PARTY CONTENT SERVICE, OR ADVERTISEMENT IS FOR INFORMATIONAL PURPOSES ONLY. LEAFLY DOES NOT ENDORSE, AND IS NOT 
        RESPONSIBLE FOR THE ACCURACY OR RELIABILITY OF, ANY OPINION, ADVICE, STATEMENT, OR OTHER INFORMATION MADE ON THE SITE OR SERVICES, INCLUDING USER CONTENT AND 
        THIRD-PARTY MATERIALS (EACH AS DEFINED BELOW). LEAFLY IS NOT RESPONSIBLE FOR YOUR RELATIONSHIP WITH ANY DISPENSARY, RETAIL LOCATION, HEALTH CARE PROVIDER, ANY 
        THIRD-PARTY, OR OTHER USERS OF THE SITE OR SERVICES. LEAFLY IS NOT OBLIGATED TO SCREEN DISPENSARIES, RETAIL LOCATIONS, HEALTH CARE PROVIDERS, OR THEIR MENUS, CONTENT, 
        OR DEALS TO DETERMINE WHETHER THEY ARE QUALIFIED OR AUTHORIZED BY LAW TO PROVIDE THEIR SERVICES OR TO DETERMINE THE ACCURACY OF THEIR MENUS OR OTHER INFORMATION THEY 
        PROVIDE.
      </div>
    );
  }
}

export default TermAndPolicy;