import { Link } from "react-router-dom";

export function Home() {
    return (
        <>
            <section className="hero">
                <div className="hero-text">
                    <h1>S6 Ranch</h1>
                    <h1 className="lines title-small">
                        <span>Reining &amp; Performance Horses</span>
                    </h1>
                </div>

                <Link to="/services" className="main-btn">
                    <span className="main-btn-text">Our Services</span>
                </Link>
            </section>

            <>
                <section className="quick-words">
                    <div className="quick-words-wrapper">
                        <div className="quick-words-top">
                            <div className="quick-words-title">
                                <p className="title-small">Horsemenship</p>
                                <h2>With Integrity</h2>
                            </div>
                            {/* option-2 */}
                            <img
                                src="./src/assets/img/horse-2.jpg"
                                alt="black and white colored tornjak"
                            />
                            {/* <img src="assets/img/horse-3.jpg" alt="black and white colored tornjak"> */}
                        </div>
                        <div className="quick-words-bottom">
                            <p className="text-block">
                                250 characters - See what our 10 acre ranch and NRHA Professional
                                trainers can offer you an your horse. See what our 10acre ranch and
                                NRHA Professional trainers can offer you and your horse. See what our
                                10 acre ranch and NRHA Professional trainers.
                            </p>
                            <p className="read-more">
                                <a className="line" href="/pages/about-breed.html">
                                    read more
                                </a>
                            </p>
                        </div>
                    </div>
                </section>
                <section className="card">
                    <div className="card-wrapper one">
                        <div className="card-border">
                            <div className="card-text">
                                <p className="title-small">Meet Our</p>
                                <h2 className="lines">
                                    <span>Trainers</span>
                                </h2>
                                <a className="main-btn" tabIndex={0} href="/pages/about-breed.html">
                                    <span className="main-btn-text">more info</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper two">
                        <div className="card-border">
                            <div className="card-text">
                                <p className="title-small">Find</p>
                                <h2 className="lines">
                                    <span>Lessions</span>
                                </h2>
                                <a className="main-btn" tabIndex={0} href="/pages/facilities.html">
                                    <span className="main-btn-text">more info</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="card-wrapper three">
                        <div className="card-border">
                            <div className="card-text">
                                <p className="title-small">Equine</p>
                                <h2 className="lines">
                                    <span>Breedeing</span>
                                </h2>
                                <a className="main-btn" tabIndex={0} href="/pages/breeders.html">
                                    <span className="main-btn-text">more info</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="stats">
                    <div className="stats-wrapper">
                        <div className="stats-inner-wrapper">
                            <div className="stats-set">
                                <div className="stats-text">
                                    <p className="stats-number">5</p>
                                    {/* <hr> */}
                                    <p className="title-small">NRHA</p>
                                    <p className="title-large">Members</p>
                                </div>
                            </div>
                            <div className="stats-set">
                                <div className="stats-text">
                                    <p className="stats-number">6</p>
                                    {/* <hr> */}
                                    <p className="title-small">Ranch</p>
                                    <p className="title-large">Horses</p>
                                </div>
                            </div>
                        </div>
                        <div className="stats-inner-wrapper">
                            <div className="stats-set">
                                <div className="stats-text">
                                    <p className="stats-number">10</p>
                                    {/* <hr> */}
                                    <p className="title-small">Total</p>
                                    <p className="title-large">Acres</p>
                                </div>
                            </div>
                            <div className="stats-set">
                                <div className="stats-text">
                                    <p className="stats-number">25</p>
                                    {/* <hr> */}
                                    <p className="title-small">Barn</p>
                                    <p className="title-large">Stalls</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="news">
                    <div className="news-wrapper">
                        <div className="news-text">
                            <p className="title-small">Our Wonderful</p>
                            <h2>Ranch Family</h2>
                        </div>
                        <div className="news-tile-wrapper">
                            <div className="news-tile">
                                <div className="tile-stories">
                                    {/* option-2 */}
                                    {/*<img src="assets/img/group-photo2.jpg"
                          alt="large group of people gathered around a firepit"> */}
                                    <img
                                        src="./src/assets/img/group-photo3.jpg"
                                        alt="large group of people gathered around a firepit"
                                    />
                                    <div className="news-tile-text">
                                        <h3 className="paragraph-large">Community is Everything</h3>
                                        <p className="text-block">
                                            Watching our students learn and grow is the heart of what we do.
                                            S6 Ranch invites people of every learning stage to participate
                                            in our coaching. We believe horshmenship is for all those who
                                            have the heart to try.
                                        </p>
                                        <p className="read-more">
                                            <a href="https://www.facebook.com/profile.php?id=100087839483211&mibextid=LQQJ4d">
                                                Join Us on Facebook
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <a class="main-btn" tabindex="0" href="/pages/membership.html">
                            <span class="main-btn-text">Become a member</span>
                        </a> */}
                    </div>
                </section>
            </>

        </>
    );
}

