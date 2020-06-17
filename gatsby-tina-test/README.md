<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
    <img alt="Cover" src="./content/assets/cover.svg" width="80" />
</p>
<h1 align="center">
  Cover Template 2.0
</h1>

Cover Template 2.0 is a static site generator ([**Gatsby**](https://www.gatsbyjs.org/)) with a real time edit interface ([**TinaCMS**](https://tinacms.org/)). Easily add/remove elements, customize content, and even insert ad placements all via a beautiful in browser UI! The output is also optimized for interactive override workflow and integration with Copilot.
<br/>
<br/>

## 🤖 Development Environment

Before you start building your first Cover Template, you’ll need to make sure that you have installed all required software tools. _**Note:** most of this was copied directly from the [Gatsby docs](https://www.gatsbyjs.org/tutorial/part-zero/)_.

⚠️ If you don't have admin level access on your computer you may have to ask CN Tech for help.
<br/>
<br/>

### Terminal

Take a moment to locate and open up the command line interface (CLI) for your computer. Depending on which operating system you are using, see [instructions for Mac](http://www.macworld.co.uk/feature/mac-software/how-use-terminal-on-mac-3608274/).
<br/>
<br/>

### Install Node.js

Lets first check to see if Node is installed on your computer. Enter following command into your Terminal:

```shell
node --version
```

If it returns `command not found` you'll need to proceed with the following steps.
<br/>
<br/>

- **Install Homebrew**

  To install Gatsby and Node.js on a Mac, it is recommended to use [Homebrew](https://brew.sh/). A little set-up in the beginning can save you from some headaches later on!

  1.  Open your Terminal.

  2.  To see if Homebrew is installed, type the following:

      ```shell
      brew -v
      ```

  3.  If not, download and install [Homebrew with the instructions](https://docs.brew.sh/Installation).

  4.  Once you’ve installed Homebrew, repeat step 2 to verify.
      <br/>
      <br/>

- **Install Xcode Command Line Tools**

  1.  Open your Terminal.

  2.  Install Xcode Command line tools by running:

      ```shell
      xcode-select --install
      ```

      💡 If that fails, download it [directly from Apple’s site](https://developer.apple.com/download/more/), after signing-in with an Apple developer account.

  3.  After being prompted to start the installation, you’ll be prompted again to accept a software license for the tools to download.
      <br/>
      <br/>

- **Install Node**

  1.  Open your Terminal

  2.  Install node with Homebrew.

      ```shell
      brew install node
      ```
      💡 If you don’t want to install it through Homebrew, download the latest Node.js version from [the official Node.js website](https://nodejs.org/en/), double click on the downloaded file and go through the installation process.
  <br/>
  <br/>

### Install Git

There are several ways to install Git on a Mac. In fact, if you've installed XCode (or it's Command Line Tools), Git may already be installed. To find out, open a terminal and enter:

```shell
git --version
```

If not the easiest way to install Git on a Mac is via the stand-alone installer:

1.  Download the latest [Git for Mac installer](https://sourceforge.net/projects/git-osx-installer/files/).

2.  Follow the prompts to install Git.

3.  Verify the installation was successful by typing:

    ```shell
    git --version
    ```

4.  Configure your Git username and email using the following commands, replacing Emma's name with your own. These details will be associated with any commits that you create.

    ```shell
    git config --global user.name "Emma Paris"
    git config --global user.email "eparis@condenast.com"
    ```

    💡 For more methods of install checkout out these [docs](https://www.atlassian.com/git/tutorials/install-git#mac-os-x).
  <br/>
  <br/>

### Install the Gatsby CLI

The Gatsby CLI is available via npm and should be installed globally by running:

```shell
npm install -g gatsby-cli
```

Check out the available commands.

```shell
gatsby --help
```

💡 If you are unable to successfully run the Gatsby CLI due to a permissions issue, you may want to check out the [npm docs on fixing permissions](https://docs.npmjs.com/getting-started/fixing-npm-permissions), or [this guide](https://github.com/sindresorhus/guides/blob/master/npm-global-without-sudo.md).
<br/>
<br/>

## 📂 Create New

Now you are ready to use the Gatsby CLI tool to create your first Gatsby site. Using the tool, you can download this starter and create a new template for your own purposes.

1.  Open up your terminal.

2.  Clone a copy of this starter.

    ```shell
    gatsby clone https://github.com/CondeNast/allure-interactive-override/tree/master/public/cover-template
    ```

3.  Then create a new site from the cloned/downloaded starter.

    ```shell
    gatsby new new-template-name LOCAL_PATH_TO_STARTER
    ```

    💡 The amount of time this takes will vary.
    <br/>
    <br/>

## 🚀 Start

Now that you've created a new template lets get our CMS up and running.

1.  Open up your terminal.

2.  Change into the new working directory

    ```shell
    cd new-template-name
    ```

3.  Start development mode

    ```shell
    gatsby develop
    ```

    💡 This command starts a development server. You will be able to see and interact with your new site in a development environment — local (on your computer, not published to the internet).

4.  Open up a new tab in your browser (Chrome is best) and navigate to http://localhost:8000/
    <br/>
    <br/>

## 📖 Editor 2.0 Features

Deatils coming soon...
<br/>
<br/>

## 🚚 Deploy

All ready to go? Lets build our files and push your fancy new cover template to Github.

- **Build**

  1.  Open up your terminal.

  2.  Stop your local server by typing <kbd>control</kbd> + <kbd>C</kbd>

  3.  Build your site with the prefix flag

      ```shell
      gatsby build --prefix-paths
      ```

      💡 We prefix the paths here because our external assets (images, css, javascript) are hosted from a separate domain. This url can be updated via the `gatsby-config.js` file in top level of your directory. By default it is set to `https://interactive.allure.com`.
      <br/>
      <br/>

- **Github**

  This tutorial in under the assumption that you have a Github account and have been added to the [Condé Nast Org](https://github.com/CondeNast). You may also need addtional permissions in order to write to this directory. Just contact me if so...

  1.  Open up your terminal.

  2.  Add all your changes in the working directory

      ```shell
      git add .
      ```

  3.  Save your changes to the local repository with a message

      ```shell
      git commit -m"my first cover-template woo!"
      ```

  4.  Push your local change to Github

      ```shell
      git push
      ```

      💡 This repository has separate `master` and `production` branches. Any code merged into these branches will be deployed to an equivalent S3 bucket. A corresponding Jenkins job will poll GitHub for changes. The timing of the polling can be adjusted as needed. By default, all changes on `master` are deployed to `staging`. Production deploys require changes to be merged from `master` into the `production` branch.
      <br/>
      <br/>

- **Copilot**

  1.  Create an article.

  2.  In the Taxonomy section add the following categories

      -  `_override_header`

      -  `_no-amp`

  3.  Enter your Interactive Override URL (exmaple below)

      `https://interactive.allure.com/new-template-name/public/index.html`

<!-- AUTO-GENERATED-CONTENT:END -->
