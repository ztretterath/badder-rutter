<template>
    <div class="article">
        <div class='contentContainer'>
            <h1>{{ title }}</h1>
            <p v-if="isOpen">{{ body }}</p>
        </div>
        <div class='buttonContainer'>
            <div class='toggleButton' v-on:click="toggleView">
                <p class='toggleText'>{{isOpen ? 'close' : 'view'}}</p>
            </div>
            <div class='deleteButton' v-on:click="() => deletePost(id)">
                <p class='deleteText'>delete</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: function() {
            return { 
                isOpen: false,
                isEditing: false
            };
        },
        props: {
            id: Number,
            body: String,
            title: String,
        },
        methods: {
            toggleView: function(){
                this.isOpen = !this.isOpen
            },
            deletePost: function(id) {
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, { 
                  method: 'DELETE'
                })
                .then(({ ok }) => {
                    if(ok === true) {
                        // ensure UI is prepped for new list
                        this.isOpen = false

                        // to update list with removed item
                        this.$emit('deleted', id)
                    }
                })
            },
        }
    };
</script>

<style>
    .article { 
        width: 20%;
        margin: 15px;
        display: flex;
        cursor: pointer;
        position: relative;
        border-radius: 10px;
        box-shadow: 5px 10px #888888;
        flex-direction: column;
        background-color: white;
        border: 1px solid lightgray;
    }
    .article h1 {
        font-size: 20px;
    }
    .article p {
        font-size: 15px;
    }
    .contentContainer {
        padding: 20px 20px 80px 20px;
    }
    .toggleText {
        color: white;
        font-weight: bold;
    }
    .deleteText {
        color: white;
        font-weight: bold;
    }
    .editText {
        color: white;
        font-weight: bold;
    }
    .deleteButton {
        width: 25%;
        padding: 5px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        justify-content: center;
        border: 1px red solid;
        background-color: lightcoral;
    }
    .editButton {
        width: 25%;
        padding: 5px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        justify-content: center;
        border: 1px green solid;
        background-color: lightgreen;
    }
    .toggleButton {
        width: 25%;
        padding: 5px;
        display: flex;
        align-items: center;
        border-radius: 10px;
        justify-content: center;
        border: 1px blue solid;
        background-color: lightblue;
    }
    .buttonContainer {
        bottom: 0;
        width: 100%;
        display: flex;
        padding-top: 20px;
        position: absolute;
        align-items: center;
        padding-bottom: 20px;
        justify-content: space-around;
    }
</style>