// import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
// import { React, useState, useEffect } from 'react'
// import { Card } from 'react-bootstrap'
// import { db, auth } from '../firebase-config'

// function Post({ isAuth }) {
//   const [post, setPost] = useState(null)
//   const [postList, setPostList] = useState([])
//   const postCollectionRef = collection(db, 'posts')

//   useEffect(() => {
//     const getRecentPost = async () => {
//       const data = await getDocs(postCollectionRef)
//       setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//     }
//     getRecentPost()
//   }, [])

//   // const getPostDetail = async() =>{
//   //     const postCollectionRef = collection(db, "posts")
//   //     const docRef = doc(db, "posts", id);
//   //     const postDetail = await getDoc(docRef)
//   //     const posts = await getDocs(postRef);
//   //     setPost(postDetail.data());
//   // }

//   return (
//     <div className="singlePost">
//           <div className="container">
//             <div className="row">
//               <Card className="m-3" key={post.uniqueId}>
//                 <div className="post">
//                   <div className="postHeader">
//                     <div className="title">
//                       <h1> {post.title}</h1>
//                     </div>
//                   </div>
//                   <div className="postTextContainer">{post.postText}</div>
//                 </div>
//                 <div className="footer">
//                   <h4 className="col-md-11"> @{post?.author?.name} </h4>
//                 </div>
//               </Card>
//             </div>
//           </div>
//     </div>
//   )
// }
// export default Post
