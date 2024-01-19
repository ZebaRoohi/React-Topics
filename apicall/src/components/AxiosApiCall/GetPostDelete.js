	// AxiosExample.js
	import React, { useState, useEffect } from 'react';
	import axios from 'axios';
	function AxiosExample() {
	  const [getData, setGetData] = useState(null);
	  const [postData, setPostData] = useState(null);
	  const [deleteData, setDeleteData] = useState(null);
	  useEffect(() => {
	    // Axios GET request
	    axios.get('https://jsonplaceholder.typicode.com/todos/1')
	      .then(response => {
	        setGetData(response.data);
	      })
	      .catch(error => {
	        console.error('Axios GET Error:', error);
	      });
	    // Axios POST request
	    const postDataAxios = {
	      title: 'foo',
	      body: 'bar',
	      userId: 1
	    };
	    axios.post('https://jsonplaceholder.typicode.com/posts', postDataAxios)
	      .then(response => {
	        setPostData(response.data);
	      })
	      .catch(error => {
	        console.error('Axios POST Error:', error);
	      });
	    // Axios DELETE request
	    axios.delete('https://jsonplaceholder.typicode.com/posts/1')
	      .then(response => {
	        setDeleteData(response.data);
	      })
	      .catch(error => {
	        console.error('Axios DELETE Error:', error);
	      });
	  }, []);
	  return (
	    <div>
	      <h1>Axios Example</h1>
	      <div>
	        <h2>Axios GET Response</h2>
	        {getData ? (
	          <pre>{JSON.stringify(getData, null, 2)}</pre>
	        ) : (
	          'Loading...'
	        )}
	      </div>
	      <div>
	        <h2>Axios POST Response</h2>
	        {postData ? (
	          <pre>{JSON.stringify(postData, null, 2)}</pre>
	        ) : (
	          'Loading...'
	        )}
	      </div>
	      <div>
	        <h2>Axios DELETE Response</h2>
	        {deleteData ? (
	          <pre>{JSON.stringify(deleteData, null, 2)}</pre>
	        ) : (
	          'Loading...'
	        )}
	      </div>
	    </div>
	  );
	}
export default AxiosExample;