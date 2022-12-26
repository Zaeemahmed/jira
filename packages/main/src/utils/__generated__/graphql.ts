import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AuthPayload = {
  __typename?: 'AuthPayload';
  error?: Maybe<Scalars['String']>;
  token?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
};

export type Issue = {
  __typename?: 'Issue';
  assignee?: Maybe<User>;
  assigneeId?: Maybe<Scalars['String']>;
  createdBy: User;
  creatorId: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  isBackLogTask: Scalars['Boolean'];
  projectId: Scalars['String'];
  reporter: User;
  reporterId?: Maybe<Scalars['String']>;
  sprint: Sprint;
  sprintId: Scalars['String'];
  status: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createProject: Project;
  createSprint: Sprint;
  issueCreate: Issue;
  login: AuthPayload;
  setUserSite?: Maybe<User>;
  signup: AuthPayload;
};


export type MutationCreateProjectArgs = {
  key: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateSprintArgs = {
  endDate: Scalars['String'];
  projectId?: InputMaybe<Scalars['String']>;
  startDate: Scalars['String'];
};


export type MutationIssueCreateArgs = {
  assigneeId?: InputMaybe<Scalars['String']>;
  description: Scalars['String'];
  isBackLogTask: Scalars['Boolean'];
  projectId: Scalars['String'];
  reporterId?: InputMaybe<Scalars['String']>;
  sprintId: Scalars['String'];
  status: Scalars['String'];
};


export type MutationLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationSetUserSiteArgs = {
  email: Scalars['String'];
  site: Scalars['String'];
};


export type MutationSignupArgs = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
};

export type Project = {
  __typename?: 'Project';
  backlog?: Maybe<Array<Maybe<Issue>>>;
  id: Scalars['String'];
  key: Scalars['String'];
  name: Scalars['String'];
  owner: User;
  ownerId: Scalars['String'];
  projectLead?: Maybe<User>;
  projectLeadId?: Maybe<Scalars['String']>;
  sprints?: Maybe<Array<Maybe<Sprint>>>;
};

export type Query = {
  __typename?: 'Query';
  getUser?: Maybe<User>;
  issues: Array<Issue>;
  projects: Array<Project>;
  sprints: Array<Sprint>;
  users: Array<User>;
};


export type QueryGetUserArgs = {
  email: Scalars['String'];
};


export type QuerySprintsArgs = {
  projectId: Scalars['String'];
};

export type Sprint = {
  __typename?: 'Sprint';
  endDate: Scalars['String'];
  id: Scalars['String'];
  issues?: Maybe<Array<Maybe<Issue>>>;
  number: Scalars['Int'];
  project: Project;
  projectId: Scalars['String'];
  startDate: Scalars['String'];
  status: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  assignee?: Maybe<Array<Maybe<Issue>>>;
  email: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['String'];
  issues?: Maybe<Array<Maybe<Issue>>>;
  password: Scalars['String'];
  profileImage?: Maybe<Scalars['String']>;
  projectLead?: Maybe<Array<Maybe<Project>>>;
  projects?: Maybe<Array<Maybe<Project>>>;
  reporter?: Maybe<Array<Maybe<Issue>>>;
  site?: Maybe<Scalars['String']>;
};

export type CreateProjectMutationVariables = Exact<{
  name: Scalars['String'];
  key: Scalars['String'];
}>;


export type CreateProjectMutation = { __typename?: 'Mutation', createProject: { __typename?: 'Project', id: string } };

export type SignUpMutationVariables = Exact<{
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignUpMutation = { __typename?: 'Mutation', signup: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', id: string, fullName: string, email: string } | null } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthPayload', token?: string | null, user?: { __typename?: 'User', id: string, fullName: string, email: string, site?: string | null } | null } };

export type SetUserSiteMutationVariables = Exact<{
  email: Scalars['String'];
  site: Scalars['String'];
}>;


export type SetUserSiteMutation = { __typename?: 'Mutation', setUserSite?: { __typename?: 'User', id: string, fullName: string, email: string } | null };

