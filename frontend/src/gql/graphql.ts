/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "tags" */
  delete_tags?: Maybe<Tags_Mutation_Response>;
  /** delete single row from the table: "tags" */
  delete_tags_by_pk?: Maybe<Tags>;
  /** delete data from the table: "tickets" */
  delete_tickets?: Maybe<Tickets_Mutation_Response>;
  /** delete single row from the table: "tickets" */
  delete_tickets_by_pk?: Maybe<Tickets>;
  /** delete data from the table: "xref_ticket_tag" */
  delete_xref_ticket_tag?: Maybe<Xref_Ticket_Tag_Mutation_Response>;
  /** delete single row from the table: "xref_ticket_tag" */
  delete_xref_ticket_tag_by_pk?: Maybe<Xref_Ticket_Tag>;
  /** insert data into the table: "tags" */
  insert_tags?: Maybe<Tags_Mutation_Response>;
  /** insert a single row into the table: "tags" */
  insert_tags_one?: Maybe<Tags>;
  /** insert data into the table: "tickets" */
  insert_tickets?: Maybe<Tickets_Mutation_Response>;
  /** insert a single row into the table: "tickets" */
  insert_tickets_one?: Maybe<Tickets>;
  /** insert data into the table: "xref_ticket_tag" */
  insert_xref_ticket_tag?: Maybe<Xref_Ticket_Tag_Mutation_Response>;
  /** insert a single row into the table: "xref_ticket_tag" */
  insert_xref_ticket_tag_one?: Maybe<Xref_Ticket_Tag>;
  /** update data of the table: "tags" */
  update_tags?: Maybe<Tags_Mutation_Response>;
  /** update single row of the table: "tags" */
  update_tags_by_pk?: Maybe<Tags>;
  /** update multiples rows of table: "tags" */
  update_tags_many?: Maybe<Array<Maybe<Tags_Mutation_Response>>>;
  /** update data of the table: "tickets" */
  update_tickets?: Maybe<Tickets_Mutation_Response>;
  /** update single row of the table: "tickets" */
  update_tickets_by_pk?: Maybe<Tickets>;
  /** update multiples rows of table: "tickets" */
  update_tickets_many?: Maybe<Array<Maybe<Tickets_Mutation_Response>>>;
  /** update data of the table: "xref_ticket_tag" */
  update_xref_ticket_tag?: Maybe<Xref_Ticket_Tag_Mutation_Response>;
  /** update single row of the table: "xref_ticket_tag" */
  update_xref_ticket_tag_by_pk?: Maybe<Xref_Ticket_Tag>;
  /** update multiples rows of table: "xref_ticket_tag" */
  update_xref_ticket_tag_many?: Maybe<Array<Maybe<Xref_Ticket_Tag_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_TagsArgs = {
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tags_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_TicketsArgs = {
  where: Tickets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Tickets_By_PkArgs = {
  ticket_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Xref_Ticket_TagArgs = {
  where: Xref_Ticket_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Xref_Ticket_Tag_By_PkArgs = {
  tag_value: Tags_Enum;
  ticket_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_TagsArgs = {
  objects: Array<Tags_Insert_Input>;
  on_conflict?: InputMaybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tags_OneArgs = {
  object: Tags_Insert_Input;
  on_conflict?: InputMaybe<Tags_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TicketsArgs = {
  objects: Array<Tickets_Insert_Input>;
  on_conflict?: InputMaybe<Tickets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Tickets_OneArgs = {
  object: Tickets_Insert_Input;
  on_conflict?: InputMaybe<Tickets_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Xref_Ticket_TagArgs = {
  objects: Array<Xref_Ticket_Tag_Insert_Input>;
  on_conflict?: InputMaybe<Xref_Ticket_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Xref_Ticket_Tag_OneArgs = {
  object: Xref_Ticket_Tag_Insert_Input;
  on_conflict?: InputMaybe<Xref_Ticket_Tag_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_TagsArgs = {
  _set?: InputMaybe<Tags_Set_Input>;
  where: Tags_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tags_By_PkArgs = {
  _set?: InputMaybe<Tags_Set_Input>;
  pk_columns: Tags_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tags_ManyArgs = {
  updates: Array<Tags_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_TicketsArgs = {
  _set?: InputMaybe<Tickets_Set_Input>;
  where: Tickets_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Tickets_By_PkArgs = {
  _set?: InputMaybe<Tickets_Set_Input>;
  pk_columns: Tickets_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Tickets_ManyArgs = {
  updates: Array<Tickets_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_Xref_Ticket_TagArgs = {
  _set?: InputMaybe<Xref_Ticket_Tag_Set_Input>;
  where: Xref_Ticket_Tag_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Xref_Ticket_Tag_By_PkArgs = {
  _set?: InputMaybe<Xref_Ticket_Tag_Set_Input>;
  pk_columns: Xref_Ticket_Tag_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Xref_Ticket_Tag_ManyArgs = {
  updates: Array<Xref_Ticket_Tag_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table: "tickets" */
  tickets: Array<Tickets>;
  /** fetch aggregated fields from the table: "tickets" */
  tickets_aggregate: Tickets_Aggregate;
  /** fetch data from the table: "tickets" using primary key columns */
  tickets_by_pk?: Maybe<Tickets>;
  /** fetch data from the table: "xref_ticket_tag" */
  xref_ticket_tag: Array<Xref_Ticket_Tag>;
  /** fetch aggregated fields from the table: "xref_ticket_tag" */
  xref_ticket_tag_aggregate: Xref_Ticket_Tag_Aggregate;
  /** fetch data from the table: "xref_ticket_tag" using primary key columns */
  xref_ticket_tag_by_pk?: Maybe<Xref_Ticket_Tag>;
};


export type Query_RootTagsArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Query_RootTags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Query_RootTags_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootTicketsArgs = {
  distinct_on?: InputMaybe<Array<Tickets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tickets_Order_By>>;
  where?: InputMaybe<Tickets_Bool_Exp>;
};


export type Query_RootTickets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tickets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tickets_Order_By>>;
  where?: InputMaybe<Tickets_Bool_Exp>;
};


export type Query_RootTickets_By_PkArgs = {
  ticket_id: Scalars['uuid'];
};


export type Query_RootXref_Ticket_TagArgs = {
  distinct_on?: InputMaybe<Array<Xref_Ticket_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xref_Ticket_Tag_Order_By>>;
  where?: InputMaybe<Xref_Ticket_Tag_Bool_Exp>;
};


export type Query_RootXref_Ticket_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Xref_Ticket_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xref_Ticket_Tag_Order_By>>;
  where?: InputMaybe<Xref_Ticket_Tag_Bool_Exp>;
};


export type Query_RootXref_Ticket_Tag_By_PkArgs = {
  tag_value: Tags_Enum;
  ticket_id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "tags" */
  tags: Array<Tags>;
  /** fetch aggregated fields from the table: "tags" */
  tags_aggregate: Tags_Aggregate;
  /** fetch data from the table: "tags" using primary key columns */
  tags_by_pk?: Maybe<Tags>;
  /** fetch data from the table in a streaming manner: "tags" */
  tags_stream: Array<Tags>;
  /** fetch data from the table: "tickets" */
  tickets: Array<Tickets>;
  /** fetch aggregated fields from the table: "tickets" */
  tickets_aggregate: Tickets_Aggregate;
  /** fetch data from the table: "tickets" using primary key columns */
  tickets_by_pk?: Maybe<Tickets>;
  /** fetch data from the table in a streaming manner: "tickets" */
  tickets_stream: Array<Tickets>;
  /** fetch data from the table: "xref_ticket_tag" */
  xref_ticket_tag: Array<Xref_Ticket_Tag>;
  /** fetch aggregated fields from the table: "xref_ticket_tag" */
  xref_ticket_tag_aggregate: Xref_Ticket_Tag_Aggregate;
  /** fetch data from the table: "xref_ticket_tag" using primary key columns */
  xref_ticket_tag_by_pk?: Maybe<Xref_Ticket_Tag>;
  /** fetch data from the table in a streaming manner: "xref_ticket_tag" */
  xref_ticket_tag_stream: Array<Xref_Ticket_Tag>;
};


export type Subscription_RootTagsArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootTags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tags_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tags_Order_By>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootTags_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootTags_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tags_Stream_Cursor_Input>>;
  where?: InputMaybe<Tags_Bool_Exp>;
};


export type Subscription_RootTicketsArgs = {
  distinct_on?: InputMaybe<Array<Tickets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tickets_Order_By>>;
  where?: InputMaybe<Tickets_Bool_Exp>;
};


export type Subscription_RootTickets_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Tickets_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Tickets_Order_By>>;
  where?: InputMaybe<Tickets_Bool_Exp>;
};


export type Subscription_RootTickets_By_PkArgs = {
  ticket_id: Scalars['uuid'];
};


export type Subscription_RootTickets_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Tickets_Stream_Cursor_Input>>;
  where?: InputMaybe<Tickets_Bool_Exp>;
};


export type Subscription_RootXref_Ticket_TagArgs = {
  distinct_on?: InputMaybe<Array<Xref_Ticket_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xref_Ticket_Tag_Order_By>>;
  where?: InputMaybe<Xref_Ticket_Tag_Bool_Exp>;
};


export type Subscription_RootXref_Ticket_Tag_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Xref_Ticket_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xref_Ticket_Tag_Order_By>>;
  where?: InputMaybe<Xref_Ticket_Tag_Bool_Exp>;
};


export type Subscription_RootXref_Ticket_Tag_By_PkArgs = {
  tag_value: Tags_Enum;
  ticket_id: Scalars['uuid'];
};


export type Subscription_RootXref_Ticket_Tag_StreamArgs = {
  batch_size: Scalars['Int'];
  cursor: Array<InputMaybe<Xref_Ticket_Tag_Stream_Cursor_Input>>;
  where?: InputMaybe<Xref_Ticket_Tag_Bool_Exp>;
};

/** columns and relationships of "tags" */
export type Tags = {
  __typename?: 'tags';
  comment: Scalars['String'];
  value: Scalars['String'];
  /** An array relationship */
  xref_ticket_tags: Array<Xref_Ticket_Tag>;
  /** An aggregate relationship */
  xref_ticket_tags_aggregate: Xref_Ticket_Tag_Aggregate;
};


/** columns and relationships of "tags" */
export type TagsXref_Ticket_TagsArgs = {
  distinct_on?: InputMaybe<Array<Xref_Ticket_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xref_Ticket_Tag_Order_By>>;
  where?: InputMaybe<Xref_Ticket_Tag_Bool_Exp>;
};


/** columns and relationships of "tags" */
export type TagsXref_Ticket_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Xref_Ticket_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xref_Ticket_Tag_Order_By>>;
  where?: InputMaybe<Xref_Ticket_Tag_Bool_Exp>;
};

/** aggregated selection of "tags" */
export type Tags_Aggregate = {
  __typename?: 'tags_aggregate';
  aggregate?: Maybe<Tags_Aggregate_Fields>;
  nodes: Array<Tags>;
};

/** aggregate fields of "tags" */
export type Tags_Aggregate_Fields = {
  __typename?: 'tags_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tags_Max_Fields>;
  min?: Maybe<Tags_Min_Fields>;
};


/** aggregate fields of "tags" */
export type Tags_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tags_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tags". All fields are combined with a logical 'AND'. */
export type Tags_Bool_Exp = {
  _and?: InputMaybe<Array<Tags_Bool_Exp>>;
  _not?: InputMaybe<Tags_Bool_Exp>;
  _or?: InputMaybe<Array<Tags_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
  xref_ticket_tags?: InputMaybe<Xref_Ticket_Tag_Bool_Exp>;
  xref_ticket_tags_aggregate?: InputMaybe<Xref_Ticket_Tag_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "tags" */
export enum Tags_Constraint {
  /** unique or primary key constraint on columns "value" */
  TagsPkey = 'tags_pkey'
}

export enum Tags_Enum {
  /** Backlog */
  Backlog = 'backlog',
  /** Closed */
  Closed = 'closed',
  /** Halted */
  Halted = 'halted',
  /** In Progress */
  InProgress = 'in_progress'
}

/** Boolean expression to compare columns of type "tags_enum". All fields are combined with logical 'AND'. */
export type Tags_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Tags_Enum>;
  _in?: InputMaybe<Array<Tags_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Tags_Enum>;
  _nin?: InputMaybe<Array<Tags_Enum>>;
};

/** input type for inserting data into table "tags" */
export type Tags_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
  xref_ticket_tags?: InputMaybe<Xref_Ticket_Tag_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tags_Max_Fields = {
  __typename?: 'tags_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Tags_Min_Fields = {
  __typename?: 'tags_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "tags" */
export type Tags_Mutation_Response = {
  __typename?: 'tags_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tags>;
};

/** input type for inserting object relation for remote table "tags" */
export type Tags_Obj_Rel_Insert_Input = {
  data: Tags_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tags_On_Conflict>;
};

/** on_conflict condition type for table "tags" */
export type Tags_On_Conflict = {
  constraint: Tags_Constraint;
  update_columns?: Array<Tags_Update_Column>;
  where?: InputMaybe<Tags_Bool_Exp>;
};

/** Ordering options when selecting data from "tags". */
export type Tags_Order_By = {
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
  xref_ticket_tags_aggregate?: InputMaybe<Xref_Ticket_Tag_Aggregate_Order_By>;
};

/** primary key columns input for table: tags */
export type Tags_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "tags" */
export enum Tags_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "tags" */
export type Tags_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Streaming cursor of the table "tags" */
export type Tags_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tags_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tags_Stream_Cursor_Value_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "tags" */
export enum Tags_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Tags_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tags_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tags_Bool_Exp;
};

/** columns and relationships of "tickets" */
export type Tickets = {
  __typename?: 'tickets';
  created_at: Scalars['timestamptz'];
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  ticket_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  xref_ticket_tags: Array<Xref_Ticket_Tag>;
  /** An aggregate relationship */
  xref_ticket_tags_aggregate: Xref_Ticket_Tag_Aggregate;
};


/** columns and relationships of "tickets" */
export type TicketsXref_Ticket_TagsArgs = {
  distinct_on?: InputMaybe<Array<Xref_Ticket_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xref_Ticket_Tag_Order_By>>;
  where?: InputMaybe<Xref_Ticket_Tag_Bool_Exp>;
};


/** columns and relationships of "tickets" */
export type TicketsXref_Ticket_Tags_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Xref_Ticket_Tag_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Xref_Ticket_Tag_Order_By>>;
  where?: InputMaybe<Xref_Ticket_Tag_Bool_Exp>;
};

/** aggregated selection of "tickets" */
export type Tickets_Aggregate = {
  __typename?: 'tickets_aggregate';
  aggregate?: Maybe<Tickets_Aggregate_Fields>;
  nodes: Array<Tickets>;
};

/** aggregate fields of "tickets" */
export type Tickets_Aggregate_Fields = {
  __typename?: 'tickets_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Tickets_Max_Fields>;
  min?: Maybe<Tickets_Min_Fields>;
};


/** aggregate fields of "tickets" */
export type Tickets_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Tickets_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "tickets". All fields are combined with a logical 'AND'. */
export type Tickets_Bool_Exp = {
  _and?: InputMaybe<Array<Tickets_Bool_Exp>>;
  _not?: InputMaybe<Tickets_Bool_Exp>;
  _or?: InputMaybe<Array<Tickets_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  ticket_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  xref_ticket_tags?: InputMaybe<Xref_Ticket_Tag_Bool_Exp>;
  xref_ticket_tags_aggregate?: InputMaybe<Xref_Ticket_Tag_Aggregate_Bool_Exp>;
};

/** unique or primary key constraints on table "tickets" */
export enum Tickets_Constraint {
  /** unique or primary key constraint on columns "ticket_id" */
  TicketsPkey = 'tickets_pkey'
}

/** input type for inserting data into table "tickets" */
export type Tickets_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ticket_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  xref_ticket_tags?: InputMaybe<Xref_Ticket_Tag_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Tickets_Max_Fields = {
  __typename?: 'tickets_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ticket_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Tickets_Min_Fields = {
  __typename?: 'tickets_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  ticket_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "tickets" */
export type Tickets_Mutation_Response = {
  __typename?: 'tickets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Tickets>;
};

/** input type for inserting object relation for remote table "tickets" */
export type Tickets_Obj_Rel_Insert_Input = {
  data: Tickets_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Tickets_On_Conflict>;
};

/** on_conflict condition type for table "tickets" */
export type Tickets_On_Conflict = {
  constraint: Tickets_Constraint;
  update_columns?: Array<Tickets_Update_Column>;
  where?: InputMaybe<Tickets_Bool_Exp>;
};

/** Ordering options when selecting data from "tickets". */
export type Tickets_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ticket_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  xref_ticket_tags_aggregate?: InputMaybe<Xref_Ticket_Tag_Aggregate_Order_By>;
};

/** primary key columns input for table: tickets */
export type Tickets_Pk_Columns_Input = {
  ticket_id: Scalars['uuid'];
};

/** select columns of table "tickets" */
export enum Tickets_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
  /** column name */
  TicketId = 'ticket_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "tickets" */
export type Tickets_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ticket_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** Streaming cursor of the table "tickets" */
export type Tickets_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Tickets_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Tickets_Stream_Cursor_Value_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  ticket_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "tickets" */
export enum Tickets_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Name = 'name',
  /** column name */
  TicketId = 'ticket_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Tickets_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Tickets_Set_Input>;
  /** filter the rows which have to be updated */
  where: Tickets_Bool_Exp;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "xref_ticket_tag" */
export type Xref_Ticket_Tag = {
  __typename?: 'xref_ticket_tag';
  /** An object relationship */
  tag: Tags;
  tag_value: Tags_Enum;
  /** An object relationship */
  ticket: Tickets;
  ticket_id: Scalars['uuid'];
};

/** aggregated selection of "xref_ticket_tag" */
export type Xref_Ticket_Tag_Aggregate = {
  __typename?: 'xref_ticket_tag_aggregate';
  aggregate?: Maybe<Xref_Ticket_Tag_Aggregate_Fields>;
  nodes: Array<Xref_Ticket_Tag>;
};

export type Xref_Ticket_Tag_Aggregate_Bool_Exp = {
  count?: InputMaybe<Xref_Ticket_Tag_Aggregate_Bool_Exp_Count>;
};

export type Xref_Ticket_Tag_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Xref_Ticket_Tag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
  filter?: InputMaybe<Xref_Ticket_Tag_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "xref_ticket_tag" */
export type Xref_Ticket_Tag_Aggregate_Fields = {
  __typename?: 'xref_ticket_tag_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Xref_Ticket_Tag_Max_Fields>;
  min?: Maybe<Xref_Ticket_Tag_Min_Fields>;
};


/** aggregate fields of "xref_ticket_tag" */
export type Xref_Ticket_Tag_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Xref_Ticket_Tag_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "xref_ticket_tag" */
export type Xref_Ticket_Tag_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Xref_Ticket_Tag_Max_Order_By>;
  min?: InputMaybe<Xref_Ticket_Tag_Min_Order_By>;
};

/** input type for inserting array relation for remote table "xref_ticket_tag" */
export type Xref_Ticket_Tag_Arr_Rel_Insert_Input = {
  data: Array<Xref_Ticket_Tag_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Xref_Ticket_Tag_On_Conflict>;
};

/** Boolean expression to filter rows from the table "xref_ticket_tag". All fields are combined with a logical 'AND'. */
export type Xref_Ticket_Tag_Bool_Exp = {
  _and?: InputMaybe<Array<Xref_Ticket_Tag_Bool_Exp>>;
  _not?: InputMaybe<Xref_Ticket_Tag_Bool_Exp>;
  _or?: InputMaybe<Array<Xref_Ticket_Tag_Bool_Exp>>;
  tag?: InputMaybe<Tags_Bool_Exp>;
  tag_value?: InputMaybe<Tags_Enum_Comparison_Exp>;
  ticket?: InputMaybe<Tickets_Bool_Exp>;
  ticket_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "xref_ticket_tag" */
export enum Xref_Ticket_Tag_Constraint {
  /** unique or primary key constraint on columns "ticket_id", "tag_value" */
  XrefTicketTagPkey = 'xref_ticket_tag_pkey'
}

/** input type for inserting data into table "xref_ticket_tag" */
export type Xref_Ticket_Tag_Insert_Input = {
  tag?: InputMaybe<Tags_Obj_Rel_Insert_Input>;
  tag_value?: InputMaybe<Tags_Enum>;
  ticket?: InputMaybe<Tickets_Obj_Rel_Insert_Input>;
  ticket_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Xref_Ticket_Tag_Max_Fields = {
  __typename?: 'xref_ticket_tag_max_fields';
  ticket_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "xref_ticket_tag" */
export type Xref_Ticket_Tag_Max_Order_By = {
  ticket_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Xref_Ticket_Tag_Min_Fields = {
  __typename?: 'xref_ticket_tag_min_fields';
  ticket_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "xref_ticket_tag" */
export type Xref_Ticket_Tag_Min_Order_By = {
  ticket_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "xref_ticket_tag" */
export type Xref_Ticket_Tag_Mutation_Response = {
  __typename?: 'xref_ticket_tag_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Xref_Ticket_Tag>;
};

/** on_conflict condition type for table "xref_ticket_tag" */
export type Xref_Ticket_Tag_On_Conflict = {
  constraint: Xref_Ticket_Tag_Constraint;
  update_columns?: Array<Xref_Ticket_Tag_Update_Column>;
  where?: InputMaybe<Xref_Ticket_Tag_Bool_Exp>;
};

/** Ordering options when selecting data from "xref_ticket_tag". */
export type Xref_Ticket_Tag_Order_By = {
  tag?: InputMaybe<Tags_Order_By>;
  tag_value?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Tickets_Order_By>;
  ticket_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: xref_ticket_tag */
export type Xref_Ticket_Tag_Pk_Columns_Input = {
  tag_value: Tags_Enum;
  ticket_id: Scalars['uuid'];
};

/** select columns of table "xref_ticket_tag" */
export enum Xref_Ticket_Tag_Select_Column {
  /** column name */
  TagValue = 'tag_value',
  /** column name */
  TicketId = 'ticket_id'
}

/** input type for updating data in table "xref_ticket_tag" */
export type Xref_Ticket_Tag_Set_Input = {
  tag_value?: InputMaybe<Tags_Enum>;
  ticket_id?: InputMaybe<Scalars['uuid']>;
};

/** Streaming cursor of the table "xref_ticket_tag" */
export type Xref_Ticket_Tag_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Xref_Ticket_Tag_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Xref_Ticket_Tag_Stream_Cursor_Value_Input = {
  tag_value?: InputMaybe<Tags_Enum>;
  ticket_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "xref_ticket_tag" */
export enum Xref_Ticket_Tag_Update_Column {
  /** column name */
  TagValue = 'tag_value',
  /** column name */
  TicketId = 'ticket_id'
}

export type Xref_Ticket_Tag_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Xref_Ticket_Tag_Set_Input>;
  /** filter the rows which have to be updated */
  where: Xref_Ticket_Tag_Bool_Exp;
};

export type TagsQueryVariables = Exact<{ [key: string]: never; }>;


export type TagsQuery = { __typename?: 'query_root', tags: Array<{ __typename?: 'tags', value: string, comment: string }> };

export type TicketsQueryVariables = Exact<{
  where?: InputMaybe<Tickets_Bool_Exp>;
}>;


export type TicketsQuery = { __typename?: 'query_root', tickets: Array<{ __typename?: 'tickets', ticket_id: any, name: string, description?: string | null, created_at: any, updated_at: any, xref_ticket_tags: Array<{ __typename?: 'xref_ticket_tag', tag: { __typename?: 'tags', value: string, comment: string } }> }> };


export const TagsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]} as unknown as DocumentNode<TagsQuery, TagsQueryVariables>;
export const TicketsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tickets"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"tickets_bool_exp"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tickets"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ticket_id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"created_at"}},{"kind":"Field","name":{"kind":"Name","value":"updated_at"}},{"kind":"Field","name":{"kind":"Name","value":"xref_ticket_tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"comment"}}]}}]}}]}}]}}]} as unknown as DocumentNode<TicketsQuery, TicketsQueryVariables>;