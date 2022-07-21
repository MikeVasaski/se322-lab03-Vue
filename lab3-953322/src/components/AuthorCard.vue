<template>
    <div class="author-card">
        <p>category</p>
        <p>organizer</p>
    </div>
</template>

<script>
export default {
    name: 'Author',
    props: {
        acthor: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.author-card{
    padding: 20px;
    width: 250px;
    cursor: pointer;
    border: 1px solid #39495c;
    margin-bottom: 18px;
    text-align: right;
    font-size: 26;
    font-weight: bold;
}

.author-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>