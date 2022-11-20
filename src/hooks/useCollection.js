import { useEffect, useState } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection = (collection) => {
    const [documents, setDocuments] = useState(null)
    const [error, setError] = useState(null)


    useEffect(() => {
        let ref = projectFirestore.collection(collection)

        const unsubscribe = ref.onSnapshot(snapshot => {
            let results = []
            snapshot.docs.forEach(doc => {
              console.log(doc)
              results.push({...doc.data(), id: doc.id})
            });

        
            //update states
            setDocuments(results)
            setError(null)
        }, (error) => {
            console.log(error)
            setError('Could not fetch the data. More details:', error.message)
        });

        // unsubscribe on unmount
        return () => unsubscribe()

    }, [collection])

    return { documents, error }
}