# A Hackernews Demo Server Using TS, Node, GraphQL

[![Build Status](https://dev.azure.com/crown0938/Github/_apis/build/status/crown3.graqhql-server-demo-node-ts?branchName=master)](https://dev.azure.com/crown0938/Github/_build/latest?definitionId=5&branchName=master)

该系列项目实现了一个简易的`Hackernews Demo`，包括服务端与客户端，主要是个人用来熟悉 `GraphQL` 相关开发环境与生态的练手项目，实现的功能包括用户注册以及登陆、`Feed`、`Feed`的投票、`Feed`的分页等，其中主要代码参考了 [HowToGraphQL](https://www.howtographql.com/) 这个项目中的相关实现，项目主要分为以下几个部分：

- Hackernews Demo
  - Server
    - [`Node`](https://github.com/crown3/GraqhQL-Server-Demo-Node-TS): implement with `graphql-yoga`, `prisma`, `ts`
  - Client
    - [`React`](https://github.com/crown3/GraphQL-Client-React-TS): implement with `react-apollo`, `react`, `ts`

![](./assets/190516_090038162.png)

## 如何开始

注意，这里只有关于服务端代码如何运行的介绍，如果你要查看完整的整个项目，你还需要去到另外的仓库中安装相关的客户端代码，例如[`Web using react`](https://github.com/crown3/GraphQL-Client-React-TS)

### 运行环境

你只需要提供`Node`的运行环境即可，我的`Node`版本：

```bash
❯❯❯ node -v
v10.15.0
```

### 安装

安装相关依赖，打开提示的浏览器网址，例如`http://localhost:3000`：

```bash
yarn install
yarn dev
```

其它运行脚本介绍:

```json
{
  "scripts": {
    "cz": "git-cz", // Standardize your commit message, please use `yarn cz` instead of `git commit ...` after `git add`
    "lint": "eslint --ext .ts,.tsx src", // lint your code
    "dev": "ts-node src/index.ts",
    "dev:watch": "nodemon --watch 'src/**/*.ts' --ignore 'src/**/*.spec.ts' --exec yarn dev", // run dev with watching mode
    "prisma:deploy": "export NO_PROXY=*; prisma deploy", // deploy prisma config to your database
    "prisma:generate": "prisma generate" // generate some typescript code which based on your datamodel.prisma
  }
}
```

注意：`src/generated`这个文件夹里面的相关代码全是自动生成的，不要修改，其中`src/generated/prisma-client`是根据你的 `prisma`里的相关配置来生成，在修改了 `prisma` 中的相关文件后，记得运行`yarn prisma:deploy`。这里默认提供了一个测试使用的云端节点`https://us1.prisma.sh/crown-a144e9/demo-hackernews/dev`

## 运行测试

目前还没有相关测试文件...

## Contributing

Please read [CONTRIBUTING.md](./.github/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [semantic-release](https://github.com/semantic-release/semantic-release#readme) for versioning. For the versions available, see the [tags on this repository](https://github.com/crown3/GraqhQL-Server-Demo-Node-TS/tags).

## Authors

- **Crown Chen** - [Crown](https://github.com/crown3)

See also the list of [contributors](https://github.com/crown3/GraqhQL-Server-Demo-Node-TS/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details

## Acknowledgments

- 再次声明，这只是一个`Demo Project`
