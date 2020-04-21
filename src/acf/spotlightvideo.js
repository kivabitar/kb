import React from 'react';
import HTML2React from 'html2react';
import Spotlightvideocol from '../acf/spotlightvideocol.js';

const Spotlightvideo = (props) => {
  console.log(props)
  const vids = [];
  props.spotlight_grid.map((a,i)=>{
    vids.push(<Spotlightvideocol {...a} key={i} handle={handleClick} number={i} />)
  });
    let color = '';
    let tclass = props.background_color;
    if(tclass == 'White'){
        color = '';
    }else if(tclass == 'Primary Green'){
        color = 'primary-green';
    }else if(tclass == 'Primary Gray'){
        color = 'primary-gray';
    }else if(tclass == 'Secondary Orange'){
        color = 'secondary-orange';
    }else if(tclass == 'Secondary Blue Green'){
        color = 'secondary-blue-green';
    }else if(tclass == 'Secondary Light Blue'){
        color = 'secondary-light-blue';
    }else if(tclass == 'Secondary Light Gray'){
        color = 'secondary-light-gray';
    }else if(tclass == 'Secondary Navy'){
        color = 'secondary-navy';
    }else if(tclass == 'Secondary Dark Gray'){
        color = 'secondary-dark-gray';
    }
    let styles = {
      backgroundImage: 'url('+props.main_video_image+")"
    }
    let hidden = {
      display: "none"
    }
  return(


            <div className={"highlight-video " + color} >
                <div className="inner-content">

                        <h1 id='title'>{HTML2React(props.main_spotlight_title)}</h1>
                        <div className="youtube-content" id='mainstage'>
                           {HTML2React(props.main_spotlight_video)}
                        </div>
                        <div className="desc" id="maindesc" style={hidden}>
                            {HTML2React(props.brief_description)}
                        </div>



                    <div className="row padding-top">
                        <div className="col-md-4 spotlight active" id="vid9999" data-count={9999} style={styles}  data-embed={props.main_spotlight_video} data-title={HTML2React(props.main_spotlight_title)} onClick={handleClick}>
                            <div className="hoverlay">
                                <img src="https://staging.matthewsmarking.com/app/themes/matthewsmarking/library/images/play_button_orange.png" className="sofa-king" alt="Play Button" />
                            </div>
                            <div className="overlay"><div className="cont">Now Playing</div></div>
                            <div className="spotlight-upper">
                                {HTML2React(props.main_spotlight_title)}
                            </div>
                            <div className="desc">
                                {HTML2React(props.brief_description)}
                            </div>


                            <div className="spotlight-lower">
                                <a href="">Go</a>
                            </div>


                        </div>
                        {vids}


                    </div>

                </div>
            </div>



  )
}

export default Spotlightvideo;

function handleClick(event){
  event.preventDefault();
  const els = document.querySelectorAll('.active')
  for (var i = 0; i < els.length; i++) {
    els[i].classList.remove('active')
  }
  const t = event.target;

  const a = t.getAttribute('data-embed');
  const b = t.getAttribute('data-title');
  const c = t.getAttribute('data-count');
//  console.log(a);
  t.classList.add("active");
  const cliz = 'vid'+ c;
  console.log(cliz)

  addTheClass(cliz,a,b);

}

function addTheClass(element,a,b){
  let theEl = document.getElementById(element);
  theEl.classList.add('active');
  let m = document.getElementById("mainstage");
  m.innerHTML = a;
  return true;
}
