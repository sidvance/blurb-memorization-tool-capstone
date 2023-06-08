import {useState, useEffect, createContext} from "react"
import axios from "axios"

const AuthContext = createContext({
    userId: null,
    login: () => {},
    logout: () => {}
})

export const AuthContextProvider = props => {
    const [userId, setUserId] = useState(null)

    const login = (userId) => {
        setUserId(userId)
    }

    const logout = userId => {
        axios.post('/api/logout', )
        .then(res => setUserId(null))
        .catch(theseHands => console.log(theseHands))
    }

    const contextValue = {
        userId,
        login,
        logout
    }

    useEffect(() => {
        axios.get('/api/user')
        .then(res => setUserId(res.data))
        .catch(theseHands => console.log(theseHands))
    }, [])

    return (
        <AuthContext.Provider value={contextValue}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext