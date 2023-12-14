import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import vtLogo from '../../assets/vt.png';

function Terms() {
    // You can use the useNavigate hook if you need to navigate programmatically
    const navigate = useNavigate();

    const goToItemsPage = () => {
        navigate('/items');
    };

    // Example function to handle a "Return to top" action
    const returnToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <div className="terms-container">
            <div className='terms-header'>
                <h1>Terms of Service</h1>
            </div>

            <div className="terms-content">
                <div>
                    <p>
                        Hokie Marketplace is a dedicated Marketplace app for Virginia Tech students interested in buying and selling things locally online.
                        We don’t charge you to use VT Marketplace or the other products and services covered by these Terms, unless we state otherwise. We
                        don’t sell your personal data to advertisers, and we don’t share information that directly identifies you (such as your name, email
                        address or other contact information) with advertisers unless you give us specific permission. Our <a href='/privacy'>Privacy Policy</a>
                        explains how we collect and use your personal data to provide all of the services described below.
                    </p>
                </div> <br></br>

                <div>
                    <h2>1. The services we provide</h2>
                    <p>
                        Our mission is to give people the power to build community and bring the world closer together. To help advance this mission, we provide
                        the Products and services described below to you:
                    </p>
                    <ul>
                        <li><b>Provide a personalized experience for you:</b>Your experience on Hokie Marketplace is unlike anyone else's: from the posts, events,
                        and other content you see in Marketplace - to personalize your experience.</li>
                        <li><b>Connect you with people you care about:</b>We help you find and connect with fellow VT Hokies who's products are of interest to you.</li>
                        <li><b>Help you discover content and products that may interest you:</b>We show you personalized offers and products to help you discover
                        content and products that are offered by fellow Hokies through Marketplace.</li>
                        <li><b>Promote the safety, security, and integrity of our services, combat harmful conduct and keep our community of users safe:</b>People
                        will only build community on Marketplace products if they feel safe and secure. We work hard to maintain the security (including the
                        availability, authenticity, integrity, and confidentiality) of our Products and services. We employ advanced technical systems to detect
                        potential misuse of our Products, harmful conduct towards others, and situations where we may be able to help support or protect our
                        community, including to respond to user reports of potentially violating content. If we learn of content or conduct like this, we may take
                        appropriate action based on our assessment that may include - notifying you, offering help, removing content, removing or restricting
                        access to certain features, disabling an account, or contacting law enforcement. For more information, please review our <a href='/privacy'>Privacy Policy</a>.</li>
                    </ul>
                </div> <br></br>

                <div>
                    <h2>Your commitments to Hokie Marketplace and our community</h2>
                    <p>We provide these services to you and others to help advance our mission. In exchange, we need you to make the following commitments:</p>
                    <ol>
                        <li>
                            <b>Who can use VT Marketplace?</b>
                            <p>When people stand behind their opinions and actions, our community is safer and more accountable. For this reason, you must:
                                <ul>
                                    <li>Provide for your account the same name that you use in everyday life.</li>
                                    <li>Provide accurate information about yourself.</li>
                                    <li>Create only one account (your own) and use it for personal purposes.</li>
                                    <li>Not share your password, give access to your VT Marketplace account to others, or transfer your account to anyone else (without our permission).</li>
                                </ul> <br></br>
                                    
                                We try to make VT Marketplace broadly available to everyone, but you cannot use VT Marketplace if:
                                <ul>
                                    <li>You are under 13 years old.</li>
                                    <li>You are a convicted sex offender.</li>
                                    <li>We've previously disabled your account for violations of our Terms or the Community Standards, or other terms and policies that
                                        apply to your use of Marketplace. If we disable your account for a violation of our Terms, the Community Standards, or other terms
                                        and policies, you agree not to create another account without our permission. Receiving permission to create a new account is
                                        provided at our sole discretion, and does not mean or imply that the disciplinary action was wrong or without cause.</li>
                                    <li>You are prohibited from receiving our products, services, or software under applicable laws.</li>
                                </ul>
                            </p>
                        </li> <br></br>

                        <li>
                            <b>What you can share and do on VT Marketplace</b>
                            <p>We want people to use VT Marketplace to share content that is important to them, but not at the expense of the safety and well-being of
                                others or the integrity of our community. You therefore agree not to engage in the conduct described below (or to facilitate or support others in doing so):
                                <br></br><br></br>
                                <ol>
                                    <li>You may not use our Products to do or share anything:</li>
                                    <ul>
                                        <li>That violates these Terms, the Community Standards, or other <u>terms and policies</u> that apply to your use of our Products.</li>
                                        <li>That is unlawful, misleading, discriminatory or fraudulent (or assists someone else in using our Products in such a way).</li>
                                        <li>That you do not own or have the necessary rights to share.</li>
                                        <li>That infringes or violates someone else's rights, including their intellectual property rights (such as by infringing
                                            another’s copyright or trademark, or distributing or selling counterfeit or pirated goods), unless an exception or
                                            limitation applies under applicable law.</li>
                                    </ul> <br></br>

                                    <li>You may not upload viruses or malicious code, use the services to send spam, or do anything else that could disable, overburden,
                                        interfere with, or impair the proper working, integrity, operation, or appearance of our services, systemes, or Products.</li> <br></br>
                                    <li>You may not access or collect data from our Products using automated means (without our prior permission) or attempt to access
                                        data you do not have permission to access.</li> <br></br>
                                    <li>You may not proxy, request, or collect Product usernames or passwords, or misappropriate access tokens.</li> <br></br>
                                    <li>You may not sell, license, or purchase any data obtained from us or our services, except as provided in the Platform Terms.</li> <br></br>
                                    <li>You may not misuse any reporting, flagging, dispute, or appeals channel, such as by making fraudulent, duplicative, or groundless reports or appeals.</li> <br></br>
                                </ol>

                                We can remove or restrict access to content that is in violation of these provisions. We can also suspend or disable your account for conduct that
                                violates these provisions. If we remove content that you have shared in violation of the Community Standards, we’ll let you know and explain any
                                options you have to request another review, unless you seriously or repeatedly violate these Terms or if doing so may expose us or others to legal
                                liability; harm our community of users; compromise or interfere with the integrity or operation of any of our services, systems or Products; where
                                we are restricted due to technical limitations; or where we are prohibited from doing so for legal reasons. To help support our community, we
                                encourage you to <a href='/report'>report</a> content or conduct that you believe violates your rights (including intellectual property rights) or
                                our terms and policies, if this feature exists in your jurisdiction. We also can remove or restrict access to content features, services, or information
                                if we determine that doing so is reasonably necessary to avoid or mitigate misuse of our services or adverse legal or regulatory impacts to Hokie Marketplace.
                            </p>
                        </li>
                    </ol>
                </div> <br></br>

                <div>
                    <h2>Additional provisions</h2>
                    <ol>
                        <li>
                            <b>Updating our Terms</b>
                            <p>We work constantly to improve our services and develop new features to make our products better for you and our community. As a result, we may need to update these
                                Terms from time to time to accurately reflect our services and practices, to promote a safe and secure experience on our Products and services, and/or to comply
                                with applicable law. Unless otherwise required by law, we will notify you before we make changes to these Terms and give you an opportunity to review them before
                                they go into effect. Once any updated Terms are in effect, you will be bound by them if you continue to use our Services. We hope that you will continue using our
                                Products, but if you do not agree to our updated Terms and no longer want to be a part of the Marketplace community, you can delete your account at any time.</p>
                        </li>

                        <li>
                            <b>Account suspension or termination</b>
                            <p>We want VT Marketplace to be a place where people feel welcome and safe to express themselves and share their thoughts and ideas.If we determine, in our discretion,
                                that you have clearly, seriously or repeatedly breached our Terms or Policies, including in particular the Community Standards, we may suspend or permanently disable
                                your access to VT Marketplace Company Products, and we may permanently disable or delete your account. We may also disable or delete your account if you repeatedly infringe other
                                people’s intellectual property rights or where we are required to do so for legal reasons.</p>
                            <p>We may disable or delete your account if after registration your account is not confirmed, your account is unused and remains inactive for an extended period of time,
                                or if we detect someone may have used it without your permission and we are unable to confirm your ownership of the account. Where we take such action we’ll let you know
                                and explain any options you have to request a review, unless doing so may expose us or others to legal liability; harm our community of users; compromise or interfere with
                                the integrity or operation of any of our services, systems or Products; where we are restricted due to technical limitations; or where we are prohibited from doing so for
                                legal reasons. If you delete or we disable or delete your account, these Terms shall terminate as an agreement between you and us.</p>
                        </li>

                        <li>
                            <b>Disputes</b>
                            <p>We try to provide clear rules so that we can limit or hopefully avoid disputes between you and us. If a dispute does arise, however, it's useful to know up front where it
                                can be resolved and what laws will apply. You and VT Marketplace each agree that any claim, cause of action, or dispute between us that arises out of or relates to these
                                Terms or your access or use of the Marketplace Products shall be resolved exclusively in a state court located in Montgomery County. You also agree to submit to the personal
                                jurisdiction of either of these courts for the purpose of litigating any such claim, and that the laws of the State of Virginia will govern these Terms and any claim,
                                cause of action, or dispute without regard to conflict of law provisions. Without prejudice to the foregoing, you agree that, in its sole discretion, VT Marketplace may bring
                                any claim, cause of action, or dispute we have against you in any competent court in the county in which you reside that has jurisdiction over the claim.</p>
                        </li>
                    </ol>
                </div>
            </div>
            
            <nav>
                <button onClick={returnToTop} id='top-button'>Return to top</button>
            </nav>
        </div>
    );
}

export default Terms;