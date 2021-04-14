<template>
  <!-- <q-card class="q-ma-md q-pa-md"> -->

  <div
    id="arborsonic"
    class="items-center"
  >
    <!-- style="margin-left:50px;" -->
    <!-- style="margin-top:900px" -->
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
        <table
          border="1px"
          style="width:250px;white-space:nowrap"
        >
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
              <div style="height:15px;">Tanggal</div>
            </td>
            <td>
              <div style="height:15px;">:</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="height:15px;">Nama Pohon</div>
            </td>
            <td>
              <div style="height:15px;">:</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="height:15px;">Nama Latin</div>
            </td>
            <td>
              <div style="height:15px;">:</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="height:15px;">Kondisi Pohon</div>
            </td>
            <td>
              <div style="height:15px;">:</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="height:15px;"> Daun</div>
            </td>
            <td>
              <div style="height:15px;">:</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="height:15px;">Akar</div>
            </td>
            <td>
              <div style="height:15px;">:</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="height:15px;">Kec.Angin</div>
            </td>
            <td>
              <div style="height:15px;">:</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="height:15px;">Lokasi</div>
            </td>
            <td>
              <div style="height:15px;">:</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="height:15px;">Zona</div>
            </td>
            <td>
              <div style="height:15px;">:</div>
            </td>
          </tr>
          <tr>
            <td>
              <div style="height:15px;">BatSegmenang</div>
            </td>
            <td>
              <div style="height:15px;">:</div>
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
      <p class="text-subtitle1">Gambar Horizontal dan Vertikal bagian dalam pohon</p>
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
          <th colspan="2">
            <div style="height:20px"> LAYER 3</div>
          </th>
        </tr>
        <tr style="width:100%;height:100px;text-align:center">
          <!-- class="items-center" -->
          <td colspan="3"> <img
              :src="data.imageLayer1"
              style="height:80%; width:80%;"
            /></td>
          <td colspan="3"><img
              :src="data.imageLayer2"
              style="height:80%; width:80%;"
            /></td>
          <td colspan="2"><img
              :src="data.hasil"
              style="height:80%; width:80%;"
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
          <td
            class="text-center"
            colspan="3"
          > <span
              class="text-bold"
              style="text-decoration:underline;"
            >
              Kesimpulan</span><br>
          </td>
        </tr>
        <tr>
          <td style="width:100px;">
            Diameter
          </td>
          <td style="width:10px;">:</td>
          <td style="width:100px;">&emsp;</td>
          <td style="width:100px;">
            Diameter
          </td>
          <td style="width:10px;">:</td>
          <td style="width:100px;">&emsp;</td>
          <td>
            Pohon tidak dapat diperiksa karena sudah ditebang
          </td>
        <tr>
          <td>
            Tinggi Batang
          </td>
          <td>:</td>
          <td>&emsp;</td>
          <td>
            Tinggi Batang
          </td>
          <td>:</td>
          <td>&emsp;</td>
        </tr>
        <tr>
          <td>
            Lingkaran Batang
          </td>
          <td>:</td>
          <td>&emsp;</td>
          <td>
            Lingkaran Batang
          </td>
          <td>:</td>
          <td>&emsp;</td>

        </tr>
        <tr class="bg-grey-3 text-bold">
          <td
            colspan="7"
            style="text-align:center"
          >KETERANGAN WARNA</td>
        </tr>
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
            colspan="8"
            class="text-bold bg-grey-3 text-center"
          >INSTRUKSI/ARAHAN</td>
        </tr>
        <tr style="height:80px"></tr>

      </table>
    </div>

    <div
      class="row"
      style="margin-left:50px;"
    >
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

  </div>
</template>

<script>
export default {
  props: ['data']

}
</script>

<style>
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