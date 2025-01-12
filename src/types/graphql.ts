/* eslint-disable */ 
/* THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY) */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
};

export type AuthRegistration = {
  confirmPassword: Scalars['String']['input'];
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};

export type Breadcrumb = {
  __typename?: 'Breadcrumb';
  category?: Maybe<RecipeCategory>;
  post?: Maybe<Recipe>;
};

export type FileManager = {
  __typename?: 'FileManager';
  id: Scalars['String']['output'];
  name?: Maybe<Scalars['String']['output']>;
  order: Scalars['Float']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  type: FileManagerType;
  value?: Maybe<Scalars['String']['output']>;
};

export enum FileManagerType {
  Folder = 'FOLDER',
  Image = 'IMAGE'
}

export type FolderCreate = {
  name: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  children?: Maybe<Array<Ingredient>>;
  description?: Maybe<Scalars['JSON']['output']>;
  iconId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  previewAlt?: Maybe<Scalars['JSON']['output']>;
  previewId?: Maybe<Scalars['String']['output']>;
  previewTitle?: Maybe<Scalars['JSON']['output']>;
  title?: Maybe<Scalars['JSON']['output']>;
};

export type IngredientCreate = {
  description?: InputMaybe<Scalars['JSON']['input']>;
  iconId?: InputMaybe<Scalars['String']['input']>;
  parentId?: InputMaybe<Scalars['String']['input']>;
  previewAlt?: InputMaybe<Scalars['JSON']['input']>;
  previewId?: InputMaybe<Scalars['String']['input']>;
  previewTitle?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['JSON']['input']>;
};

export type IngredientUpdate = {
  description?: InputMaybe<Scalars['JSON']['input']>;
  iconId?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
  previewAlt?: InputMaybe<Scalars['JSON']['input']>;
  previewId?: InputMaybe<Scalars['String']['input']>;
  previewTitle?: InputMaybe<Scalars['JSON']['input']>;
  title?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createFolder: FileManager;
  createIngredient?: Maybe<Ingredient>;
  createPost?: Maybe<Post>;
  createPostCategory?: Maybe<PostCategory>;
  createRecipe?: Maybe<Recipe>;
  createRecipeCategory?: Maybe<RecipeCategory>;
  createTranslation?: Maybe<Translation>;
  deleteTranslation?: Maybe<Translation>;
  recoveryPassword?: Maybe<Scalars['String']['output']>;
  registration: User;
  removeFile?: Maybe<Scalars['String']['output']>;
  setNewPassword?: Maybe<Scalars['String']['output']>;
  signIn: User;
  signInByGoogle: User;
  signOut: User;
  updateIngredient?: Maybe<Ingredient>;
  updatePost?: Maybe<Post>;
  updatePostCategory?: Maybe<PostCategory>;
  updatePostCountSee?: Maybe<Array<Post>>;
  updateRecipe?: Maybe<Recipe>;
  updateRecipeCategory?: Maybe<RecipeCategory>;
  updateRecipeCountSee?: Maybe<Array<Recipe>>;
  updateTranslation?: Maybe<Translation>;
  updateUser?: Maybe<User>;
};


export type MutationCreateFolderArgs = {
  folder: FolderCreate;
};


export type MutationCreateIngredientArgs = {
  ingredient: IngredientCreate;
};


export type MutationCreatePostArgs = {
  post: PostCreate;
};


export type MutationCreatePostCategoryArgs = {
  category: PostCategoryCreate;
};


export type MutationCreateRecipeArgs = {
  recipe: RecipeCreate;
};


export type MutationCreateRecipeCategoryArgs = {
  category: RecipeCategoryCreate;
};


export type MutationCreateTranslationArgs = {
  translation: TranslationCreate;
};


export type MutationDeleteTranslationArgs = {
  id: Scalars['String']['input'];
};


export type MutationRecoveryPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationRegistrationArgs = {
  auth: AuthRegistration;
};


export type MutationRemoveFileArgs = {
  id: Scalars['String']['input'];
};


