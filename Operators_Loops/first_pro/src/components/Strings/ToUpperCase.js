import React from 'react'

const ToUpperCase = () => {
    const originalString='Hello World';
    const first='Harry';
    const last='John';
    const concat_name=first.concat(last);
    const replaceString=originalString.replace('World','Universe');
  return (
    <div>
    <h3>Uppercase & Lowercase</h3>  
    <p>{`Upper case for original string:${originalString.toUpperCase()}`}</p>
    <p>{`Lower case for original string:${originalString.toLowerCase()}`}</p>
    <p>{`Concat of first and last name:${concat_name}`}</p>
    <p>{`String length is:${originalString.length}`}</p>
    <p>{`String replace is:${replaceString}`}</p>
    </div>
  )
}

export default ToUpperCase
