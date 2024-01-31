import React from "react";
import headshot from '../../assets/bradley-bw.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './home.css';

export function Home() {
  return (
	<div>
	  <h1 className="mb-4">Brad Messenger</h1>
	  <p>Hey, I'm Brad. I’m a Web Developer with over 10 years of experience in the field.  I focus largely on WordPress development but I'm also comfortable working with a number of other web based tools.</p>
	  <div className="d-flex align-items-center my-4">
	  	<img src={headshot} width="150" height="150" alt="Brad Messenger" className="bio"/>
		<div className="ms-5 connect d-flex flex-column">
			<a href="mailto:wbmessenger@duck.com" target="_blank" rel="noopener noreferrer" className="my-2"><FontAwesomeIcon icon="fa-regular fa-envelope" /> Email</a>
			<a href="https://www.linkedin.com/in/bradmessenger/" className="my-2" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-linkedin-in pe-4" /> LinkedIn</a>
			<a href="https://github.com/bmessenger" className="my-2" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon="fa-brands fa-github" /> GitHub</a>
		</div>
	  </div>
	  <p>I'm passionate about building <strong>highly functional</strong>, <strong>optimized websites</strong>.  With such a strong emphasis on the user facing side of a website in today's environment I strive to build something <strong>a client can actually use</strong>.  We tend to forget that a website is more than eye-candy for the end user but also a <strong>tool for the client</strong> and an opportunity craft a unique experience.</p>
	</div>
  );
}