export type MutationSetNewPasswordArgs = {
  password: Scalars['String']['input'];
  password2: Scalars['String']['input'];
  token: Scalars['String']['input'];
};


export type MutationSignInArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationSignInByGoogleArgs = {
  token: Scalars['String']['input'];
};


export type MutationUpdateIngredientArgs = {
  ingredient: IngredientUpdate;
};


export type MutationUpdatePostArgs = {
  post: PostUpdate;
};


export type MutationUpdatePostCategoryArgs = {
  category: PostCategoryUpdate;
};


export type MutationUpdatePostCountSeeArgs = {
  url: Scalars['String']['input'];
};


export type MutationUpdateRecipeArgs = {
  recipe: RecipeUpdate;
};


export type MutationUpdateRecipeCategoryArgs = {
  category: RecipeCategoryUpdate;
};


export type MutationUpdateRecipeCountSeeArgs = {
  url: Scalars['String']['input'];
};


export type MutationUpdateTranslationArgs = {
  translation: TranslationUpdate;
};


export type MutationUpdateUserArgs = {
  user: UserUpdate;
};

export type Post = {
  __typename?: 'Post';
  countSee: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description: Scalars['JSON']['output'];
  id: Scalars['String']['output'];
  isPublish: Scalars['Boolean']['output'];
  keywords?: Maybe<Scalars['JSON']['output']>;
  pageName: Scalars['JSON']['output'];
  pageTitle: Scalars['JSON']['output'];
  postCategoryId: Scalars['String']['output'];
  previewAlt?: Maybe<Scalars['JSON']['output']>;
  previewId?: Maybe<Scalars['String']['output']>;
  previewTitle?: Maybe<Scalars['JSON']['output']>;
  rubric: PostCategory;
  text: Scalars['JSON']['output'];
  total: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['JSON']['output'];
};

export type PostCategory = {
  __typename?: 'PostCategory';
  children?: Maybe<Array<PostCategory>>;
  description?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['String']['output'];
  keywords?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['JSON']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['JSON']['output']>;
  url: Scalars['JSON']['output'];
};

export type PostCategoryCreate = {
  description?: InputMaybe<Scalars['JSON']['input']>;
  keywords?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['JSON']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['JSON']['input']>;
  url: Scalars['JSON']['input'];
};

export type PostCategoryUpdate = {
  description?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['String']['input'];
  keywords?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['JSON']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['JSON']['input']>;
  url: Scalars['JSON']['input'];
};

export type PostCreate = {
  description?: InputMaybe<Scalars['JSON']['input']>;
  isPublish?: InputMaybe<Scalars['Boolean']['input']>;
  keywords?: InputMaybe<Scalars['JSON']['input']>;
  pageName: Scalars['JSON']['input'];
  pageTitle: Scalars['JSON']['input'];
  postCategoryId: Scalars['String']['input'];
  previewAlt?: InputMaybe<Scalars['JSON']['input']>;
  previewId?: InputMaybe<Scalars['String']['input']>;
  previewTitle?: InputMaybe<Scalars['JSON']['input']>;
  text: Scalars['JSON']['input'];
  url: Scalars['JSON']['input'];
};

export type PostUpdate = {
  description?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['String']['input'];
  isPublish?: InputMaybe<Scalars['Boolean']['input']>;
  keywords?: InputMaybe<Scalars['JSON']['input']>;
  pageName: Scalars['JSON']['input'];
  pageTitle: Scalars['JSON']['input'];
  postCategoryId: Scalars['String']['input'];
  previewAlt?: InputMaybe<Scalars['JSON']['input']>;
  previewId?: InputMaybe<Scalars['String']['input']>;
  previewTitle?: InputMaybe<Scalars['JSON']['input']>;
  text: Scalars['JSON']['input'];
  url: Scalars['JSON']['input'];
};

