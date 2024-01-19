import React, { useState, useEffect } from 'react';
function GetPostDelete() {
  const [getData, setGetData] = useState(null);
  const [postData, setPostData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);

  useEffect(() => {
    // Fetch API GET request
    fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(data => {
        setGetData(data);
      })
      .catch(error => {
        console.error('Fetch GET Error:', error);
      });
    // Fetch API POST request
    const postDataFetch = {
      title: 'foo',
      body: 'bar',
      userId: 2
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postDataFetch)
    })
      .then(response => response.json())
      .then(data => {
        setPostData(data);
      })
      .catch(error => {
        console.error('Fetch POST Error:', error);
      });
    // Fetch API DELETE request
    fetch('https://jsonplaceholder.typicode.com/posts/2', {
      method: 'DELETE'
    })
      .then(response => response.json())
      .then(data => {
        setDeleteData(data);
      })
      .catch(error => {
        console.error('Fetch DELETE Error:', error);
      });
  }, []);
return (
    <div>
      <h1>Fetch Example</h1>
      <div>
        <h2>Fetch GET Response</h2>
        {getData ? (
          <pre>{JSON.stringify(getData, null, 2)}</pre>
        ) : (
          'Loading...'
        )}
      </div>
      <div>
        <h2>Fetch POST Response</h2>
        {postData ? (
          <pre>{JSON.stringify(postData, null, 2)}</pre>
        ) : (
          'Loading...'
        )}
      </div>
      <div>
        <h2>Fetch DELETE Response</h2>
        {deleteData ? (
          <pre>{JSON.stringify(deleteData, null, 2)}</pre>
        ) : (
          'Loading...'
        )}
      </div>
    </div>
  );
}
export default GetPostDelete;