
# GraphQL Backend for Energy Consumption Data

This is a GraphQL backend built using Node.js, Apollo Server, and Prisma ORM. It provides APIs for querying energy consumption data within a specified date range. The data is stored in an Postgress database.

## Features

- Query energy consumption data by date range using GraphQL.
- Input validation to ensure valid date formats and logical ranges.
- Error handling for invalid inputs or database issues.


## Tech Stack

- Node.js: Runtime environment

- Apollo Server: GraphQL server implementation

- Postgres db: Relational database

- Prisma ORM: Database management




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`DATABASE_URL`



## Run Locally

Clone the project

```bash
  git clone https://github.com/Akinmyde/carbon-graphql
```

Go to the project directory

```bash
  cd carbon-graphql
```

Install dependencies

```bash
  yarn install
```

Start the server

```bash
  yarn dev
```


## GraphAl Reference

#### Get all items

```graphql
  Query consumptions
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `startDate` | `string` | **Not Required**. Your Start Date |
| `endDate` | `string` | **Not Required**. Your End Date |

## Usage/Examples

use a tool like [GraphQL Playground](https://github.com/graphql/graphql-playground) or [Postman](https://www.postman.com/) to send the following query
```javascript
query {
  consumption(startDate: "2024-07-01", endDate: "2024-07-02") {
    datetime
    value
  }
}
```


## Screenshots

![App Screenshot](https://res.cloudinary.com/codeace/image/upload/v1733775156/Screenshot_2024-12-09_at_21.12.25.jpg)


## Migration and Seeding

Migration

```bash
  yarn migration
```

You can get sample data here to seed to your DB: [test data](https://gist.github.com/theo429/d9f6c3e72a5ab09a200c6d69137ab6af) 
    
## Authors

- [@akinmyde](https://www.github.com/akinmyde)

