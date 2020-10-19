<template>
    <div class="article">
        <div class='newPostContainer'>
            <input v-model="title" placeholder="New Post Title">
            <textarea v-model="body" placeholder="New Post Body"></textarea>
        </div>
        <div class='newPostButtonContainer'>
            <div class='saveButton' v-on:click="createPost">
                <p class='editText'>save</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return { 
                body: '',
                title: ''
            };
        },
        methods: {
        createPost() {
            let newPostBody = {
                userId: 1,
                body: this.body,
                title: this.title
            }
            fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(newPostBody),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => {
                // update list with latest post
                this.$emit('created', json)

                // reset form for another post
                this.body = ''
                this.title = ''
            })
        },
        }
    }
</script>

<style>
    .newPostContainer {
        padding: 20px;
        height: 200px;
    }
    .newPostContainer input {
        width: 100%;
        padding: 5px;
        margin-bottom: 10px; 
    }
    .newPostContainer textarea {
        width: 100%;
        padding: 5px;
    }
    .saveButton {
        width: 25%;
        padding: 5px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        justify-content: center;
        border: 1px green solid;
        background-color: lightgreen;
    }
    .newPostButtonContainer {
        width: 100%;
        right: 20px;
        bottom: 20px;
        display: flex;
        position: absolute;
        justify-content: flex-end;
    }
</style>