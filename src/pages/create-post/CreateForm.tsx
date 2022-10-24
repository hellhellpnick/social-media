import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../../config/firebase'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom'

interface ICreateFormData {
  title: String,
  description: String
}

export const CreateForm = () => {
  const navigate = useNavigate()
  const [user] = useAuthState(auth)

  const schema = yup.object().shape({
    title: yup.string().required('You must add a title'),
    description: yup.string().required('You must add a title'),
  })

  const { register, handleSubmit, formState: { errors } } = useForm<ICreateFormData>({
    resolver: yupResolver(schema)
  })

  const postsRef = collection(db, 'posts')

  const onCreatePost = async (data: ICreateFormData) => {
    await addDoc(postsRef, {
      ...data,
      username: user?.displayName,
      userId: user?.uid
    })

    navigate('/')
  }

  return (<form onSubmit={handleSubmit(onCreatePost)}>
    <input placeholder='Title...' {...register('title')} />
    <p style={{ color: 'red' }}>{errors.title?.message}</p>
    <textarea placeholder='Description...' {...register('description')} />
    <p style={{ color: 'red' }}>{errors.description?.message}</p>
    <input type='submit' className='submitForm' />
  </form>)
}