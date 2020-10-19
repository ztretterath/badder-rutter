<template>
  <div id="app">
    <h1>{{ pageTitle }}</h1>
    <div class="postContainer">
      <NewPost @created="addPostToList" />
      <Post v-for="(item, index) in posts" :key="index" v-bind="item" @deleted="removePostFromList" />
    </div>
  </div>
</template>

<script>
  const fetch = require("node-fetch");
  import Post from "./components/Post";
  import NewPost from "./components/NewPost";
  export default {
    name: "App",
    components: { Post, NewPost },
    data: function() {
      return { 
        posts: [],
        pageTitle: 'Blog Posts'
      };
    },
    methods: {
      getPosts() {
        fetch('https://jsonplaceholder.typicode.com/posts', { 
          method: 'GET' 
        })
        .then(response => response.json())
        .then(json => {this.posts = json})
      },
      removePostFromList(id){
        this.posts = this.posts.filter(post => {
          return post.id != id
        })
      },
      addPostToList(newPost){
        this.posts.unshift(newPost)
      }
    },
    mounted() {
      this.getPosts();
    }
  };
</script>

<style>
  #app { 
    padding: 20px 40px;
    background-color: lightgray;
  }
  .postContainer {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

  }
  p {
    margin: 0 !important;
  }
</style>