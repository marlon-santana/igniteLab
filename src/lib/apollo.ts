import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4vnhpi21pg601uibo11fd3p/master',
    cache:new InMemoryCache(),
})