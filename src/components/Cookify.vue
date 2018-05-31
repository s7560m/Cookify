<template>
    <div id="super-container">
        <div id="paragraph-container" class="paragraph-container">
            <p class="title"> {{ title }} </p>
        </div>
        <div id="paragraph-container" class="paragraph-container">
            <p class="data"> {{ instruction }} </p>
        </div>
        <div id="time-container" class="time-container">
            <p class="time"> {{ time }} </p>
        </div>
        <div id="button-container">
            <button id="skip" @click="cookify">{{ buttontext }}</button>
        </div>
    </div>
</template>
<script>
import $ from 'jquery'
export default {
    name: 'Cookify',
    data () {
        return {
            title: 'Exampe title',
            data: 'Example instruction',
            instruction: '',
            timeArray: null,
            time: '5:00',
            iteration: 0,
            buttontext: 'Start'
        }
    },
    created: function() { // When router is loaded, this method is called
        const json = require('../assets/prompt.json')
        const cookifyAPI = require('../assets/CookifyAPI.js')

        // Get last index of json file
        var jsonGetIndex = json[json.length - 1];
        var timer = cookifyAPI.getTimer(jsonGetIndex.data);
        var cookifyData = cookifyAPI.cookifyString(jsonGetIndex.data);

        this.title = jsonGetIndex.title;
        this.data = cookifyData;
        this.timeArray = timer;
        this.instruction = 'Press start to continue';
        this.time = 'Press it!';
    },
    methods: {
        cookify: function() {
            this.instruction = this.data[this.iteration] + ' minutes';
            this.time = this.timeArray[this.iteration] + ' minutes remaining';
            this.buttontext = 'Skip this instruction';
            if (this.buttontext === 'Skip this instruction') {
                this.iteration++;
            }
        }
    }
}
</script>
<style>
    body {
        background-color:#A3F7B5;
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
    .time-container {
        background-color: gold;
        border-bottom-style: solid;
        border-bottom-color: darkgoldenrod;
        margin: auto;
        height: 50px;
        width: 50%;
        border-radius: 6px
    }
    .data {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 30px;
        
    }
    .time {
        font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
        font-size: 30px;
    }
</style>


