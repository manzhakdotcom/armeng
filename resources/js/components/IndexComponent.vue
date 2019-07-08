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
          stations: []
        }
      },
      created() {
      let uri = '/api/stations';
      this.axios.get(uri).then(response => {
        this.stations = response.data.data;
        console.log(this.stations);
      });
    }
  }
</script>