[![Website](https://scaonline.org/websiteup.svg)](https://scaonline.org)
[![release](https://img.shields.io/github/v/release/stellar-sites/sca)](https://github.com/stellar-sites/sca/releases)
[![Build Status](https://github.com/stellar-sites/sca/actions/workflows/deploy.yml/badge.svg)](https://github.com/stellar-sites/sca/actions)
[![uptime](https://img.shields.io/uptimerobot/ratio/7/m784548662-44944a89604e8ad0d9a49527)](https://uptimerobot.com/dashboard.php#784548662)
[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/stellar-sites/sca)

# Shrewsbury Christian Academy

# What is this?
This project contains the scaonline.org website and is all that's needed to modify it.

# How this website is created and modified?
This website is built using the following steps in a cycle:
1. Create, Modify, or delete website content (GitPod)
2. View changes in a live demo of the website (GitPod)
3. Save and commit changes to Github (GitPod)
4. [AUTO] Build the updated website with those changes (Github Action)
5. [AUTO] Deploy the updated website to hosting provider (Github Pages)
6. Go back to step 1

# Technology used
This project uses the following technologies/services:

## NodeJS
[NodeJS](https://nodejs.org/) is a Javascript programming language meant for both server-side code as well as delivering client-side browser code.

## VueJS
[VueJS](https://vuejs.org/) is a javascript framework written in NodeJS for developing web applications.  It is one of the most popular modern web frameworks out there and competes against ReactJS by Facebook and AngularJS by Google.

## Vuepress
[Vuepress](https://vuepress.vuejs.org/) is a VueJS powered Static Site Generator (SSG) for generating web content (HTLM/JS/CSS).

## Git
[git](https://git-scm.com/) is a version control system of files and folders that are stored in 'repositories' and allow modifications and 'commiting' changes.

## Github.com
[Github](https://github.com) is a public git repository server which allows developers to store their code in git format online.

## Gitpod.io
[Gitpod](https://www.gitpod.io/) is a cloud service for editing a git repository through a browser web IDE.

## Github Actions
[Github Actions](https://github.com/features/actions/) is a Github based job runner which can be used to automate all sorts of tasks, specifically like building and deploying a website from source code.  In this case, we first build the static web pages then deploy them to Github Pages, the job is defined [here](https://github.com/stellar-sites/sca/blob/main/.github/workflows/deploy.yml).  This was previously handled by Travic CI unless it required a monthly payment plan whereas Github Actions provides a limited free tier.

## Github Pages
[Github Pages](https://pages.github.com/) is a free web hosting provider for Github repositories.  It can only serve static files to the internet and works nicely with the Vuepress static site generator.

## Markdown Language
[Markdown](https://en.wikipedia.org/wiki/Markdown) is a simple wikipedia style text format designed for web content.  Vuepress uses a mix of Markdown and VueJS (HTML/CSS/JS) for its websites.

# How to make changes to SCA website?
Click on the [![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/stellar-sites/sca) link to open a Gitpod IDE

## Gitpod IDE
The gitpod website that starts up should look like the following image:

![Gitpod Example](/images/gitpod.png?raw=true "Gitpod Example")

In the terminal window at the bottom of the gitpod IDE, do the following:
```bash
    yarn docs:dev  # start the development web server
```

* A new browser tab should pop open (if not, click the "Open Ports" tab then click "Open Browser").
* The new tab should now contain a rendering of the code in your gitpod, you can freely edit the files within your gitpod and see the live results in the website preview.
* Once all changes have been made and tested, merge the changes to the git repository (or submit a merge request if you do not have permission).
* Use the git link on the narrow toolbar on the right edge of the gitpod IDE to perform git actions like merge requests.
* Once your changes have been merged to the master branch (either directly or approved), a Github Action workflow will build and deploy to Github Pages the new website.
* The links at the top of this README will show the status of the build

For example, here is how you manually
```
git status
git add .
git commit -m 'changed year to 2024-25'
git push -u origin main
```

Once pushed successfully and assuming you have permission, the [github actions page](https://github.com/stellar-sites/sca/actions) will show the status of the build. If successful, the website will be updated automatically.



