[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/taemon1337/sca/tree/taemon1337/gitpod-setup)

# Schrewsbury Christian Academy

# What is this?
This project folder contains the SCA online website in 2 forms.

### /pages
The `pages/` directory contains the raw source files for the website.

### /docs
The `docs/` directory contains the complete website compiled from the `pages/` directory.
This `docs/` directory contains the files that the hosting provider (Github Pages) will serve to visitors of the website.  Never make changes directly in `docs/`.

# Concepts

## Github
Github.com is a website which stores git repositories online.  You can even edit them online directly if you have permission.

## Git Repository
A git repository is a bunch of files and folders which are version controlled using the 'git' protocol.  Version controlling means you keep track of all changes to all files and once ready, you can 'commit' them.  
All changes are stored locally if you download them and then need to be 'pushed' to a central repository server (like Github.com).

## Github Pages
Github pages is a free way to host static HTLM/CSS/JS files onto the internet, it will use a Git Repository (or a branch of it named 'gh-pages') as the files it will serve onto the internet.

## Travis CI
Travis CI is a continious integration service which will automatically build/compile your source code files into your output files and can be triggered to run automatically after you 'commit' changes to a github repository.

## NodeJS
NodeJS is a computer programming language that runs Javascript, it can run Javascript on a server or in a browser like Google Chrome, Firefox, or Internet Explorer.  NodeJS uses either `npm` or `yarn` to install NodeJS software packages.

## VueJS
VueJS is a NodeJS Javascript web framework for building dynamic, modern web applications.  It is one of the newest, best, and most popular open source web frameworks in the world.  It is comparable to ReactJS (by Facebook), AngularJS (by Google) and many many others.

## Markdown
Markdown is a simple to edit text based language designed for ease to read, easy to write, it is very similar to how Wikipedia creates/edits its website content.

## Vuepress
Vuepress is a static site generator like SEO friendly website builder that uses VueJS in combination with a simple to edit Markdown language.

## SCA Website
The Shrewsbury Christian Academy website is written using Vuepress and compiled automatically with Travis CI and served via Github Pages.


# How to make changes to SCA website?
Here are instructions for how to edit the website using 3 different methods or computer systems, linux, windows, or the cloud.

## Edit using Linux

1. First, install the software you will need
```bash
  apt-get install -y git nodejs npm yarn
```

2. Install vuepress with npm or yarn
```bash
  yarn global add vuepress # OR npm install -g vuepress
```

4. Next, clone the git repository for sca
```bash
  git clone github.com/taemon1337/sca.git
```

4. Change directory into sca/pages/ folder
```bash
  cd sca/pages/
```

5. Edit the content files with the changes you want, try to following the formatting of other files to ensure consistency

6. Preview changes locally using vuepress dev server
```bash
  vuepress dev
```

7. Open local browser and navigate to 'http://localhost:8080' and view changes and ensure correctness

8. Once all changes are done and correct, add and commit changes to git repository.
```bash
  git add -A  # or just the files that are ready
  git commit -m 'change the site logo and home page text'  # make you commit message meaningful
```

9. If you are SURE you're changes are ready to go live, push the commit to master branch
```bash
  git push -u origin master
```

10. Travis CI will automatically detect the push to the master branch and build the updated website and push to the github-pages branch to be automatically served by Github Pages.


# Edit using Windows
TBD






