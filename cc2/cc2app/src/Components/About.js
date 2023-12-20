// AboutPage.js
import React from "react";
import "./about.css";

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">Welcome to LeMeridean</h1>
      <p>
        At LeMeridean, we believe in providing unparalleled hospitality
        experiences that go beyond expectations. Nestled at the heart of
        [Location], our hotel is a testament to luxury, comfort, and exceptional
        service.
      </p>

      <h2 className="about-heading">Our Story</h2>
      <p>
        Established in [Year], LeMeridean has been a beacon of elegance in the
        hospitality industry. From our humble beginnings to becoming a renowned
        name in the region, our journey has been guided by a commitment to
        excellence and a passion for creating memorable moments.
      </p>

      <h2 className="about-heading">Our Mission</h2>
      <p>
        At LeMeridean, our mission is to redefine the art of hospitality. We
        strive to create an ambiance that combines sophistication with warmth,
        ensuring every guest feels at home. Our dedicated team is committed to
        providing personalized services and exceeding the expectations of our
        valued guests.
      </p>

      <h2 className="about-heading">What Sets Us Apart</h2>
      <ul>
        <li>
          <strong>Luxurious Accommodations:</strong> Experience comfort in our
          meticulously designed rooms and suites, each offering a blend of
          modern amenities and timeless elegance.
        </li>
        <li>
          <strong>Exquisite Dining:</strong> Indulge your senses with a culinary
          journey at our world-class restaurants, where our chefs curate dishes
          that delight the palate.
        </li>
        <li>
          <strong>State-of-the-Art Facilities:</strong> Whether you're here for
          business or leisure, our facilities cater to your every need. From
          conference rooms to recreational spaces, we have it all.
        </li>
        <li>
          <strong>Commitment to Sustainability:</strong> LeMeridean is proud to
          embrace sustainable practices, from energy-efficient systems to
          responsible sourcing. We believe in preserving the environment for
          future generations.
        </li>
      </ul>

      <h2 className="about-heading">Our Team</h2>
      <p>
        Meet the faces behind LeMeridean - a passionate team dedicated to
        ensuring your stay is nothing short of extraordinary. Our staff embodies
        the spirit of hospitality, always ready to assist and make your
        experience truly memorable.
      </p>

      <p>
        Thank you for choosing LeMeridean. We look forward to welcoming you with
        open arms and creating lasting memories together.
      </p>
    </div>
  );
};

export default AboutPage;
