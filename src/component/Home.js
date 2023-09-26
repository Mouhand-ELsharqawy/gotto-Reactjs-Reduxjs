import { useEffect,useRef } from "react";
import src1 from '../images/professional-asian-businesswoman-gray-blazer.jpg';
import src2 from '../images/horizontal-shot-happy-mixed-race-females.jpg';
import src3 from '../images/logos/google.png';
import src4 from '../images/logos/apple.png';
import src5 from '../images/logos/meta.png';
import src6 from '../images/logos/slack.png';
import src7 from '../images/logos/creative-market.png';
import src8 from '../images/people-working-as-team-company.jpg';
import src10 from '../images/logos/salesforce.png';
import src21 from '../images/avatar/portrait-charming-middle-aged-attractive-woman-with-blonde-hair.jpg';
import src22 from '../images/left-quote.png';
import src23 from '../images/avatar/medium-shot-smiley-senior-man.jpg';
import src25 from '../images/avatar/portrait-beautiful-young-woman.jpg';
import src26 from '../images/avatar/blond-man-happy-expression.jpg';
import src27 from '../images/avatar/university-study-abroad-lifestyle-concept.jpg';
import { getUsers } from "../redux/JobSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Home = ({title}) => {

    
    

    const {isLoading,users} = useSelector(state => state.users)


    const dispatch = useDispatch();
    useEffect(()=>{
        document.title = title;
            dispatch(getUsers());
    },[dispatch])

    const srcs = [src21,src23,src25,src26,src27]
    const srcs2 = [src3,src4,src5,src6,src7]
    const hours = ["10 hours ago","8 hours ago","12 hours ago","11 hours ago","9 hours ago"]
    const price = ["$50 k","$65 k","$45 k","$60 k","$55 k"]

    

    return ( 
        <>
         <main>

<section className="hero-section d-flex justify-content-center align-items-center">
    <div className="section-overlay"></div>

    <div className="container">
        <div className="row">

            <div className="col-lg-6 col-12 mb-5 mb-lg-0">
                <div className="hero-section-text mt-5">
                    <h6 className="text-white">Are you looking for your dream job?</h6>

                    <h1 className="hero-title text-white mt-4 mb-4">Online Platform. <br/> Best Job portal</h1>

                    <a href="#categories-section" className="custom-btn custom-border-btn btn">Browse Categories</a>
                </div>
            </div>

            <div className="col-lg-6 col-12">
                <form className="custom-form hero-form" action="#" method="post" role="form">
                    <h3 className="text-white mb-3">Search your dream job</h3>

                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon1"><i className="bi-person custom-icon"></i></span>

                                <input type="text"
                                 name="job-title" id="job-title" 
                                 className="form-control" 
                                 placeholder="Job Title" 
                                 required
                                 />
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6 col-12">
                            <div className="input-group">
                                <span className="input-group-text" id="basic-addon2"><i className="bi-geo-alt custom-icon"></i></span>

                                <input type="text" 
                                name="job-location" 
                                id="job-location" 
                                className="form-control" 
                                placeholder="Location" 
                                required
                                />
                            </div>
                        </div>

                        <div className="col-lg-12 col-12">
                            <button type="submit" className="form-control">
                                Find a job
                            </button>
                        </div>

                        <div className="col-12">
                            <div className="d-flex flex-wrap align-items-center mt-4 mt-lg-0">
                                <span className="text-white mb-lg-0 mb-md-0 me-2">Popular keywords:</span>

                                <div>
                                    
                                     <Link to="/joblist" className="badge" >
                                        Web design
                                    </Link>
                                       
                                    <Link to="/joblist" className="badge" >
                                        Marketing
                                    </Link>
                                        
                                    <Link to="/joblist" className="badge" >
                                        Customer support
                                        </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    </div>
</section>


<section className="categories-section section-padding" id="categories-section">
    <div className="container">
        <div className="row justify-content-center align-items-center">

            <div className="col-lg-12 col-12 text-center">
                <h2 className="mb-5">Browse by <span>Categories</span></h2>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
                <div className="categories-block">
                    <a href="#" className="d-flex flex-column justify-content-center align-items-center h-100">
                        <i className="categories-icon bi-window"></i>
                    
                        <small className="categories-block-title">Web design</small>

                        <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                            <span className="categories-block-number-text">320</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
                <div className="categories-block">
                    <a href="#" className="d-flex flex-column justify-content-center align-items-center h-100">
                        <i className="categories-icon bi-twitch"></i>
                    
                        <small className="categories-block-title">Marketing</small>

                        <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                            <span className="categories-block-number-text">180</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
                <div className="categories-block">
                    <a href="#" className="d-flex flex-column justify-content-center align-items-center h-100">
                        <i className="categories-icon bi-play-circle-fill"></i>
                    
                        <small className="categories-block-title">Video</small>

                        <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                            <span className="categories-block-number-text">340</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
                <div className="categories-block">
                    <a href="#" className="d-flex flex-column justify-content-center align-items-center h-100">
                        <i className="categories-icon bi-globe"></i>
                    
                        <small className="categories-block-title">Websites</small>

                        <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                            <span className="categories-block-number-text">140</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="col-lg-2 col-md-4 col-6">
                <div className="categories-block">
                    <a href="#" className="d-flex flex-column justify-content-center align-items-center h-100">
                        <i className="categories-icon bi-people"></i>
                    
                        <small className="categories-block-title">Customer Support</small>

                        <div className="categories-block-number d-flex flex-column justify-content-center align-items-center">
                            <span className="categories-block-number-text">84</span>
                        </div>
                    </a>
                </div>
            </div>

        </div>
    </div>
</section>


<section className="about-section">
    <div className="container">
        <div className="row">

            <div className="col-lg-3 col-12">
                <div className="about-image-wrap custom-border-radius-start">
                    <img src={src1} className="about-image custom-border-radius-start img-fluid" alt="" />

                    <div className="about-info">
                        <h4 className="text-white mb-0 me-2">Julia Ward</h4>

                        <p className="text-white mb-0">Investor</p>
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-12">
                <div className="custom-text-block">
                    <h2 className="text-white mb-2">Introduction Gotto</h2>

                    <p className="text-white">Gotto Job is a free website template for job portals. This layout is based on Bootstrap 5 CSS framework. Thank you for visiting <a href="https://www.tooplate.com" target="_parent">Tooplate website</a>. Images are from <a href="https://www.freepik.com/" target="_blank">FreePik</a> website.</p>

                    <div className="custom-border-btn-wrap d-flex align-items-center mt-5">
                        <a href="about.html" className="custom-btn custom-border-btn btn me-4">Get to know us</a>

                        <a href="#job-section" className="custom-link smoothscroll">Explore Jobs</a>
                    </div>
                </div>
            </div>

            <div className="col-lg-3 col-12">
                <div className="instagram-block">
                    <img src={src2} className="about-image custom-border-radius-end img-fluid" alt="" />

                    <div className="instagram-block-text">
                        <a href="https://instagram.com/" className="custom-btn btn">
                            <i className="bi-instagram"></i>
                            @Gotto
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>


<section className="job-section job-featured-section section-padding" id="job-section">
    <div className="container">
        <div className="row">

            <div className="col-lg-6 col-12 text-center mx-auto mb-4">
                <h2>Featured Jobs</h2>

                <p><strong>Over 10k opening jobs</strong> Feel free to download and use our free HTML templates from Tooplate website.</p>
            </div>

            <div className="col-lg-12 col-12">
                { isLoading && <div> loading.... </div> }
                { users && users.length > 0 ? users.map((user)=>(

                <div className="job-thumb d-flex" key={user.id} > 
                    <div className="job-image-wrap bg-white shadow-lg">
                        <img src={srcs2[Math.floor(Math.random()*srcs2.length)]} className="job-image img-fluid" alt="" />
                    </div>

                    <div className="job-body d-flex flex-wrap flex-auto align-items-center ms-4">
                        <div className="mb-3">
                            <h4 className="job-title mb-lg-0">
                                <a href="job-details.html" className="job-title-link">{user.company.name}</a>
                            </h4>

                            <div className="d-flex flex-wrap align-items-center">
                                <p className="job-location mb-0">
                                    <i className="custom-icon bi-geo-alt me-1"></i>
                                    {/* Kuala, Malaysia */}
                                    { user.company.catchPhrase }
                                </p>

                                <p className="job-date mb-0">
                                    <i className="custom-icon bi-clock me-1"></i>
                                    { hours[Math.floor(Math.random()*hours.length)] }
                                </p>

                                <p className="job-price mb-0">
                                    <i className="custom-icon bi-cash me-1"></i>
                                    { price[Math.floor(Math.random()*price.length)] }
                                </p>

                                <div className="d-flex">
                                    <p className="mb-0">
                                        
                                             {user.company.catchPhrase} 
                                    </p>

                                    <p className="mb-0">
                                             { user.company.bs } 
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="job-section-btn-wrap">
                            
                                <Link to="/jobdetail" className="custom-btn btn">
                                    Apply now
                                </Link>
                                
                        </div>
                    </div>
                    </div>
                )):"there is no data yet" }
                
                
            </div>

        </div>
    </div>
</section>


<section>
    <div className="container">
        <div className="row">

            <div className="col-lg-6 col-12">
                <div className="custom-text-block custom-border-radius-start">
                    <h2 className="text-white mb-3">Gotto helps you an easier way to get new job</h2>

                    <p className="text-white">You are not allowed to redistribute the template ZIP file on any other template collection website. Please contact us for more info. Thank you.</p>

                    <div className="d-flex mt-4">
                        <div className="counter-thumb"> 
                            <div className="d-flex">
                                <span className="counter-number" data-from="1" data-to="12" data-speed="1000"></span>
                                <span className="counter-number-text">M</span>
                            </div>

                            <span className="counter-text">Daily active users</span>
                        </div> 

                        <div className="counter-thumb">    
                            <div className="d-flex">
                                <span className="counter-number" data-from="1" data-to="450" data-speed="1000"></span>
                                <span className="counter-number-text">k</span>
                            </div>

                            <span className="counter-text">Opening jobs</span>
                        </div> 
                    </div>
                </div>
            </div>

            <div className="col-lg-6 col-12">
                <div className="video-thumb">
                    <img src={src8} className="about-image custom-border-radius-end img-fluid" alt=""/>

                    <div className="video-info">
                        <a href="https://www.youtube.com/tooplate" className="youtube-icon bi-youtube"></a>
                    </div>
                </div>
            </div>

        </div>
    </div>
</section>


<section className="job-section recent-jobs-section section-padding">
    <div className="container">
        <div className="row align-items-center">

            <div className="col-lg-6 col-12 mb-4">
                <h2>Recent Jobs</h2>

                <p><strong>Over 10k opening jobs</strong> Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito adipcingi elit eismuod larehai</p>
            </div>

            <div className="clearfix"></div>

            
                { isLoading && <div> Loading ... </div> }
                { users && users.length > 0 ? users.map((user)=>(
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="job-thumb job-thumb-box" >
                        <div className="job-image-box-wrap" key={user.id}>
                        
                                <Link to="/jobdetail">
                                <img src={ srcs[Math.floor(Math.random()*srcs.length)] } className="job-image img-fluid" alt=""/>
                                </Link>

                            <div className="job-image-box-wrap-info d-flex align-items-center">
                                <p className="mb-0">
                                    
                                        <Link className="badge badge-level" to="/jobdetail">
                                        { user.website }
                                        </Link> 
                                </p>

                                <p className="mb-0">
                                    {/* <a href="job-listings.html" className=> */}
                                    <Link to="/jobdetail" className="badge">
                                         { user.company.name } 
                                    </Link>
                                         {/* </a> */}
                                </p>
                            </div>
                        </div>

                        <div className="job-body">
                            <h4 className="job-title">
                                {/* <a href="job-details.html" className="job-title-link">  */}
                                <Link to="/jobdetail" className="job-title-link">
                                { user.company.bs }
                                </Link>
                                 {/* </a> */}
                            </h4>

                            <div className="d-flex align-items-center">
                                <div className="job-image-wrap d-flex align-items-center bg-white shadow-lg mt-2 mb-4">
                                    <img src={src10} className="job-image me-3 img-fluid" alt=""/>

                                    <p className="mb-0"> { user.company.catchPhrase } </p>
                                </div>

                                {/* <a href="#" className="bi-bookmark ms-auto me-2"> */}
                                {/* </a> */}

                                <a href="#" className="bi-heart">
                                </a>
                            </div>

                            <div className="d-flex align-items-center">
                                <p className="job-location">
                                    <i className="custom-icon bi-geo-alt me-1"></i>
                                    { user.name }
                                </p>

                                <p className="job-date">
                                    <i className="custom-icon bi-clock me-1"></i>
                                    { hours[Math.floor(Math.random()*5)] }
                                </p>
                            </div>

                            <div className="d-flex align-items-center border-top pt-3">
                                <p className="job-price mb-0">
                                    <i className="custom-icon bi-cash me-1"></i>
                                    { price[Math.floor(Math.random()*5)] }
                                </p>

                                
                                    <Link to="jobdetail" className="custom-btn btn ms-auto" >
                                    Apply now
                                    </Link>
                                    
                            </div>
                        </div>
                        </div>
                        </div>
                )):"there is no data yet" }

    </div>
    </div>
    
</section>


<section className="reviews-section section-padding">
    <div className="container">
        <div className="row">

            <div className="col-lg-12 col-12">
                <h2 className="text-center mb-5">Happy customers</h2>

                <div className="owl-carousel owl-theme reviews-carousel">
                    {isLoading && <div>Loading...</div>}
                    { users && users.length > 0 ?  users.map((user)=>(

                                <div className="reviews-thumb" key={user.id}>
                                                    
                                <div className="reviews-info d-flex align-items-center">
                                    <img src={srcs[Math.floor(Math.random()*5)]} className="avatar-image img-fluid" alt=""/>

                                    <div className="d-flex align-items-center justify-content-between flex-wrap w-100 ms-3">
                                        <p className="mb-0" >
                                            <strong>{ user.name }</strong>
                                            <small>{ user.company.name }</small>
                                        </p>

                                        <div className="reviews-icons">
                                            <i className="bi-star-fill"></i>
                                            <i className="bi-star-fill"></i>
                                            <i className="bi-star-fill"></i>
                                            <i className="bi-star-fill"></i>
                                            <i className="bi-star-fill"></i>
                                        </div>
                                    </div>
                                </div>

                                <div className="reviews-body">
                                    <img src={src22} className="quote-icon img-fluid" alt=""/>

                                    <h4 className="reviews-title"> {user.company.catchPhrase} </h4>
                                </div>
                                </div>

                    )): "there is no data here" }
                    

                    
                </div> 
            </div>

        </div>
    </div>
</section>


<section className="cta-section">
    <div className="section-overlay"></div>

    <div className="container">
        <div className="row">

            <div className="col-lg-6 col-10">
                <h2 className="text-white mb-2">Over 10k opening jobs</h2>

                <p className="text-white">If you are looking for free HTML templates, you may visit Tooplate website. If you need a collection of free templates, you can visit Too CSS website.</p>
            </div>

            <div className="col-lg-4 col-12 ms-auto">
                <div className="custom-border-btn-wrap d-flex align-items-center mt-lg-4 mt-2">
                    <a href="#" className="custom-btn custom-border-btn btn me-4">Create an account</a>

                    <a href="#" className="custom-link">Post a job</a>
                </div>
            </div>

        </div>
    </div>
</section>
</main>
        
        </>
     );
}
 
export default Home;