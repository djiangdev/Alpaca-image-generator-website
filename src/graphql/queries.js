/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAlpacaAccessories = /* GraphQL */ `
  query GetAlpacaAccessories($id: ID!) {
    getAlpacaAccessories(id: $id) {
      id
      name
      accessoriesStyles {
        items {
          id
          name
          createdAt
          updatedAt
          alpacaAccessoriesAccessoriesStylesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAlpacaAccessories = /* GraphQL */ `
  query ListAlpacaAccessories(
    $filter: ModelAlpacaAccessoriesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlpacaAccessories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        accessoriesStyles {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAlpacaAccessoriesStyle = /* GraphQL */ `
  query GetAlpacaAccessoriesStyle($id: ID!) {
    getAlpacaAccessoriesStyle(id: $id) {
      id
      name
      accessories {
        id
        name
        accessoriesStyles {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      alpacaAccessoriesAccessoriesStylesId
      owner
    }
  }
`;
export const listAlpacaAccessoriesStyles = /* GraphQL */ `
  query ListAlpacaAccessoriesStyles(
    $filter: ModelAlpacaAccessoriesStyleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlpacaAccessoriesStyles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        accessories {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        alpacaAccessoriesAccessoriesStylesId
        owner
      }
      nextToken
    }
  }
`;
export const getAlpacaBackgrounds = /* GraphQL */ `
  query GetAlpacaBackgrounds($id: ID!) {
    getAlpacaBackgrounds(id: $id) {
      id
      name
      backgroundStyles {
        items {
          id
          name
          createdAt
          updatedAt
          alpacaBackgroundsBackgroundStylesId
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listAlpacaBackgrounds = /* GraphQL */ `
  query ListAlpacaBackgrounds(
    $filter: ModelAlpacaBackgroundsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlpacaBackgrounds(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        backgroundStyles {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getAlpacaBackgroundsStyle = /* GraphQL */ `
  query GetAlpacaBackgroundsStyle($id: ID!) {
    getAlpacaBackgroundsStyle(id: $id) {
      id
      name
      backgrounds {
        id
        name
        backgroundStyles {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      alpacaBackgroundsBackgroundStylesId
      owner
    }
  }
`;
export const listAlpacaBackgroundsStyles = /* GraphQL */ `
  query ListAlpacaBackgroundsStyles(
    $filter: ModelAlpacaBackgroundsStyleFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAlpacaBackgroundsStyles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        backgrounds {
          id
          name
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        alpacaBackgroundsBackgroundStylesId
        owner
      }
      nextToken
    }
  }
`;
