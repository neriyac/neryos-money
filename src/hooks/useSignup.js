import { useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const { dispatch } = useAuthContext()


    const signup = async (user, email, password) => {
        setError(null)
        setIsPending(true)

        try{
            //signup user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)


            if(!res){
                throw new Error('could not complete signup')
            }

            //add user name to progile
            await res.user.updateProfile({ displayName: user})

            //dispatch login action
            dispatch({type: 'LOGIN', payload: res.user })

            setIsPending(false)
            setError(null)
        }
        catch (err){
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }

    return {  error, isPending, signup }
}


