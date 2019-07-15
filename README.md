# A Hackernews Demo Server Using TS, Node, GraphQL

[![Build Status](https://dev.azure.com/crown0938/Github/_apis/build/status/crown3.GraphQL-Server-Node-TS?branchName=master)](https://dev.azure.com/crown0938/Github/_build/latest?definitionId=10&branchName=master)

[English](./README.md) | [中文](./README.zh-CN.md)

The series of projects implements a simple `Hackernews Demo`,including server
and client, mainlyfor individuals to familiarize themselves with the development
environment and ecology of `GraphQL`. The functions implemented include
`user registration and login`, `feed`, `feed voting`, `the pagination of feed`
and `the subscription of feed and it's vote` , etc. The main code refers to the relevant implementation of the
[HowToGraphQL](https://www.howtographql.com) project, the series of projects is
mainly divided into the follwing parts:

- Hackernews Demo
  - Server
    - [`Node`](https://github.com/crown3/GraphQL-Server-Node-TS): implement with
      `graphql-yoga`, `prisma`, `ts`, `Docker`
  - Client
    - [`React`](https://github.com/crown3/GraphQL-Client-React-TS): implement with `react-apollo`, `react`, `ts`

![](./assets/190516_090038162.png)

## Getting Started

**Note:** there is only an introduction to how the server code run. If you want
to see the entire project, you need to go to another repository to install the
relevant client code, such as [the Web using React](https://github.com/crown3/GraphQL-Client-React-TS)

### Prerequisites

You only need to provide the `Node` && `Docker` running environment, there is mine:

```bash
❯❯❯ node -v
v10.15.0
❯❯❯ docker -v
Docker version 18.09.2, build 6247962
```

### Installing

Install the dependencies

```bash
yarn install
```

Deploy the Prisma API

You will now deploy the Prisma API that's backing this example. This requires
you to have [Docker](https://www.docker.com) installed on your machine (if you
don't have Docker follow the collapsed instructions below the code block):

```
docker-compose up -d
yarn prisma deploy
```

<details>
 <summary><strong>I don't have Docker installed on my machine</strong></summary>

To deploy your service to a Demo server (rather than locally with Docker), follow these steps:

- Run the following command:
  ```
  yarn prisma deploy --new
  ```
- In the interactive CLI wizard:
  - Select the **Demo server**
  - For all following questions, choose the suggested values by just hitting **Enter**

</details>

Start the server, , open the browser URL of the prompt, such as `http://localhost:4000`:

```bash
yarn dev
```

### The introduction of other scripts:

```jsonc
{
  "scripts": {
    "lint": "eslint --ext .ts,.tsx src", // lint your code
    "dev": "ts-node src/index.ts",
    "dev:watch": "nodemon --watch 'src/**/*.ts' --ignore 'src/**/*.spec.ts' --exec yarn dev", // run dev with watching mode
    "prisma": "cd prisma && prisma generate", // Run the `prisma` related command in the `prisma` folder
    "generate-resolvers": "graphql-resolver-codegen interfaces -s src/schema.graphql -o src/generated/resolvers.ts" // Generate corresponding `resolvers.ts` based on your graphql configuration file, avoid the need to manually declare various interface configuration
  }
}
```

**Note:** the relevant code in the `src/generated` folder is automatically
generated, don't modify. `src/genereted/prisma-client` is generated according to
the relevant configuration in your `prisma`. After modifying the related files
in `prisma`, remember to run `yarn prisma deploy`.

## Running the tests

There are currently no related test files...

## Contributing

Please read [CONTRIBUTING.md](./.github/CONTRIBUTING.md) for details on our code
of conduct, and the process for submitting pull requests to.

## Versioning

We use [semantic-release](https://github.com/semantic-release/semantic-release#readme) for versioning. For the versions available, see the [tags on this repository](https://github.com/crown3/GraphQL-Server-Node-TS/tags).

## Authors

- **Crown Chen** - [Crown](https://github.com/crown3)

See also the list of [contributors](https://github.com/crown3/GraphQL-Server-Node-TS/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details

## Acknowledgments

- Again, this is just a `Demo Project`
