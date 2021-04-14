import { reactive, ref } from "vue";

const linksData = [
  {
    title: "Dashboard",
    caption: "",
    icon: "home",
    link: "/",
  },
  {
    title: "Daftar Surat",
    caption: "",
    icon: "list",
    link: "/surat",
  },
  {
    title: "Daftar Pohon",
    caption: "",
    icon: "nature",
    link: "/surat",
  },
];

const state = reactive({
  seamless: ref(false),
  miniState: true,
  step: 1,
  leftDrawerOpen: false,
  essentialLinks: linksData,
  drawer: false,
  miniState: false,
  tambahText: "",
  text: "",
  autofocus: false,

  localDate: {
    /* starting with Sunday */
    days: "Minggu_Senin_Selasa_Rabu_Kamis_Jum'at_Sabtu".split("_"),
    daysShort: "Minggu_Senin_Selasa_Rabu_Kamis_Jum'at_Sabtu".split("_"),
    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
      "_"
    ),
    monthsShort: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
      "_"
    ),
    firstDayOfWeek: 1,
  },
});

export default { state };
