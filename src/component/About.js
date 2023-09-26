import { useEffect } from "react";
import src1 from '../images/horizontal-shot-happy-mixed-race-females.jpg';
// import src2 from '../images/avatar/portrait-charming-middle-aged-attractive-woman-with-blonde-hair.jpg';
import src3 from '../images/left-quote.png';
// import src4 from '../images/avatar/university-study-abroad-lifestyle-concept-satisfied-happy-asian-male-student-glasses-shirt-showing-thumbs-up-approval-likes-studying-college-holding-laptop-backpack.jpg';
import src5 from '../images/avatar/medium-shot-smiley-senior-man.jpg';
// import src6 from '../images/avatar/portrait-beautiful-young-woman-studying-table-with-laptop-computer-notebook-home-studying-online-e-learning-system.jpg';
import src7 from '../images/avatar/blond-man-happy-expression.jpg';
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../redux/JobSlice";
import { Link } from "react-router-dom/cjs/react-router-dom";
const About = ({title}) => {
    const dispatch = useDispatch();
    const {users,isLoading} = useSelector(state => state.users)

    useEffect(()=>{
        document.title = title
        dispatch(getUsers())
    },[dispatch])

    const srcs = [src3,src5,src7]
    return ( 
        <>
        
        <main>

            <header class="site-header">
                <div class="section-overlay"></div>

                <div class="container">
                    <div class="row">
                        
                        <div class="col-lg-12 col-12 text-center">
                            <h1 class="text-white">About Gotto</h1>

                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb justify-content-center">
                                    <li class="breadcrumb-item">
                                        <Link to="/">
                                            Home
                                        </Link>
                                        </li>

                                    <li class="breadcrumb-item active" aria-current="page">About</li>
                                </ol>
                            </nav>
                        </div>

                    </div>
                </div>
            </header>


            <section class="about-section">
                <div class="container">
                    <div class="row justify-content-center align-items-center">

                        <div class="col-lg-5 col-12">
                            <div class="about-info-text">
                                <h2 class="mb-0">Introducing Gotto Job</h2>

                                <h4 class="mb-2">Get hired. Get your new job</h4>

                                <p>Thank you for visiting our Gotto Job website. Are you looking for best HTML templates? Please visit Tooplate website to download free templates.</p>

                                <div class="d-flex align-items-center mt-4">
                                    <a href="#services-section" class="custom-btn custom-border-btn btn me-4">Explore Services</a>

                                    <a href="contact.html" class="custom-link smoothscroll">Contact</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-5 col-12 mt-5 mt-lg-0">
                            <div class="about-image-wrap">
                                <img src={src1} class="about-image about-image-border-radius img-fluid" alt=""/>

                                <div class="about-info d-flex">
                                    <h4 class="text-white mb-0 me-2">20</h4>

                                    <p class="text-white mb-0">years of experience</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section class="services-section section-padding" id="services-section">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12 text-center">
                            <h2 class="mb-5">We deliver best services</h2>
                        </div>

                        <div class="services-block-wrap col-lg-4 col-md-6 col-12">
                            <div class="services-block">
                                <div class="services-block-title-wrap">
                                    <i class="services-block-icon bi-window"></i>
                                
                                    <h4 class="services-block-title">Website design</h4>
                                </div>

                                <div class="services-block-body">
                                    <p>Tooplate provides a variety of free Bootstrap 5 website templates for your commercial or business websites.</p>
                                </div>
                            </div>
                        </div>

                        <div class="services-block-wrap col-lg-4 col-md-6 col-12 my-4 my-lg-0 my-md-0">
                            <div class="services-block">
                                <div class="services-block-title-wrap">
                                    <i class="services-block-icon bi-twitch"></i>
                                
                                    <h4 class="services-block-title">Marketing</h4>
                                </div>

                                <div class="services-block-body">
                                    <p>You can download any free template for your website. Please tell your friends about Tooplate.</p>
                                </div>
                            </div>
                        </div>

                        <div class="services-block-wrap col-lg-4 col-md-6 col-12">
                            <div class="services-block">
                                <div class="services-block-title-wrap">
                                    <i class="services-block-icon bi-play-circle-fill"></i>
                                
                                    <h4 class="services-block-title">Video</h4>
                                </div>

                                <div class="services-block-body">
                                    <p>You are not allowed to redistribute the template ZIP file on any other template collection website.</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section class="reviews-section section-padding">
                <div class="container">
                    <div class="row">

                        <div class="col-lg-12 col-12">
                            <h2 class="text-center mb-5">Happy customers</h2>
                            <div class="owl-carousel owl-theme reviews-carousel">
                             { isLoading && <div> loading.... </div> }
                             { users && users.length > 0 ? users.map((user)=>(
                                <div class="reviews-thumb" key={user.id}>
                                
                                <div class="reviews-info d-flex align-items-center">
                                    <img src={srcs[Math.floor(Math.random()*srcs.length)]} class="avatar-image img-fluid" alt="" />

                                    <div class="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                                        <p class="mb-0">
                                            <strong> { user.name } </strong>
                                            <small>{ user.company.name }</small>
                                        </p>

                                        <div class="reviews-icons">
                                            <i class="bi-star-fill"></i>
                                            <i class="bi-star-fill"></i>
                                            <i class="bi-star-fill"></i>
                                            <i class="bi-star-fill"></i>
                                            <i class="bi-star-fill"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="reviews-body">
                                    <img src={srcs[Math.floor(Math.random()*srcs.length)]} class="quote-icon img-fluid" alt="" />

                                    <h4 class="reviews-title"> { user.company.catchPhrase } </h4>
                                </div>
                            </div>
                             )):"Oops, there is no users yet" }
                            </div>
                        </div>

                    </div>
                </div>
            </section>


            <section class="cta-section">
                <div class="section-overlay"></div>

                <div class="container">
                    <div class="row">

                        <div class="col-lg-6 col-10">
                            <h2 class="text-white mb-2">Over 10k opening jobs</h2>

                            <p class="text-white">Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit eismuod larehai</p>
                        </div>

                        <div class="col-lg-4 col-12 ms-auto">
                            <div class="custom-border-btn-wrap d-flex align-items-center mt-lg-4 mt-2">
                                <a  class="custom-btn custom-border-btn btn me-4">Create an account</a>

                                <a  class="custom-link">Post a job</a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </main>
        </>
     );
}
 
export default About;