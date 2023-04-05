import React, {useState} from 'react'

export default function TextForm() {
  const convertToUpperCase = ()=> {
    let convertedText = txt.toUpperCase();
    setText(convertedText);
  }
  const convertToLowerCase = () => {
    let convertedText = txt.toLowerCase();
    setText(convertedText);
  }
  const handleOnChangeEvent = (e) => {
    setText(e.target.value) 
  }
  const [txt, setText] = useState('Enter you string.');
  return (
    <div className='container'>
            <div class="mb-3">
            <label for="MyBox" class="form-label">Convert Your String into UpperCase/LowerCase</label>
            <textarea class="form-control" onChange={handleOnChangeEvent} id="exampleFormControlTextarea1" value={txt} rows="8"></textarea>
        </div>
        <label className='mx-2'><h6>Convert To</h6></label>
        <br/>
        <button className='btn btn-primary mx-2' onClick={convertToUpperCase}>UpperCase</button>
        <button className='btn btn-primary' onClick={convertToLowerCase}>LowerCase</button>
    </div>
  )
}
