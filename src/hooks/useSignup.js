import { useState } from "react"
import { projectAuth } from "../firebase/config"


export const useSignup = () => {
    const [error, setError] = useState(null)
    const [isPending, setIsPending] = useState(false)


    const signup = async (user, email, password) => {
        setError(null)
        setIsPending(true)

        try{
            //signup user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(res.user)

            if(!res){
                throw new Error('could not complete signup')
            }

            //add user name to progile
            await res.user.updateProfile({ displayName: user})

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


