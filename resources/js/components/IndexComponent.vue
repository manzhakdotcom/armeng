<template>
  <div>
      <h1>Stations</h1>
        <table class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>Sign</th>
                <th>Interface</th>
                <th>Place</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="station in stations" :key="station.id">
                    <td>{{ station.id }}</td>
                    <td>{{ station.sign }}</td>
                    <td>{{ station.interface }}</td>
                    <td>{{ station.place }}</td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
    export default {
        data() {
            return {
                stations: [],
                tableShow: {
                    showdata: true,
                }
            }
        },
        methods: {
            getStations() {
                axios.get('/stations/', {params: this.tableShow})
                    .then(response => {
                        console.log('The data: ', response.data)
                        this.stations = response.data;
                    })
                    .catch(errors => {
                        console.log(errors);
                    });
            }

        },
        computed: {

        }
    };
</script>