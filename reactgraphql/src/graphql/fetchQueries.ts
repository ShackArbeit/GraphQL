import { gql } from "@apollo/client";

export const FetchCountryQuery =gql`
    query {
            continents {
                  code
                  name
                  countries {
                        code
                        name
                        capital
                        languages {
                              code
                              name
                              native
                        }
                        states {
                              name
                        }
                  }
            }
    }
`
