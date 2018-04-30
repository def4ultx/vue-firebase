<template>
  <div class="hello">
    <h4>{{ msg }} </h4>
    <div class="col-xs-2 col-sm-2 col-md-2 col-lg-2"/>
    <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
      <!-- display movie list -->
      <div class="panel panel-info">
        <div class="panel-heading">
          <h3 class="panel-title">List of Cities</h3>
        </div>
        <div class="panel-body">
          <div class="row display-flex">
            <div class="col-sm-6 col-md-4" v-for="(cities,key) in cityList" :key='key'>
              <div class="thumbnail">
                <img v-bind:src="`/static/img/${cities.image}`" width=60% height=60%/>
                <div class="caption">
                  <h3>{{ cities.name }}</h3>
                  <p>{{ cities.detail }}</p>
                  <router-link :to="{ path: 'weather/' + cities.name}" class="btn btn-sm btn-success " tag="button" type="button">
                    <span>Detail</span>
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid">
      <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12" />
          <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <button @click="logout" class="btn btn-default"><span class="glyphicon glyphicon-log-out"></span> Logout</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityList',
  data () {
    return {
      msg: 'EGCO 427 Practice',
      cityList: {},
      firebase: window.firebase
    }
  },
  created () {
    this.firebase.database().ref('citylist').on('value', (snapshot) => {
      this.cityList = snapshot.val()
      console.log(this.cityList)
    })
  },
  methods: {
    logout () {
      this.firebase.auth().signOut()
        .then(() => {
          this.$router.replace('/signin')
        })
        .catch((e) => {
          alert(e.message)
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.row.display-flex {
  display: flex;
  flex-wrap: wrap;
}
.thumbnail {
  height: 100%;
}
</style>
