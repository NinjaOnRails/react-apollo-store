import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import Form from './styles/Form';
import Error from './ErrorMessage';

const REQUEST_RESET_MUTATION = gql`
  mutation REQUEST_RESET_MUTATION($email: String!) {
    requestReset(email: $email) {
      message
    }
  }
`;

export class RequestReset extends Component {
  state = {
    email: '',
    message: '',
  };

  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { email } = this.state;
    return (
      <Mutation mutation={REQUEST_RESET_MUTATION} variables={this.state}>
        {(requestReset, { error, loading, called }) => {
          return (
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                const res = await requestReset();
                this.setState({
                  email: '',
                  message: res.data.requestReset.message,
                });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Forgot password?</h2>
                <Error error={error} />
                {!error && !loading && called && <p>{this.state.message}</p>}
                <label htmlFor="email">
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submit">Reset password</button>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default RequestReset;
