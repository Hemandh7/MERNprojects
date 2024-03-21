// React component for the landing page
import React from 'react';
import './LandingPage.css';


const featuredProperties = [
  { id: 1, image: 'https://e0.pxfuel.com/wallpapers/837/406/desktop-wallpaper-luxury-house-luxury-villa.jpg', title: 'Luxury Villa', price: '$950,000', location: 'Miami, FL', beds: 4, baths: 3 },
  { id: 2, image: 'https://w0.peakpx.com/wallpaper/716/731/HD-wallpaper-cottage-cozy-house-garden-nature.jpg', title: 'Cozy Cottage', price: '$550,000', location: 'Aspen, CO', beds: 3, baths: 2 },
  { id: 3, image: 'https://w0.peakpx.com/wallpaper/284/788/HD-wallpaper-tiny-apartment-with-a-wonderful-view-city-window-apartment-view.jpg', title: 'Urban Apartment', price: '$850,000', location: 'New York, NY', beds: 2, baths: 2 }
];

const designers = [
  { id: 1, name: 'Kathryn Murphy', image: 'https://media.istockphoto.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=0&k=20&c=EqR2Lffp4tkIYzpqYh8aYIPRr-gmZliRHRxcQC5yylY=', role: 'Lead Architect' },
  { id: 2, name: 'Brooklyn Simmons', image: 'https://img.freepik.com/premium-photo/happy-proud-prosperous-mid-aged-mature-professional-latin-business-man-ceo-executive-wearing-suit-standing-office-arms-crossed-looking-away-thinking-success-leadership-side-profile-view_868783-17939.jpg', role: 'Interior Designer' },
  { id: 3, name: 'Floyd Miles', image: 'https://img.freepik.com/premium-photo/photo-45-year-old-german-business-man-smiling-dark-blond-hair-full-body-sitting-office_935552-4539.jpg', role: 'Landscape Artist' },
  { id: 4, name: 'Ronald Richards', image: 'https://www.shutterstock.com/image-photo/head-shot-portrait-close-smiling-600nw-1714666150.jpg', role: 'Real Estate Photographer' }
];

const topRatedProperties = [
  { id: 1, image: 'https://pix10.agoda.net/hotelImages/627/6271526/6271526_18120719530070159593.png?ca=7&ce=1&s=414x232&ar=16x9', title: 'Beachfront Bungalow', rating: 4.9 },
  { id: 2, image: 'https://i.pinimg.com/736x/98/0f/a9/980fa92002f33078f6958ef0b72aa31c.jpg', title: 'Mountain Retreat', rating: 4.8 },
  { id: 3, image: 'https://media.istockphoto.com/id/178505819/photo/beautiful-newly-constructed-modern-home.jpg?s=612x612&w=0&k=20&c=VCjiBm0D-ycd4srhVlMdJnwVWRe2aMIBHGaeiUz_cHI=', title: 'Suburban Residence', rating: 4.7 }
];



const LandingPage = () => {
    return (
      <div className="landing-page">
        <nav className="top-nav">
          <div className="logo">Logo</div>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#properties">Properties</a></li>
            <li><a href="#agents">Agents</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#pages">Pages</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <button className="sign-in-btn">Sign in / Join</button>
        </nav>
  
        <header className="banner">
            <div className='topsec'>
            <p>---------We are offering the</p>
          <h1>Best Real Estate Deals</h1>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
nostrud amet.</p>
          <button className="details-btn">More Details</button></div>
        </header>
  
        <section className="section-box">
          <h2 className="section-title">Featured Properties</h2>
          <div className="section-cards">
            {featuredProperties.map(property => (
              <div key={property.id} className="section-card">
                <img src={property.image} alt={property.title} />
                <div className="card-info">
                  <h3>{property.title}</h3>
                  <p className="price">{property.price}</p>
                  <p className="location">{property.location}</p>
                  <p className="details">{property.beds} Beds • {property.baths} Baths</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        <section className="section-box">
          <h2 className="section-title">Meet Our Designers</h2>
          <div className="designer-profiles">
            {designers.map(designer => (
              <div key={designer.id} className="designer-profile">
                <img src={designer.image} alt={designer.name} />
                <div className="card-info">
                  <h3>{designer.name}</h3>
                  <p>{designer.role}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        <section className="section-box">
          <h2 className="section-title">Top Rated Properties</h2>
          <div className="section-cards">
            {topRatedProperties.map(property => (
              <div key={property.id} className="section-card">
                <img src={property.image} alt={property.title} />
                <div className="card-info">
                  <h3>{property.title}</h3>
                  <p>Rating: {property.rating} ⭐</p>
                </div>
              </div>
            ))}
          </div>
        </section>
  
        {/* Footer Section */}
        <footer>
          {/* Footer Content */}
        </footer>
      </div>
    );
  };
  
  export default LandingPage;