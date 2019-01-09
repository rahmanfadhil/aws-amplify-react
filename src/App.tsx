import React, { Component } from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import { listRestaurants } from './graphql/queries'

class App extends Component {
  render() {
    return (
      <div>
        <Query query={gql(listRestaurants)}>
          {({ data }) => {
            return (
              <div>
                <h1>Hello World</h1>
                {JSON.stringify(data)}
              </div>
            )
          }}
        </Query>
      </div>
    )
  }
}

export default App
