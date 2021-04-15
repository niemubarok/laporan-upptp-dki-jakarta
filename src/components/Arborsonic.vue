<template>
  <q-card class="q-ma-md q-pa-md no-shadow">
    <h6
      class="text-center"
      style="text-decoration:underline;"
    >LAPORAN<br>
      PEMERIKSAAN POHON DENGAN ALAT ARBORSONIC 3D</h6>

    <div
      class="row"
      style="margin-left:50px;margin-top:-30px;"
    >
      <div class="col">
        <table border="1px">
          <!-- style="width:250px" -->
          <!-- style="margin-left:100px;" -->
          <tr class="text-center q-pa-md">
            <th style="width:130px;">Keseluruhan Pohon</th>
            <th
              class="text-center"
              style="width:130px;"
            >Batang Pohon</th>
          </tr>
          <tr>
            <td style="height: 130px;"></td>
            <td style="height:130px;"></td>
          </tr>
        </table>
      </div>
      <div class="col">
        <table style="margin-left:20px">
          <tr>
            <td>
              <div style="">Tanggal</div>
            </td>
            <td>
              <div style="">: {{surat.tglSurat}}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="width:90px;">Nama Pohon</div>
            </td>
            <td>
              <div style="height:20px;">: {{data.namaPohon}}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="">Nama Latin</div>
            </td>
            <td>
              <div style="">: {{data.namaLatin}}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="">Kondisi Pohon</div>
            </td>
            <td>
              <div style="">:</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style=""> Daun</div>
            </td>
            <td>
              <div style="">: {{data.daun}}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style=""> Batang</div>
            </td>
            <td>
              <div style="">: {{data.batang}}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="">Akar</div>
            </td>
            <td>
              <div style="">: {{data.batang}}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="">Kec.Angin</div>
            </td>
            <td>
              <div style="">: {{data.kecepatanAngin}}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="">Lokasi</div>
            </td>
            <td>
              <div style="text-overflow:ellipsis; overflow: hidden;">: {{surat.alamatPohon}}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="">Zona</div>
            </td>
            <td>
              <div style="">:{{data.zona}}</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="">Segmen</div>
            </td>
            <td>
              <div style="">:{{data.segmen}}</div>
            </td>
          </tr>
        </table>
      </div>
      <div class="col">
        <table
          border="1px"
          style="width:150px;margin-left:50px;"
        >
          <tr>
            <th class="text-center">Peta</th>
          </tr>
          <tr>
            <td style="height:120px;">gambar 1</td>
          </tr>
        </table>
      </div>
    </div>

    <div
      style="margin-left:50px;"
      class="row q-ma-md"
    >
      <p class="text-subtitle1">Gambar Horizontal dan Vertikal bagian dalam pohon </p>
      <table
        border="1px"
        style="width:95%;margin-top:-20px;"
      >
        <tr class="bg-grey-3">
          <th colspan="3">
            <div style="height:20px"> LAYER 1</div>
          </th>
          <th colspan="3">
            <div style="height:20px"> LAYER 2</div>
          </th>
          <th style="width:250px;">
            <div style="height:20px"> LAYER 3</div>
          </th>
        </tr>
        <tr style="height:100px;text-align:center">
          <!-- class="items-center" -->
          <!-- id="image" -->
          <td
            colspan="3"
            id="image"
          >
            <!-- {{image(data.imageLayer1[0])}} -->
            <img
              style="max-height:120px; width:50%;"
              :src="data.imageLayer1"
            />
            <!-- v-if="data.imageLayer1" -->
            <!-- <div
              style="max-height:120px; width:50%;"
            >

            </div> -->
            <!-- {{image(data.imageLayer1[0])}} -->
          </td>
          <td colspan="3"><img
              :src="data.imageLayer2"
              style="max-height:120px; width:50%;"
            /></td>
          <td><img
              :src="data.hasil"
              style="max-height:120px; width:50%;"
            /></td>
        </tr>
        <tr
          class="bg-grey-3 text-bold"
          style="text-decoration:underline"
        >
          <td
            colspan="3"
            class="text-center"
          >
            Literatur Pemeriksaan<br>

          </td>
          <td
            colspan="3"
            class="text-center"
          > Literatur Pemeriksaan</td>
          <td class="text-center"> <span
              class="text-bold"
              style="text-decoration:underline;width:250px"
            >
              Kesimpulan</span><br>
          </td>
        </tr>
        <tr>
          <td style="width:100px;">
            Diameter
          </td>
          <td style="width:10px;">:</td>
          <td style="width:100px;">{{data.diameterLayer1}}</td>
          <td style="width:100px;">
            Diameter
          </td>
          <td style="width:10px;">:</td>
          <td style="width:100px;">{{data.diameterLayer2}}</td>
          <td rowspan="3">
            {{data.kesimpulan}}
          </td>
        </tr>
        <tr>
          <td>
            Tinggi Batang
          </td>
          <td>:</td>
          <td>{{data.tinggiBatangLayer1}}</td>
          <td>
            Tinggi Batang
          </td>
          <td>:</td>
          <td>{{data.tinggiBatangLayer2}}</td>
        </tr>
        <tr>
          <td>
            Lingkaran Batang
          </td>
          <td>:</td>
          <td>{{data.lingkaranBatangLayer1}}</td>
          <td>
            Lingkaran Batang
          </td>
          <td>:</td>
          <td>{{data.lingkaranBatangLayer2}}</td>

        </tr>
        <tr class="bg-grey-3 text-bold">
          <td
            colspan="7"
            style="text-align:center"
          >KETERANGAN WARNA</td>
        </tr>
        <tr>
          <!-- <div style="height:11px;"></div> -->
          <td>Warna Biru</td>
          <td style="width:10px;">:</td>
          <td colspan="5">Menunjukkan bagian pohon bolong (Tidak memiliki massa kayu)</td>
        </tr>
        <tr>
          <td>Warna Merah</td>
          <td style="width:10px;">:</td>
          <td colspan="5">Menunjukkan bagian pohon lapuk</td>
        </tr>
        <tr>
          <td>Warna Kuning</td>
          <td style="width:10px;">:</td>
          <td colspan="5">Menunjukkan bagian pohon dalam proses pelapukan</td>
        </tr>
        <tr>
          <td>Warna Hijau</td>
          <td style="width:10px;">:</td>
          <td colspan="5">Menunjukkan bagian pohon padat (Massa kayu padat)</td>
        </tr>
        <tr>
          <td
            colspan="7"
            class="text-bold bg-grey-3 text-center"
          >INSTRUKSI/ARAHAN</td>
        </tr>
        <tr style="height:80px"> {{data.arahan}}</tr>

      </table>
    </div>

    <div
      class="row"
      style="margin-left:50px;"
    >
      <!-- {{image(data.imageLayer1[0])}} -->
      <div class="col"> Tim Pemeriksa <br>
        1. Heru Mahendra, S.P <br>
        2. Murtanih <br>
        3. Nurul Alfiqih <br>
        4. Saiful Hadi, S.E</div>
      <div class="col text-center q-mr-md">Kepala Satuan Pelaksana <br>
        Pelayanan Unit Pengelola <br>
        Pengembangan Tanaman Perkotaan
        <br><br><br><br>
        <span style="text-decoration:underline"> Sulistiowati, S.P,M.Si </span><br>
        NIP. 196504271985032003
      </div>
      <div class="col  text-center q-mr-md">Pengawas Lapangan<br>
        Wilayah Jakarta Selatan
        <br><br><br><br><br>
        <span style="text-decoration:underline"> Hariyanto Senolinggi</span><br>
        NIP. 197208282007011023
      </div>
    </div>

  </q-card>

  <div style="page-break-after:always"></div>
