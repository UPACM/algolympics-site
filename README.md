# UP ACM Algolympics

This is the repository for the UP ACM Algolympics informational website.

This uses Gatsby and was started via Gatsby's hello-world boilerplate.

<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>

## 🚀 Quick start

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-hello-world-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open and edit a file in `src/`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

Here are the the top-level files and directories. You see most of these in a typical Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── static
    ├── .gitignore
    ├── .prettierrc
    ├── devserver.sh
    ├── Dockerfile
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template.

1.  **`/static`**: This directory will contain static files.

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1.  **`devserver.sh`**: A script that runs `gatsby clean` (clears cache) and then `gatsby develop`. You can run this yourself, but this is mainly used by the Docker container to run the development server.

1.  **`Dockerfile`**: A manifest file for a Docker image to be built for this app. See the "Running via Docker" below for more details.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

1.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

1.  **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 🏢 Yearly Structure

This is intended to house the websites for all Algolympics iterations starting from 2021. As such, the files are mostly organized by year. Things outside of the year folders are intended to be reusable across several years.

Currently, there's not much reusable stuff, and that's a shame. That should probably be fixed soon.

## 🎊 Updating to Include the Latest Year

Suppose you want to update the website to include the latest iteration of Algolympics: Algolympics 20XX. Here are the steps you should probably follow:

1. Duplicate everything from year `20XX-1`.

1. Update the relevant files, styles, data, etc.

Note that `src/data/details.json` and `gatsby-node.js` should probably be updated as well.

## 🦆 Running via Docker

Docker is a software that runs so-called "containers". Containers simulate the OS; think of it like running a virtual machine on your computer, except that only the OS is simulated, which makes it lighter than virtual machines. Dockers are used these days to make it easy to maintain exactly the same environments across multiple computers. It is even used in production to ensure that the "machine" that you run locally is the same as the production "machine".

Running `gatsby develop` via Docker is optional, but desirable. If you want to do so,

1. You first have to build the Docker image by running `docker build -t algosite .`. Here, `algosite` will be the name of the image.

2. Then you can run the image with `docker run --name algosite -p 8000:8000 -v $(pwd):/usr/src/app algosite`. Here,

   1. `--name algosite` specifies that the name of the Docker _instance_ of our image is `algosite`.

   1. `-p 8000:8000` links port `8000` inside the Docker container to the outside machine, so that you can access port `8000` in your browser, for example.

   1. `-v $(pwd):/usr/src/app` mounts the current folder to the folder `/usr/src/app` inside the Docker container. This makes it so that edits you make are seen inside the container and are thus seen by `gatsby develop`.

   1. `algosite` at the end is just the name of the image to make an instance of.

3. To restart it, you must run `docker stop algosite && docker rm algosite` (in a different terminal) to stop and remove the container `algosite`, and then run the `docker run` command above again.

4. To go _inside_ the Docker container and access a terminal, run `docker exec -it algosite bash`. This will give you access to a terminal _inside_ the container. You can run any available command there.

5. You can also run other commands directly via `docker exec`, e.g., `docker exec -it algosite npm run format`. This runs `npm run format` _inside_ the container.
