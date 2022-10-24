import { useState, useEffect } from 'react'
import { getDocs, collection } from 'firebase/firestore'
import { db } from '../../config/firebase'
import { Post } from './Post';

export interface IPost {
  title: string;
  description: string;
  userId: string;
  username: string;
  id: string;
}

export const Main = () => {
  const [postsList, setPostLists] = useState<IPost[] | null>(null)
  const postsRef = collection(db, 'posts')

  const getPosts = async () => {
    const data = await getDocs(postsRef)
    setPostLists(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })) as IPost[])
  }

  useEffect(() => { getPosts() }, [])

  return (<div>{postsList?.map((post) => <Post post={post} key={post.id} />)}</div>)

}