import { useMutation } from "@apollo/client";
import { AUTHORIZE } from "../graphql/mutations";
import useAuthStorage from "./useAuthStorage";
import { useApolloClient } from "@apollo/client";
import { useHistory } from "react-router";

const useSignIn = () => {

    const authStorage = useAuthStorage();
    const [mutate, result] = useMutation(AUTHORIZE);
    const apolloClient = useApolloClient();
    const history = useHistory()

    const signIn = async ({ username, password }) => {
        const res = await mutate({ variables: { username, password } })
        await authStorage.setAccessToken(res.data.authorize.accessToken)
        //console.log('Getting accessToken... ', await authStorage.getAccessToken())
        await apolloClient.resetStore();
        history.push('/')
        return res;
    }

    return [signIn, result];

};

export default useSignIn;