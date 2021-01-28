import React from 'react';
import './TopHeader.css';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import bdImg from '../../../images/BD-Bangladesh-Flag-icon.png';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

const TopHeader = () => {
    return (
        <div className="topheader">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <div className="top_left">
                            <ul>
                                <li className="li_border"><EmailIcon className="icon_1" />afzalbidhan@gmail.com</li>
                                <li><CallIcon className="icon_1" />+880 1793926521</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-7">
                        <div className="top_right">
                            <ul>
                                <li><a href="https://www.facebook.com/AfzalBidhan.AB/" target="_blank"><FacebookIcon className="icon_2" /></a></li>
                                <li><a href="https://www.instagram.com/afzal.bidhan/" target="_blank"><InstagramIcon className="icon_2" /></a></li>
                                <li><a href="https://www.linkedin.com/in/afzal-bidhan-2852571ba/" target="_blank"><LinkedInIcon className="icon_2" /></a></li>
                                <li className="last"><a href="https://github.com/Afzal-BiDhan" target="_blank"><GitHubIcon className="icon_2" /></a></li>
                            </ul>
                            <div className="bd_flag">
                                <a href="https://en.wikipedia.org/wiki/Bangladesh"><img src={bdImg} alt="" /><span>Bangladesh</span></a>
                            </div>
                            <div className="login">
                                <SupervisorAccountIcon className="icon_2" /><span>Login</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopHeader;