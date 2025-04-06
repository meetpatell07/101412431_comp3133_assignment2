import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class GraphqlService {
  constructor(private apollo: Apollo) {}

  // Login Mutation
  login(username: string, password: string): Observable<any> {
    const LOGIN_MUTATION = gql`
      query {
        login(username: "${username}", password: "${password}") {
          token
          user {
            id
            email
          }
        }
      }
    `;
    return this.apollo.mutate({
      mutation: LOGIN_MUTATION,
    });
  }

  // Signup Mutation
  signup(username: string, email: string, password: string): Observable<any> {
    const SIGNUP_MUTATION = gql`
      mutation {
        signup(username: "${username}", email: "${email}", password: "${password}") {
          id
          username
          email
          created_at
        }
      }
    `;
    return this.apollo.mutate({
      mutation: SIGNUP_MUTATION,
    });
  }
}
