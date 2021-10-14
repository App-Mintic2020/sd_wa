<template>
    <div>
        <p class="container flex">
            <!-- use router-link component for navigation. -->
            <!-- specify the link by passing the `to` prop. -->
            <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
            <router-link to="/"></router-link>
            <router-link to="/planilla"></router-link>
            <router-link to="/equipos"></router-link>
            </p>

			<router-view></router-view>
    </div>
    
</template>