---
title: Issues
---

# Submit an Issue
If you found an error on the website, or something you think needs to be updated or changed, please submit an issue so our tech team can resolve it.

<ClientOnly>
    <github-issue :owner="$page.github.owner" :repo="$page.github.repo" :auth="$page.github.auth"></github-issue>
</ClientOnly>
