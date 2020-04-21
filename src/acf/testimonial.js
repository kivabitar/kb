import React from "react";
import HTML2React from 'html2react';
import Testimonialrow from '../acf/testimonialrow.js';


function Testimonial(props){
  //console.log(props);
  const bullets = [];
  const rows = [];
  props.test_grid.map((a,i)=>{
    rows.push(
      <Testimonialrow {...a} number={i} key={i} />
    )
    bullets.push(<a href="#" className={i==0 ? "active-test tbullets slide"+ i : "tbullets slide"+ i} data-test={i} onClick={handleClick} key={i}>•</a>)
  });

  const styles = {
    backgroundImage:'url(' + props.background_image + ')'
  }
  return (
    <div className="testimonials-grid">
      <div className="inner-content">

        <h1>{HTML2React(props.title)}</h1>
        <div className="row t-row">
          {rows}
        </div>
        <div className="t-bullets">
          <div className="col-sm-9"> </div>
          <div className="col-sm-3 tnav">
            {bullets}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

function handleClick(event){
  event.preventDefault();
  const els = document.querySelectorAll('.active-test')
  for (var i = 0; i < els.length; i++) {
    els[i].classList.remove('active-test')
  }
  const t = event.target;
  const a = t.getAttribute('data-test');
//  console.log(a);
  t.classList.add("active-test");
  const cliz = 'sliz'+ a;
//  console.log(cliz)

  addTheClass(cliz);

}

function addTheClass(element){
  let theEl = document.getElementById(element);
  theEl.classList.add('active-test');
  return true;
}
