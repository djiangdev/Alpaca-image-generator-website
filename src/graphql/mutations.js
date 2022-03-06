/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAlpacaAccessories = /* GraphQL */ `
  mutation CreateAlpacaAccessories(
    $input: CreateAlpacaAccessoriesInput!
    $condition: ModelAlpacaAccessoriesConditionInput
  ) {
    createAlpacaAccessories(input: $input, condition: $condition) {
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
export const updateAlpacaAccessories = /* GraphQL */ `
  mutation UpdateAlpacaAccessories(
    $input: UpdateAlpacaAccessoriesInput!
    $condition: ModelAlpacaAccessoriesConditionInput
  ) {
    updateAlpacaAccessories(input: $input, condition: $condition) {
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
export const deleteAlpacaAccessories = /* GraphQL */ `
  mutation DeleteAlpacaAccessories(
    $input: DeleteAlpacaAccessoriesInput!
    $condition: ModelAlpacaAccessoriesConditionInput
  ) {
    deleteAlpacaAccessories(input: $input, condition: $condition) {
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
export const createAlpacaAccessoriesStyle = /* GraphQL */ `
  mutation CreateAlpacaAccessoriesStyle(
    $input: CreateAlpacaAccessoriesStyleInput!
    $condition: ModelAlpacaAccessoriesStyleConditionInput
  ) {
    createAlpacaAccessoriesStyle(input: $input, condition: $condition) {
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
export const updateAlpacaAccessoriesStyle = /* GraphQL */ `
  mutation UpdateAlpacaAccessoriesStyle(
    $input: UpdateAlpacaAccessoriesStyleInput!
    $condition: ModelAlpacaAccessoriesStyleConditionInput
  ) {
    updateAlpacaAccessoriesStyle(input: $input, condition: $condition) {
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
export const deleteAlpacaAccessoriesStyle = /* GraphQL */ `
  mutation DeleteAlpacaAccessoriesStyle(
    $input: DeleteAlpacaAccessoriesStyleInput!
    $condition: ModelAlpacaAccessoriesStyleConditionInput
  ) {
    deleteAlpacaAccessoriesStyle(input: $input, condition: $condition) {
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
export const createAlpacaBackgrounds = /* GraphQL */ `
  mutation CreateAlpacaBackgrounds(
    $input: CreateAlpacaBackgroundsInput!
    $condition: ModelAlpacaBackgroundsConditionInput
  ) {
    createAlpacaBackgrounds(input: $input, condition: $condition) {
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
export const updateAlpacaBackgrounds = /* GraphQL */ `
  mutation UpdateAlpacaBackgrounds(
    $input: UpdateAlpacaBackgroundsInput!
    $condition: ModelAlpacaBackgroundsConditionInput
  ) {
    updateAlpacaBackgrounds(input: $input, condition: $condition) {
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
export const deleteAlpacaBackgrounds = /* GraphQL */ `
  mutation DeleteAlpacaBackgrounds(
    $input: DeleteAlpacaBackgroundsInput!
    $condition: ModelAlpacaBackgroundsConditionInput
  ) {
    deleteAlpacaBackgrounds(input: $input, condition: $condition) {
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
export const createAlpacaBackgroundsStyle = /* GraphQL */ `
  mutation CreateAlpacaBackgroundsStyle(
    $input: CreateAlpacaBackgroundsStyleInput!
    $condition: ModelAlpacaBackgroundsStyleConditionInput
  ) {
    createAlpacaBackgroundsStyle(input: $input, condition: $condition) {
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
export const updateAlpacaBackgroundsStyle = /* GraphQL */ `
  mutation UpdateAlpacaBackgroundsStyle(
    $input: UpdateAlpacaBackgroundsStyleInput!
    $condition: ModelAlpacaBackgroundsStyleConditionInput
  ) {
    updateAlpacaBackgroundsStyle(input: $input, condition: $condition) {
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
export const deleteAlpacaBackgroundsStyle = /* GraphQL */ `
  mutation DeleteAlpacaBackgroundsStyle(
    $input: DeleteAlpacaBackgroundsStyleInput!
    $condition: ModelAlpacaBackgroundsStyleConditionInput
  ) {
    deleteAlpacaBackgroundsStyle(input: $input, condition: $condition) {
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
