import React from 'react'
import ReactDOM from 'react-dom'
import Amplify from 'aws-amplify'
import { ApolloProvider } from 'react-apollo'
import { AWSAppSyncClient, AUTH_TYPE } from 'aws-appsync'
import { Rehydrated } from 'aws-appsync-react'

import App from './App'
import config from './aws-exports'
import * as serviceWorker from './serviceWorker'

Amplify.configure(config)

const client = new AWSAppSyncClient({
  url: config.aws_appsync_graphqlEndpoint,
  region: config.aws_appsync_region,
  auth: {
    apiKey: config.aws_appsync_apiKey,
    type: config.aws_appsync_authenticationType as AUTH_TYPE,
  },
})

ReactDOM.render(
  <ApolloProvider client={client}>
    <Rehydrated>
      <App />
    </Rehydrated>
  </ApolloProvider>,
  document.getElementById('root'),
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

process.env.NODE_ENV === 'production'
  ? serviceWorker.register()
  : serviceWorker.unregister()
