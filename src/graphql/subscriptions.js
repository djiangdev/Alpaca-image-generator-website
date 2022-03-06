/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAlpacaAccessories = /* GraphQL */ `
  subscription OnCreateAlpacaAccessories($owner: String) {
    onCreateAlpacaAccessories(owner: $owner) {
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
export const onUpdateAlpacaAccessories = /* GraphQL */ `
  subscription OnUpdateAlpacaAccessories($owner: String) {
    onUpdateAlpacaAccessories(owner: $owner) {
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
export const onDeleteAlpacaAccessories = /* GraphQL */ `
  subscription OnDeleteAlpacaAccessories($owner: String) {
    onDeleteAlpacaAccessories(owner: $owner) {
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
export const onCreateAlpacaAccessoriesStyle = /* GraphQL */ `
  subscription OnCreateAlpacaAccessoriesStyle($owner: String) {
    onCreateAlpacaAccessoriesStyle(owner: $owner) {
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
export const onUpdateAlpacaAccessoriesStyle = /* GraphQL */ `
  subscription OnUpdateAlpacaAccessoriesStyle($owner: String) {
    onUpdateAlpacaAccessoriesStyle(owner: $owner) {
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
export const onDeleteAlpacaAccessoriesStyle = /* GraphQL */ `
  subscription OnDeleteAlpacaAccessoriesStyle($owner: String) {
    onDeleteAlpacaAccessoriesStyle(owner: $owner) {
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
export const onCreateAlpacaBackgrounds = /* GraphQL */ `
  subscription OnCreateAlpacaBackgrounds($owner: String) {
    onCreateAlpacaBackgrounds(owner: $owner) {
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
export const onUpdateAlpacaBackgrounds = /* GraphQL */ `
  subscription OnUpdateAlpacaBackgrounds($owner: String) {
    onUpdateAlpacaBackgrounds(owner: $owner) {
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
export const onDeleteAlpacaBackgrounds = /* GraphQL */ `
  subscription OnDeleteAlpacaBackgrounds($owner: String) {
    onDeleteAlpacaBackgrounds(owner: $owner) {
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
export const onCreateAlpacaBackgroundsStyle = /* GraphQL */ `
  subscription OnCreateAlpacaBackgroundsStyle($owner: String) {
    onCreateAlpacaBackgroundsStyle(owner: $owner) {
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
export const onUpdateAlpacaBackgroundsStyle = /* GraphQL */ `
  subscription OnUpdateAlpacaBackgroundsStyle($owner: String) {
    onUpdateAlpacaBackgroundsStyle(owner: $owner) {
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
export const onDeleteAlpacaBackgroundsStyle = /* GraphQL */ `
  subscription OnDeleteAlpacaBackgroundsStyle($owner: String) {
    onDeleteAlpacaBackgroundsStyle(owner: $owner) {
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
