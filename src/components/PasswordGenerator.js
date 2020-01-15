import React, { Component } from 'react';
import './style.css'


const options =[ "@",
"%",
"+",
"\\",
"/",
"'",
"!",
"#",
"$",
"^",
"?",
":",
",",
")",
"(",
"}",
"{",
"]",
"[",
"~",
"-",
"_",
".","0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z", "A",
"B",
"C",
"D",
"E",
"F",
"G",
"H",
"I",
"J",
"K",
"L",
"M",
"N",
"O",
"P",
"Q",
"R",
"S",
"T",
"U",
"V",
"W",
"X",
"Y",
"Z"]
const pw =[]



class PassGen extends Component {
  state={
    text: ''
  } 
   
  writePassword =(e)=>{
    this.clearText()
    e.preventDefault()
    for (let i = 8; i < 30; i++) {
        let rand = options[Math.floor(Math.random() * options.length)];
        pw.push(rand)
        
    }
    let password = pw.toString()
    let passwordText = password.replace(/,/g, '');
    this.setState({
      text: passwordText
    })
   
    }


    clearText=()=>{
    
      let clear = pw.length=0
      this.setState({text: clear})
    }




    render() {
 
      console.log(this.state.text)
        return (
            <div className='container'>
              <div className='row'>
              <div className='navbar navbar-expand-lg'>
                <h1 className='vt'>STRONG PASSWORD GENERATOR</h1>
              </div>
              </div>
              <div className='jumbotron px-2'>
                  <h1>{this.state.text}</h1>
              </div>
              <div className='row'>
              <button type="button" id='generate' onClick={this.writePassword} className="mx-auto btn-dark btn-lg vt rounded">GENERATE STRONG PASSWORD</button>
                 </div>
            </div>
        )
            
           
}
}
export default PassGen