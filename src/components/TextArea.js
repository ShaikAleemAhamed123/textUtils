 
import React, {useState} from 'react';
export default function TextArea(props) {

  const handleOnchange=(event)=>{
     console.log("On change!");
    setText(event.target.value);
   
  }

  const handleUpclick=()=>{
    console.log("Handle Up clicked!");
    let upper=text.toUpperCase();
    setText(upper);
    props.showAlert("success","Text converted to UpperCase !");
  }

  const handleDownclick=()=>{
    console.log("Handle Down clicked!");
    let lower=text.toLowerCase();
    setText(lower);
    props.showAlert("success","Text converted to LowerCase !");

  }

  const clearAll=()=>{
    console.log("Handle clear text clicked!");
    let clear='';
    setText(clear);
    props.showAlert("success","Text Cleared !");

  }

  const copyText=()=>{
    let elem=document.getElementById("texrea");
    elem.select();
    navigator.clipboard.writeText(elem.value);
    props.showAlert("success","Text Copied to ClipBoard!");

  }

  const extraSpaces=()=>{
    let newText=text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("success","Extra Spaces Removed !");

  }

  let myStyle={
    color:props.mode ==='dark' ? 'white' : 'black',
    backgroundColor:props.mode ==='dark' ? 'black' : 'white'
  };

  // let tHeadStyle={
  //   color:props.mode ==='dark' ? 'white' : 'black'
  // }

   
 

  
  const[text, setText]=useState("");
  // let noOfWords=0;
  // if(text.length===0){
  //   noOfWords=0;
  // }
  // else{
  //   if(text[text.length-1]===" "){
  //     noOfWords=text.split(" ").length-1;
  //   }
  //   else{
  //     noOfWords=text.split(" ").length;
  //   }
     
  // }

  return (
  
    <>
    
    <div>
        <div>
        <h3 style={myStyle} id="textHead">Enter text to Process....</h3>
        <textarea style={myStyle} className="form-control" value={text} onChange={handleOnchange} placeholder="Enter text here....." rows="8"></textarea>

        {/* <textarea value={text}  onChange={handleOnchange}  '     cols="50" rows="5"></textarea> */}
      </div>
      <div className="px-auto">
      <button onClick={handleUpclick}  className="btn btn-primary btn-large m-2">To UpperCase</button>
      <button onClick={handleDownclick} className="btn btn-primary btn-large m-2">To LowerCase</button>
      <button onClick={extraSpaces} className="btn btn-primary btn-large m-2">Remove Extra Spaces</button>
      <button onClick={copyText} className="btn btn-primary btn-large m-2">Copy Text</button>
      <button onClick={clearAll} className="btn btn-primary btn-large m-2">Clear Text</button>
       </div>
       
    </div>

    <div className="my-4 container-fluid">
<h2><b>Text Summary</b><hr/></h2>
<p> <b>Words:</b><i><b>{text.split(" ").filter((element)=>{return element.length!==0}).length}</b></i> </p>
<p><b>Characters:</b> <i><b>{text.length}</b></i> </p>
<p><b>Estimated Reading time:</b> <i><b>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} mins</b></i> </p>

    </div>
    </>
     
     
        
     
  )
}
