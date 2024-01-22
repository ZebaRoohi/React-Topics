import React from 'react'
import { Container } from 'react-bootstrap'
import { Accordion } from 'react-bootstrap'

const Accordian = () => {
        const data=[
          {
            id:0,
            title:'Accordian Item #1',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            id:1,
            title:'Accordian Item #2',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          },
          {
            id:2,
            title:'Accordian Item #3',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
          }
        ]
  return (
    <>
    <div className='accordian-container'>
        <Container>
            <h3>Example of Accordian...</h3>
            <div className='container-align'>
            <Accordion defaultActiveKey="0">
                {data.map((item)=>(
                    <Accordion.Item key={item.id} eventKey={item.id} >
                          <Accordion.Header>{item.title}
                </Accordion.Header>
                <Accordion.Body>{item.content}</Accordion.Body>
                    </Accordion.Item>
                ))}
                </Accordion>
                </div>
        </Container>
    </div>
    </>
  )
}

export default Accordian
