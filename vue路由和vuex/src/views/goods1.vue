<template>
    <div>
        我是goods1
        <p>
            {{$route.params.id}}
        </p>
         <p>
            {{id}}
        </p>
    </div>
</template>

<script>
    export default {
        props:["id"]
    }
</script>

<style scoped>

</style>