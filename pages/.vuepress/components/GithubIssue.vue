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
<script type="module">
  import { Octokit } from "https://cdn.skypack.dev/@octokit/rest";
</script>
<script>
const ISSUE_CREATE_TOKEN = ""; // only allowed to create issues

const octokit = new Octokit({ auth: ISSUE_CREATE_TOKEN });

// Create the issue
async function createIssue(title, body) {
  try {
    const response = await octokit.issues.create({
      owner,
      repo,
      title,
      body
    });
    console.log("Issue created successfully!");
    console.log("Issue Number:", response.data.number);
    console.log("Issue URL:", response.data.html_url);
  } catch (error) {
    console.error("Error creating the issue:", error);
  }
}

export default {
    name: 'GithubIssue',
    data () {
        return {
            form: { title: '', body: '' }
        }
    },
    methods: {
        submit () {
            let data = {
                owner: this.owner,
                repo: this.repo,
                title: this.form.name + '- ' + this.form.title,
                body: this.form.body
            }
            console.log('SUBMIT', data)
            if (data.title.length > 3 && data.body.length > 10) {
                createIssue(title, body)
            } else {
                alert('Please add a descriptive title and body!')
            }
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
