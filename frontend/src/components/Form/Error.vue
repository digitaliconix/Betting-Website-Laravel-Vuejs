<template>
    <small class="text-danger" v-if="error">{{ error[0] }}</small>
</template>
<script type="text/javascript">
    export default {
        props: {
            error: {
                type: Array,
                default() {
                    return []
                }
            }
        }
    }
</script>
