import { useEffect, useReducer, useState } from "react";
import { projectFirestore } from "../firebase/config";

let initialState = {
    document: null,
    isPending: false,
    error: null,
    success: null
}

const firestoreReducer = (state, action) => {
    
}

export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)

}