export type Query = {
  __typename?: 'Query';
  checkRecoveryToken?: Maybe<Scalars['String']['output']>;
  getBreadcrumb: Breadcrumb;
  getCountPosts: Post;
  getCountRecipes: Recipe;
  getFileManagerAllParents?: Maybe<Array<FileManager>>;
  getIngredientById?: Maybe<Ingredient>;
  getIngredients?: Maybe<Array<Ingredient>>;
  getLatestPosts?: Maybe<Array<Post>>;
  getLatestRecipes?: Maybe<Array<Recipe>>;
  getListByParentId?: Maybe<Array<FileManager>>;
  getPostById?: Maybe<Post>;
  getPostByPostCategoryUrl?: Maybe<Array<Post>>;
  getPostByUrl?: Maybe<Post>;
  getPostCategories: Array<PostCategory>;
  getPostCategory?: Maybe<Array<PostCategory>>;
  getPostCategoryById?: Maybe<PostCategory>;
  getPostCategoryByUrl?: Maybe<PostCategory>;
  getPosts?: Maybe<Array<Post>>;
  getRecipeById?: Maybe<Recipe>;
  getRecipeByUrl?: Maybe<Recipe>;
  getRecipeCategories: Array<RecipeCategory>;
  getRecipeCategory?: Maybe<Array<RecipeCategory>>;
  getRecipeCategoryById?: Maybe<RecipeCategory>;
  getRecipeCategoryByUrl?: Maybe<RecipeCategory>;
  getRecipes?: Maybe<Array<Recipe>>;
  getRecipesByRecipeCategoryUrl?: Maybe<Array<Recipe>>;
  getTranslationById?: Maybe<Translation>;
  getTranslations?: Maybe<Array<Translation>>;
  me?: Maybe<User>;
};


export type QueryCheckRecoveryTokenArgs = {
  token: Scalars['String']['input'];
};


export type QueryGetBreadcrumbArgs = {
  params: Scalars['String']['input'];
};


export type QueryGetFileManagerAllParentsArgs = {
  parentId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetIngredientByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetLatestPostsArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetLatestRecipesArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  take?: InputMaybe<Scalars['Float']['input']>;
};


export type QueryGetListByParentIdArgs = {
  parentId?: InputMaybe<Scalars['String']['input']>;
};


export type QueryGetPostByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPostByPostCategoryUrlArgs = {
  url: Scalars['String']['input'];
};


export type QueryGetPostByUrlArgs = {
  postCategoryUrl: Scalars['String']['input'];
  url: Scalars['String']['input'];
};


export type QueryGetPostCategoryByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetPostCategoryByUrlArgs = {
  url: Scalars['String']['input'];
};


export type QueryGetRecipeByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetRecipeByUrlArgs = {
  recipeCategoryUrl: Scalars['String']['input'];
  url: Scalars['String']['input'];
};


export type QueryGetRecipeCategoryByIdArgs = {
  id: Scalars['String']['input'];
};


export type QueryGetRecipeCategoryByUrlArgs = {
  url: Scalars['String']['input'];
};


export type QueryGetRecipesByRecipeCategoryUrlArgs = {
  url: Scalars['String']['input'];
};


export type QueryGetTranslationByIdArgs = {
  id: Scalars['String']['input'];
};

export type Recipe = {
  __typename?: 'Recipe';
  activeCookingTime?: Maybe<Scalars['DateTime']['output']>;
  countSee: Scalars['Float']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['String']['output'];
  ingredients: Array<RecipeIngredient>;
  isPublish: Scalars['Boolean']['output'];
  keywords?: Maybe<Scalars['JSON']['output']>;
  pageName: Scalars['JSON']['output'];
  pageTitle: Scalars['JSON']['output'];
  previewAlt?: Maybe<Scalars['JSON']['output']>;
  previewId?: Maybe<Scalars['String']['output']>;
  previewTitle?: Maybe<Scalars['JSON']['output']>;
  recipeCategoryId: Scalars['String']['output'];
  rubric: RecipeCategory;
  text: Scalars['JSON']['output'];
  total: Scalars['Float']['output'];
  totalCookingTime?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['JSON']['output'];
};

