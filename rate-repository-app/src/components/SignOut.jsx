import { useEffect } from "react";
import { useHistory } from "react-router";
import useAuthStorage from "../../hooks/useAuthStorage";
import { useApolloClient } from "@apollo/client";

const SignOut = () => {

    const authStorage = useAuthStorage()
    const apolloClient = useApolloClient()
    const history = useHistory()

    const onSignOut = async () => {
        await authStorage.removeAccessToken()
        await apolloClient.resetStore();
        history.push('/')
    }

    useEffect(() => {
        onSignOut()
    }, [])

    return null;
}

export default SignOut