import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>Project Contributors</h3>
        <ul>
          <li>ნიკოლოზი ენდინიანი</li>  <li>დავით ჭაღალიძე </li> <li> ოთო ღლონტი </li> <li>რამაზ ბერიძე</li>
        </ul>
        <p className="copyright">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;