export type GetUserQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser?: { __typename?: 'User', id: string, fullName: string, email: string, site?: string | null, projects?: Array<{ __typename?: 'Project', id: string, name: string, key: string, projectLead?: { __typename?: 'User', fullName: string } | null } | null> | null } | null };

export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id: string, fullName: string, projects?: Array<{ __typename?: 'Project', id: string } | null> | null }> };


export const CreateProjectDocument = gql`
    mutation CreateProject($name: String!, $key: String!) {
  createProject(name: $name, key: $key) {
    id
  }
}
    `;
export type CreateProjectMutationFn = Apollo.MutationFunction<CreateProjectMutation, CreateProjectMutationVariables>;

/**
 * __useCreateProjectMutation__
 *
 * To run a mutation, you first call `useCreateProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProjectMutation, { data, loading, error }] = useCreateProjectMutation({
 *   variables: {
 *      name: // value for 'name'
 *      key: // value for 'key'
 *   },
 * });
 */
export function useCreateProjectMutation(baseOptions?: Apollo.MutationHookOptions<CreateProjectMutation, CreateProjectMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateProjectMutation, CreateProjectMutationVariables>(CreateProjectDocument, options);
      }
export type CreateProjectMutationHookResult = ReturnType<typeof useCreateProjectMutation>;
export type CreateProjectMutationResult = Apollo.MutationResult<CreateProjectMutation>;
export type CreateProjectMutationOptions = Apollo.BaseMutationOptions<CreateProjectMutation, CreateProjectMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($email: String!, $fullName: String!, $password: String!) {
  signup(email: $email, password: $password, fullName: $fullName) {
    user {
      id
      fullName
      email
    }
    token
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      email: // value for 'email'
 *      fullName: // value for 'fullName'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      id
      fullName
      email
      site
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SetUserSiteDocument = gql`
    mutation SetUserSite($email: String!, $site: String!) {
  setUserSite(email: $email, site: $site) {
    id
    fullName
    email
  }
}
    `;
export type SetUserSiteMutationFn = Apollo.MutationFunction<SetUserSiteMutation, SetUserSiteMutationVariables>;

/**
 * __useSetUserSiteMutation__
 *
 * To run a mutation, you first call `useSetUserSiteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetUserSiteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setUserSiteMutation, { data, loading, error }] = useSetUserSiteMutation({
 *   variables: {
 *      email: // value for 'email'
 *      site: // value for 'site'
 *   },
 * });
 */
export function useSetUserSiteMutation(baseOptions?: Apollo.MutationHookOptions<SetUserSiteMutation, SetUserSiteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SetUserSiteMutation, SetUserSiteMutationVariables>(SetUserSiteDocument, options);
      }
export type SetUserSiteMutationHookResult = ReturnType<typeof useSetUserSiteMutation>;
export type SetUserSiteMutationResult = Apollo.MutationResult<SetUserSiteMutation>;
export type SetUserSiteMutationOptions = Apollo.BaseMutationOptions<SetUserSiteMutation, SetUserSiteMutationVariables>;
export const GetUserDocument = gql`
    query GetUser($email: String!) {
  getUser(email: $email) {
    id
    fullName
    email
    site
    projects {
      id
      name
      projectLead {
        fullName
      }
      key
    }
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export function refetchGetUserQuery(variables: GetUserQueryVariables) {
      return { query: GetUserDocument, variables: variables }
    }
export const GetUsersDocument = gql`
    query getUsers {
  users {
    id
    fullName
    projects {
      id
    }
  }
}
    `;

/**
 * __useGetUsersQuery__
 *
 * To run a query within a React component, call `useGetUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
      }
export function useGetUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUsersQuery, GetUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUsersQuery, GetUsersQueryVariables>(GetUsersDocument, options);
        }
export type GetUsersQueryHookResult = ReturnType<typeof useGetUsersQuery>;
export type GetUsersLazyQueryHookResult = ReturnType<typeof useGetUsersLazyQuery>;
export type GetUsersQueryResult = Apollo.QueryResult<GetUsersQuery, GetUsersQueryVariables>;
export function refetchGetUsersQuery(variables?: GetUsersQueryVariables) {
      return { query: GetUsersDocument, variables: variables }
    }