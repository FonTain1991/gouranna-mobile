/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
import * as Types from '../types/graphql';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type SignInByGoogleMutationVariables = Types.Exact<{
  token: Types.Scalars['String']['input'];
}>;


export type SignInByGoogleMutation = { __typename?: 'Mutation', signInByGoogle: { __typename?: 'User', id: string, firstName?: string | null, lastName?: string | null, avatar?: string | null } };


export const SignInByGoogleDocument = gql`
    mutation signInByGoogle($token: String!) {
  signInByGoogle(token: $token) {
    id
    firstName
    lastName
    avatar
  }
}
    `;
export type SignInByGoogleMutationFn = Apollo.MutationFunction<SignInByGoogleMutation, SignInByGoogleMutationVariables>;

/**
 * __useSignInByGoogleMutation__
 *
 * To run a mutation, you first call `useSignInByGoogleMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInByGoogleMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInByGoogleMutation, { data, loading, error }] = useSignInByGoogleMutation({
 *   variables: {
 *      token: // value for 'token'
 *   },
 * });
 */
export function useSignInByGoogleMutation(baseOptions?: Apollo.MutationHookOptions<SignInByGoogleMutation, SignInByGoogleMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInByGoogleMutation, SignInByGoogleMutationVariables>(SignInByGoogleDocument, options);
      }
export type SignInByGoogleMutationHookResult = ReturnType<typeof useSignInByGoogleMutation>;
export type SignInByGoogleMutationResult = Apollo.MutationResult<SignInByGoogleMutation>;
export type SignInByGoogleMutationOptions = Apollo.BaseMutationOptions<SignInByGoogleMutation, SignInByGoogleMutationVariables>;