export type RecipeCategory = {
  __typename?: 'RecipeCategory';
  children: Array<RecipeCategory>;
  description?: Maybe<Scalars['JSON']['output']>;
  id: Scalars['String']['output'];
  keywords?: Maybe<Scalars['JSON']['output']>;
  name: Scalars['JSON']['output'];
  parentId?: Maybe<Scalars['String']['output']>;
  text?: Maybe<Scalars['JSON']['output']>;
  url: Scalars['JSON']['output'];
};

export type RecipeCategoryCreate = {
  description?: InputMaybe<Scalars['JSON']['input']>;
  keywords?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['JSON']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['JSON']['input']>;
  url: Scalars['JSON']['input'];
};

export type RecipeCategoryUpdate = {
  description?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['String']['input'];
  keywords?: InputMaybe<Scalars['JSON']['input']>;
  name: Scalars['JSON']['input'];
  parentId?: InputMaybe<Scalars['String']['input']>;
  text?: InputMaybe<Scalars['JSON']['input']>;
  url: Scalars['JSON']['input'];
};

export type RecipeCreate = {
  activeCookingTime?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  ingredients?: InputMaybe<Scalars['String']['input']>;
  isPublish?: InputMaybe<Scalars['Boolean']['input']>;
  keywords?: InputMaybe<Scalars['JSON']['input']>;
  pageName: Scalars['JSON']['input'];
  pageTitle: Scalars['JSON']['input'];
  previewAlt?: InputMaybe<Scalars['JSON']['input']>;
  previewId?: InputMaybe<Scalars['String']['input']>;
  previewTitle?: InputMaybe<Scalars['JSON']['input']>;
  recipeCategoryId: Scalars['String']['input'];
  text: Scalars['JSON']['input'];
  totalCookingTime?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['JSON']['input'];
};

export type RecipeIngredient = {
  __typename?: 'RecipeIngredient';
  id?: Maybe<Scalars['String']['output']>;
  ingredient: Ingredient;
  ingredientId: Scalars['String']['output'];
  note: Scalars['JSON']['output'];
  value: Scalars['JSON']['output'];
};

export type RecipeUpdate = {
  activeCookingTime?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['JSON']['input']>;
  id: Scalars['String']['input'];
  ingredients?: InputMaybe<Scalars['String']['input']>;
  isPublish?: InputMaybe<Scalars['Boolean']['input']>;
  keywords?: InputMaybe<Scalars['JSON']['input']>;
  pageName: Scalars['JSON']['input'];
  pageTitle: Scalars['JSON']['input'];
  previewAlt?: InputMaybe<Scalars['JSON']['input']>;
  previewId?: InputMaybe<Scalars['String']['input']>;
  previewTitle?: InputMaybe<Scalars['JSON']['input']>;
  recipeCategoryId: Scalars['String']['input'];
  text: Scalars['JSON']['input'];
  totalCookingTime?: InputMaybe<Scalars['DateTime']['input']>;
  url: Scalars['JSON']['input'];
};

export type Translation = {
  __typename?: 'Translation';
  id: Scalars['String']['output'];
  machineName: Scalars['String']['output'];
  value?: Maybe<Scalars['JSON']['output']>;
};

export type TranslationCreate = {
  machineName: Scalars['String']['input'];
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type TranslationUpdate = {
  id: Scalars['String']['input'];
  machineName: Scalars['String']['input'];
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type User = {
  __typename?: 'User';
  appleId?: Maybe<Scalars['String']['output']>;
  avatar?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebookId?: Maybe<Scalars['String']['output']>;
  firstName?: Maybe<Scalars['String']['output']>;
  googleId?: Maybe<Scalars['String']['output']>;
  id: Scalars['String']['output'];
  lastName?: Maybe<Scalars['String']['output']>;
  login: Scalars['String']['output'];
  now: Scalars['DateTime']['output'];
  password: Scalars['String']['output'];
};

export type UserUpdate = {
  avatar?: InputMaybe<Scalars['String']['input']>;
  firstName?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['String']['input'];
  lastName?: InputMaybe<Scalars['String']['input']>;
};
