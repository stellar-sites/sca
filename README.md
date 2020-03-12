# Schrewsbury Christian Academy

# What is this?
This project folder contains the SCA online website in 2 forms.

### /pages
The `pages/` directory contains the raw source files for the website.

### /docs
The `docs/` directory contains the complete website compiled from the `pages/` directory.
This `docs/` directory contains the files that the hosting provider (Github Pages) will serve to visitors of the website.  Never make changes directly in `docs/`.

# How to make changes to SCA website?

1. Login to `console.cloud.google.com`
2. You will need to be granted access to the scaonline google cloud project (or create your own and clone the `github.com/taemon1337/sca.git` git repository).
3. Login to the Google `Cloud Shell` terminal.
4. Type `ls` to ensure you see the `scaonline` folder in the root of the project (if using your own, then do a `git clone github.com/taemon1337/sca.git scaonline` to clone the repository.
5. Type `cd scaonline` to change directory into scaonline
6. Type `cd pages` to change directory into the source code
7. Make any changes you want in the pages/ directory
8. To test changes (which you NEED to do before commiting), type 'vuepress dev' (if vuepress doesn't work, type `yarn global add vuepress` then `export PATH=$PATH:~/.yarn/bin` to download and use vuepress.
9. Once the `vuepress dev` command starts the test server, click the `Cloud Shell` Web Preview button in the top right to open a new Browser tab to access the updated test website.
10. Once the changes look good, you can `vuepress build` to build the new updated website which updates the `docs/` directory.
11. Once ready to commit all changes, navigate back into root of the git project with `cd ~/scaonline`
12. Type `git status` to view the current git project status (will show all files which have changed)
13. Type `git add -A` to add all changed files
14. Type `git commit -m 'updated the whatever for whatever reason'` to commit changes locally
15. WARNING - the following step will update the LIVE website, ensure your changes are correct before doing so.
16. Type `git push -u origin master` to push committed changes to github.



