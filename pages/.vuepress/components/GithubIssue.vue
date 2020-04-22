<template>
    <form class="form" @submit.prevent="submit" method="POST">
        <label for="fname">Your name:</label><br>
        <input v-model="form.name" type="text" id="name" name="name"><br>
        <label for="title">Issue title:</label><br>
        <input v-model="form.title" type="text" id="title" name="title"><br>
        <label for="body">Details</label><br>
        <textarea v-model="form.body" id="body" name="body" rows="8"></textarea>
        <button type="submit">Submit</button>
    </form>
</template>
<script>
import { Octokit } from '@octokit/rest'
import { createAppAuth } from '@octokit/auth-app'

export default {
    name: 'GithubIssue',
    data () {
        return {
            form: { title: '', body: '' }
        }
    },
    methods: {
        submit () {
            let api = new Octokit({
                authStrategy: createAppAuth,
                auth: this.auth,
                userAgent: 'scaonline',
                // baseUrl: 'https://api.github.com',
                log: {
                    debug: console.log,
                    info: console.log,
                    warn: console.warn,
                    error: console.error
                }
            })
            let data = {
                owner: this.owner,
                repo: this.repo,
                title: this.form.name + '- ' + this.form.title,
                body: this.form.body
            }
            console.log('SUBMIT', data)
            window.resp = api.issues.create(data)
        }
    },
    props: {
        owner: {
            type: String,
            required: true
        },
        repo: {
            type: String,
            required: true
        },
        auth: {
            type: Object,
            required: false
        }
    }
}
</script>
<style type="css">
.form input,textarea {
    width: 100%;
}
textarea {
    resize: none;
}
</style>