</template>

<script>
import { ref } from 'vue'
export default {

  props: ['data', 'surat'],
  setup (props) {

    const image = (url) => {
      let imageId = document.getElementById("image")
      if (imageId) {
        // let ctx = imageId[0].getContext("2d")
        let img = document.createElement('img')
        img.src = url
        // let getImg = document.get
        // imageId.drawImage(img, 10, 10)
      }
      // img.download = "public/img/image.png"
      // let canvas = document.cre
      // console.log(img);
      // console.log(document.getElementById("image"));
      // if (imageId) {
      //   let blob = new Blob([img])
      //   console.log(blob);
      //   // imageId.appendChild(blob).style.width = '100px'
      //   // imageId.style.width = '100px'

      // }

    }




    const base64Encode = (url) => {
      const encodedurl = window.btoa(url)
      return encodedurl
    }


    return {
      image,
      base64Encode
    }
  }

}
</script>

<style scoped>
@media print {
  body {
    transform: scale(0.7);
  }
  table {
    page-break-inside: avoid;
  }
  th,
  td {
    width: 10%;
    padding: 0 1mm 0 1mm;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    /* border: 1px solid black; */
  }
  th:first-child {
    width: 10%;
  }
}

table {
  /* width: 85%; */
  /* border: 1px solid black; */
  border-collapse: collapse;
}

th {
  text-align: center;
  vertical-align: middle;
}

td,
th {
  padding-left: 5px;
  padding-right: 5px;
}
</style>