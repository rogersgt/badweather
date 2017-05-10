<template>
    <section class="nav-menu">
    <!-- <el-menu v-if="active" default-active="1" class="el-menu-vertical-demo">
        <el-menu-item index="0"><i class="el-icon-d-arrow-left" v-on:click="toggleNav"></i></el-menu-item>
        <el-menu-item index="1">Home</el-menu-item>
        <el-menu-item index="1">Music</el-menu-item>
        <el-menu-item index="2">Shows</el-menu-item>
    </el-menu> -->
    <ul v-if="active">
        <li><i class="el-icon-d-arrow-left" v-on:click="toggleNav"></i></li>
        <li>Home</li>
        <li>Music</li>
        <li>Shows</li>
        <li>Contact</li>
    </ul>

    <i v-if="!active" class="el-icon-d-arrow-right arrow" v-on:click="toggleNav"></i>
    </section>
</template>

<script>
    export default {
        data: () => {
            return {
                active: false
            };
        },
        methods: {
            toggleNav: function() {
                this.active = !this.active;
            },
            handleOpen: function() {

            },
            close: function () {

            }
        }
    }
</script>