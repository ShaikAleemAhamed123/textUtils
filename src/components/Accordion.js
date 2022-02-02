import React, {useState} from 'react';

export default function Accordion(props) {


  let myStyle={
    color:props.mode ==='dark' ? 'white' : 'black',
    backgroundColor:props.mode ==='dark' ? 'black' : 'white',
    borderColor:props.mode ==='dark' ? 'white' : 'black',
    border:'1px solid'
  };

  let myStyle1={
    color:props.mode ==='dark' ? 'white' : 'black',
    backgroundColor:props.mode ==='dark' ? 'black' : 'white'
  }

   

  return (
    <> 

    <div className="container mb-3">
      <h3 style={myStyle1}>FAQs</h3>
    </div>
     
       <div style={myStyle} className="accordion accordion-flush" id="accordionFlushExample"  >
  <div className="accordion-item" >
    <h2 className="accordion-header" id="flush-headingOne">
      <button style={myStyle}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <strong>What is textUtils ?</strong>
      </button>
    </h2>
    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div style={myStyle} className="accordion-body">textUtils is a text utilities app which can be used to modify text. We can convert our text to upper case, to lower case, can remove any trailing and extra unnecessary spaces. After modifying our text we also have a button to copy the whole modified text and a clear button to clear the whole text to make the text area clean for next use. Along with these features, the editor also shows <strong>Word Count, Character Count, Estimated Reading Time</strong>  of the text entered.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingTwo">
      <button style={myStyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
        <strong>Whats the tech stack Used ?</strong>
      </button>
    </h2>
    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
      <div style={myStyle} className="accordion-body">This Utility app is created using React.Js technology and is user friendly to use.</div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="flush-headingThree">
      <button style={myStyle}  className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
        <strong>Creators of the app ?</strong>
      </button>
    </h2>
    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
      <div style={myStyle} className="accordion-body">Created by: <strong>Aleem Ahamed Shaik</strong>
      <p>Tech Stack Used: <strong>HTML, CSS, JS, ReactJS</strong></p></div>
    </div>
  </div>
</div>

</>
      
  );
}
