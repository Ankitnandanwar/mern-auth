import {GoogleAuthProvider, signInWithPopup, getAuth} from 'firebase/auth'
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInSuccess } from '../redux/user/userSlice';
import {useNavigate} from 'react-router-dom'

const OAuth = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const handleGoogleSubmit = async() => {
        try {
            const provider = new GoogleAuthProvider();
            const auth = getAuth(app);
            const result = await signInWithPopup(auth, provider);
            const res = await fetch('http://localhost:8500/auth/google',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: result.user.displayName,
                    email: result.user.email,
                    photo: result.user.photoURL
                })
            })
            const data = await res.json()
            console.log(data)
            dispatch(signInSuccess(data))
            navigate('/')
        } catch (error) {
            console.log("Could not login with google", error)
        }
    }

  return (
    <button 
    type='button' 
    onClick={handleGoogleSubmit}
    className='bg-red-600 text-white rounded-lg uppercase p-2 hover:opacity-95'>
    Continue with google
    </button>
  )
}

export default OAuth