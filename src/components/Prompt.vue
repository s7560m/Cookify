<template>
    <div id="super-container">
        <div id="paragraph-container">
            <p> Copy and paste the name of dish and recipe below and watch the magic happen </p>
        </div>
        <div id="input-container">
            <input id="title" v-model="title" placeholder="Name of dish">
        </div>
        <div id="input-container">
            <input id="data" v-model="data" placeholder="Recipe">
        </div>
        <div id="button-container" v-if="buttonContainer.visible">
            <router-link :to="{ path: '/cookify' }" id="generate">
                <button id="cookify" @click="cookify">Cookify</button>
            </router-link>
        </div>
    </div>
</template>
<script>
import App from '../App'
export default {
    name: 'Cookify',
    data () {
        return {
            title: '',
            data: '',
            buttonContainer: {
                visible: false
            }
        }
    },
    methods: {
        cookify: function() {
            const json = require('../assets/prompt.json');
            json.push({
                title: this.title,
                data: this.data
            })
        }
    },
    updated: function() {
        // Returns true if both 
        var inputHasText = this.data && this.title; 
        this.buttonContainer.visible = inputHasText;

    }
}
</script>
<style>
    p {
        font-size: 30px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: 800;
    }
    body {
        background-color:#A3F7B5;

    }
    #input-container {
        position: relative;
        top: 20px;
    }
    input {
        outline: none;
    }
    #button-container {
        position: relative;
        top: 50px;
    }
    button {
        margin: auto;
        height: auto;
        width: 200px;
        background: #1abc9c;
        border-bottom: #16a085 3px solid;
        border-radius: 6px;
        text-align: center;
        color: white;
        padding-top: 10px;
        padding-bottom: 2px;
        font-size: 30px;
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-weight: 800;
        outline:none;
    }

    button:hover {
        opacity: 1;
        background: #21EDC4;
        outline:none;
    }

    buttom:active {
        opacity: 0.7;
        background: #21EDC4;
        outline:none;
    }

</style>


