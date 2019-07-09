<template>
    <div class='row'>
        <ul class="list-group">
            <li v-if='list.length === 0'>There are no tasks yet!</li>
            <li class="list-group-item" v-for="task in list">
                #{{ task.id }} - {{ task.sign }}
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        data: function() {
            return {
                list: [],
                data: {
                    id: '',
                    sign: '',
                }
            };
        },

        created() {
            this.fetchTaskList();
        },

        methods: {
            fetchTaskList() {
                axios.get('http://127.0.0.1:8000/api/stations').then((res) => {
                    this.list = res.data;
                    console.log(this.list);
                });
            },

        }
    }
</script>