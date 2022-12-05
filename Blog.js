// import { Link, useLocation, useNavigate } from 'react-router-dom'
// import queryString from 'query-string'
// import { useState, useEffect } from 'react'
// import posts from '../utils/posts'

// const SORT_KEYS = ['title', 'slug', 'id']

// function sortCourses(posts, key) {
//   const sortedPosts = [...posts]
//   if (!key || !SORT_KEYS.includes(key)) {
//     return sortedPosts
//   }
//   sortedPosts.sort((a, b) => (a[key] > b[key] ? 1 : -1))
//   return sortedPosts
// }

// const Posts = () => {
//   const location = useLocation()
//   const query = queryString.parse(location.search)
//   const navigate = useNavigate()
//   const [sortKey, setSortKey] = useState(query.sort)
//   const [sortedPosts, setSortedPosts] = useState(
//     sortPosts, sortKey)

//   useEffect(() => {
//     if (!SORT_KEYS.includes(sortKey)) {
//       navigate('.')
//       setSortKey()
//       setSortedPosts([...posts])
//     }
//   }, [sortKey, navigate])

//   return (
//     <>
//       <h1>{sortKey ? `Posts sorted by ${sortKey}` : 'Posts'}</h1>
//       {sortedPosts.map((post) => (
//         <div key={post.id}>
//           <Link to={post.slug} className="courseLink">
//             {post.title}
//           </Link>
//         </div>
//       ))}
//     </>
//   )
// }

// export default Posts

import React, { Component } from 'react'
import { Container, Col, Row, Card, ListGroup } from 'react-bootstrap'
import SinglePost from './SinglePost'
import { useLocation } from 'react-router-dom'

export default class Blog extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="9">
            <Card className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
              <Card.Body>
                <h5> Blog post</h5>
                <p>
                  fkoroivnowrnmvonrwvnernvubernkvmerfbvhjnermvebriuvnrmvbv
                  rvnjemrlvekrn
                </p>
              </Card.Body>
            </Card>

            <Card className="m-5">
              <img
                width={150}
                height={150}
                className="mr-3"
                src="https://images.pexels.com/photos/164527/pexels-photo-164527.jpeg?auto=compress&cs=tinysrgb&w=800"
              />
              <Card.Body>
                <h5> Blog post</h5>
                <p>
                  fkoroivnowrnmvonrwvnernvubernkvmerfbvhjnermvebriuvnrmvbv
                  rvnjemrlvekrn
                </p>
              </Card.Body>
            </Card>
          </Col>
          <Col md="3">
            <h5 className="text-center mt-5">Categories</h5>
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>Kat1</ListGroup.Item>
                <ListGroup.Item>Kat2</ListGroup.Item>
              </ListGroup>
            </Card>

            <Card className="text-center mt-3" bg="light">
              <Card.Body>
                <Card.Title>Side Widget</Card.Title>
                <Card.Text>KJNJrncjnrjn recnorjnv </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}
