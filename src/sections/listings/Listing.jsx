import Image24 from '../../assets/image24.png'
import Image25 from '../../assets/image25.png'
import Image26 from '../../assets/image26.png'
import User from '../../assets/user.jpeg.png'
import { CiHeart } from "react-icons/ci";
import { MdOutlineNavigateNext } from "react-icons/md";
import downarrow from '../../assets/down-icon.svg';
import './listing.css'

const Listing = () => {
  return (
    <section id="listing">
        <div className="container section__container">

            <div className="section__top__container">
                <h1>Featured Listings</h1>
            <img src={downarrow} alt="" className="down__arrow" />
            </div>

            <div className="listin__categories">
                
                <div className="each__listing__on">
                    <h3>ALL Items (5125)</h3>
                </div>

                <div className="each__listing">
                    <h3>Resident Spaces (64)</h3>
                </div>

                <div className="each__listing">
                    <h3>Sports Venue</h3>
                </div>

                <div className="each__listing">
                    <h3>Meeting Spaces</h3>
                </div>

                <div className="each__listing">
                    <h3>Vans & Buses</h3>
                </div>

                <div className="each__listing">
                    <h3>Cars & SUVs</h3>
                </div>

                <div className="each__listing">
                    <h3>Lorries & Industrial Vehicles</h3>
                </div>
                <div className="each__listing">
                    <span className="list__next__icon"><MdOutlineNavigateNext /></span>
                </div>
            </div>

            <div className="listing__property">
                <div className="each__property">
                    <div className="img__test__property">
                      <div className="div-image">
                      <img className='each__image' src={Image24} alt="" />
                      <p className="taggg">For Rent</p>
                      </div>
                      <h4 className="property__price">85,000 LKR <span>/Month</span></h4>
                      <h2 className="property__name">Luxury villa in Rego Park</h2>
                      {/* <span className="proptery__cond">
                              For Rent
                      </span> */}
                    </div>
                    

                    <div className="text__each__property">
                      <div className="other__property__tag">
                          <h5>3 Bedrooms</h5>
                          <h5 className='bath'>2 Bathrooms</h5>
                          <h5>2500 Square FT</h5>
                      </div>

                      <div className="property__tag">

                          <div className="yeah_pr">
                          <div className="img__user">
                            <img className="property__user" src={User} alt=""  />
                          </div>
                          
                            <div className="user__property__tag">
                                <h3>Anne Liza</h3>
                                <h6>Property Seller</h6>
                            </div>
                          </div>

                          <span className="like__icon"><CiHeart /></span>
                       </div>
                    </div>
                </div>

                <div className="each__property">
                    <div className="img__test__property">
                      <div className="div-image">
                      <img className='each__image' src={Image25} alt="" />
                      <p className="taggg">For Rent</p>
                      </div>
                      <h4 className="property__price">85,000 LKR <span>/Month</span></h4>
                      <h2 className="property__name">Luxury villa in Rego Park</h2>
                      {/* <span className="proptery__cond">
                              For Rent
                      </span> */}
                    </div>
                    

                    <div className="text__each__property">
                      <div className="other__property__tag">
                          <h5>3 Bedrooms</h5>
                          <h5 className='bath'>2 Bathrooms</h5>
                          <h5>2500 Square FT</h5>
                          <p className="taggg">For Rent</p>
                      </div>

                      <div className="property__tag">

                          <div className="yeah_pr">
                          <div className="img__user">
                            <img className="property__user" src={User} alt=""  />
                          </div>
                          
                            <div className="user__property__tag">
                                <h3>Anne Liza</h3>
                                <h6>Property Seller</h6>
                            </div>
                          </div>

                          <span className="like__icon"><CiHeart /></span>
                       </div>
                    </div>
                </div>

                <div className="each__property">
                    <div className="img__test__property">
                      <div className="div-image">
                      <img className='each__image' src={Image26} alt="" />
                      <p className="taggg">For Rent</p>
                      </div>
                      <h4 className="property__price">85,000 LKR <span>/Month</span></h4>
                      <h2 className="property__name">Luxury villa in Rego Park</h2>
                      {/* <span className="proptery__cond">
                              For Rent
                      </span> */}
                    </div>
                    

                    <div className="text__each__property">
                      <div className="other__property__tag">
                          <h5>3 Bedrooms</h5>
                          <h5 className='bath'>2 Bathrooms</h5>
                          <h5>2500 Square FT</h5>
                      </div>

                      <div className="property__tag">

                          <div className="yeah_pr">
                          <div className="img__user">
                            <img className="property__user" src={User} alt=""  />
                          </div>
                          
                            <div className="user__property__tag">
                                <h3>Anne Liza</h3>
                                <h6>Property Seller</h6>
                            </div>
                          </div>

                          <span className="like__icon"><CiHeart /></span>
                       </div>
                    </div>
                </div>
                
                <div className="each__property">
                    <div className="img__test__property">
                      <div className="div-image">
                      <img className='each__image' src={Image24} alt="" />
                      <p className="taggg">For Rent</p>
                      </div>
                      <h4 className="property__price">85,000 LKR <span>/Month</span></h4>
                      <h2 className="property__name">Luxury villa in Rego Park</h2>
                      {/* <span className="proptery__cond">
                              For Rent
                      </span> */}
                    </div>
                    

                    <div className="text__each__property">
                      <div className="other__property__tag">
                          <h5>3 Bedrooms</h5>
                          <h5 className='bath'>2 Bathrooms</h5>
                          <h5>2500 Square FT</h5>
                      </div>

                      <div className="property__tag">

                          <div className="yeah_pr">
                          <div className="img__user">
                            <img className="property__user" src={User} alt=""  />
                          </div>
                          
                            <div className="user__property__tag">
                                <h3>Anne Liza</h3>
                                <h6>Property Seller</h6>
                            </div>
                          </div>

                          <span className="like__icon"><CiHeart /></span>
                       </div>
                    </div>
                </div>

                <div className="each__property">
                    <div className="img__test__property">
                      <div className="div-image">
                      <img className='each__image' src={Image25} alt="" />
                      <p className="taggg">For Rent</p>
                      </div>
                      <h4 className="property__price">85,000 LKR <span>/Month</span></h4>
                      <h2 className="property__name">Luxury villa in Rego Park</h2>
                      {/* <span className="proptery__cond">
                              For Rent
                      </span> */}
                    </div>
                    

                    <div className="text__each__property">
                      <div className="other__property__tag">
                          <h5>3 Bedrooms</h5>
                          <h5 className='bath'>2 Bathrooms</h5>
                          <h5>2500 Square FT</h5>
                      </div>

                      <div className="property__tag">

                          <div className="yeah_pr">
                          <div className="img__user">
                            <img className="property__user" src={User} alt=""  />
                          </div>
                          
                            <div className="user__property__tag">
                                <h3>Anne Liza</h3>
                                <h6>Property Seller</h6>
                            </div>
                          </div>

                          <span className="like__icon"><CiHeart /></span>
                       </div>
                    </div>
                </div>

                <div className="each__property">
                    <div className="img__test__property">
                      <div className="div-image">
                      <img className='each__image' src={Image26} alt="" />
                      <p className="taggg">For Rent</p>
                      </div>
                      <h4 className="property__price">85,000 LKR <span>/Month</span></h4>
                      <h2 className="property__name">Luxury villa in Rego Park</h2>
                      {/* <span className="proptery__cond">
                              For Rent
                      </span> */}
                    </div>
                    

                    <div className="text__each__property">
                      <div className="other__property__tag">
                          <h5>3 Bedrooms</h5>
                          <h5 className='bath'>2 Bathrooms</h5>
                          <h5>2500 Square FT</h5>
                      </div>

                      <div className="property__tag">

                          <div className="yeah_pr">
                          <div className="img__user">
                            <img className="property__user" src={User} alt=""  />
                          </div>
                          
                            <div className="user__property__tag">
                                <h3>Anne Liza</h3>
                                <h6>Property Seller</h6>
                            </div>
                          </div>

                          <span className="like__icon"><CiHeart /></span>
                       </div>
                    </div>
                </div>              

            </div>
            
            <span className="load__more">Load More</span>
        </div>
     
    </section>
  )
}

export default Listing