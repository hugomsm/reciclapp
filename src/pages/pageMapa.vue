<template>
  <q-page padding>
    <br>
    <br>
    <br>
    <br>
    <div class="text-center">
      <div class="text-subtitle1">
        Todos os Ecopontos funcionam de
        <b>segunda a sábado, das 6h às 22h</b>, e aos
        <b>domingos e feriados, das 6h às 18h.</b>
      </div>
      <GmapMap
        :center="{lat:-23.533773, lng:-46.625290}"
        :zoom="10"
        style="max-width: 100%; height:calc(80vh - 100px)"
      >
        <gmap-info-window
          :options="infoOptions"
          :position="infoWindowPos"
          :opened="infoWinOpen"
          @closeclick="infoWinOpen=false"
        >
          <pre>{{infoContent}}</pre>
        </gmap-info-window>

        <gmap-marker
          :key="i"
          v-for="(m,i) in markers"
          :position="m.position"
          :clickable="true"
          @click="toggleInfoWindow(m,i)"
        ></gmap-marker>
      </GmapMap>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      infoContent: "",
      infoWindowPos: null,
      infoWinOpen: false,
      currentMidx: null,
      //optional: offset infowindow so it visually sits nicely on top of our marker
      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      markers: [
        {
          position: {
            lat: -23.592987,
            lng: -46.635108
          },
          infoText: "Vila Mariana\nRua Maurício Francisco Klabin, 148"
        },
        {
          position: {
            lat: -23.622368,
            lng: -46.725042
          },
          infoText: "Morumbi\nRua Irapará, 73"
        },
        {
          position: {
            lat: -23.547384,
            lng: -46.602693
          },
          infoText: "Mooca\nAvenida Pires do Rio, 600"
        },
        {
          position: {
            lat: -23.529903,
            lng: -46.583024
          },
          infoText: "Tatuapé\nAv. Salim farah Maluf, 179"
        },
        {
          position: {
            lat: -23.531279,
            lng: -46.525454
          },
          infoText: "Penha\nRua Doutor Heládio, 104"
        },
        {
          position: {
            lat: -23.554406,
            lng: -46.610801
          },
          infoText: "Brás\nRua Palmorino Mônaco, s/n"
        },
        {
          position: {
            lat: -23.599642,
            lng: -46.62317
          },
          infoText: "Santa Cruz\nRua Santa Cruz, 1452"
        },
        {
          position: {
            lat: -23.653195,
            lng: -43.649452
          },
          infoText: "Jabaquara\nRua Jupatis, 140"
        },
        {
          position: {
            lat: -23.556481,
            lng: -46.637033
          },
          infoText: "Liberdade\nRua Jaceguai, 67"
        },
        {
          position: {
            lat: -23.558367,
            lng: -46.687492
          },
          infoText: "Vila Madalena\nRua Girassol, 15 "
        },
        {
          position: {
            lat: -23.520758,
            lng: -46.463567
          },
          infoText: "Itaquera\nRua Manoel Alves da Rocha, 584"
        },
        {
          position: {
            lat: -23.503665,
            lng: -46.52751
          },
          infoText: "Cangaíba\nRua Hugo Wolf, 300"
        },
        {
          position: {
            lat: -23.549126,
            lng: -46.483286
          },
          infoText: "Artur Alvim\nRua Padre Estanislau de Campos, 46"
        },
        {
          position: {
            lat: -23.454958,
            lng: -46.659399
          },
          infoText: "Jardim Antartica\nRua Dom Aquino, 292"
        }
      ]
    };
  },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = marker.infoText;
      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    }
  }
};
</script>