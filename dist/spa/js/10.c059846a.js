(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"6e73":function(e,a,t){"use strict";t.r(a);var l=t("7a23");function n(e,a,t,n,o,r){const c=Object(l["J"])("input-laporan-baru"),s=Object(l["J"])("q-page");return Object(l["B"])(),Object(l["h"])(s,{padding:""},{default:Object(l["Q"])((()=>[Object(l["l"])(c)])),_:1})}const o={class:"row"},r={class:"col-4"},c=Object(l["k"])(" Tanggal Surat / Pemeriksaan Pohon "),s={class:"row items-center justify-end"},u={class:"col q-ml-md"},b=Object(l["k"])(" Tanggal Terima Surat "),i={class:"row items-center justify-end"},d={class:"col-4 q-ml-md"},m={class:"column"},p={class:"col self-end text-secondary"};function j(e,a,t,n,j,O){const _=Object(l["J"])("q-icon"),g=Object(l["J"])("q-input"),S=Object(l["J"])("q-btn"),h=Object(l["J"])("q-date"),f=Object(l["J"])("q-popup-proxy"),k=Object(l["J"])("q-step"),y=Object(l["J"])("step-2"),Q=Object(l["J"])("step-3"),P=Object(l["J"])("q-stepper-navigation"),V=Object(l["J"])("q-stepper"),w=Object(l["J"])("q-form"),v=Object(l["K"])("close-popup");return Object(l["B"])(),Object(l["h"])(w,{onSubmit:n.onSubmit,class:"q-gutter-md"},{default:Object(l["Q"])((()=>[Object(l["l"])("h2",null,Object(l["N"])(n.surat.noSurat),1),Object(l["l"])(V,{modelValue:n.step,"onUpdate:modelValue":a[12]||(a[12]=e=>n.step=e),ref:"stepper",color:"secondary",animated:"","done-color":"green-10","keep-alive":""},{navigation:Object(l["Q"])((()=>[Object(l["l"])(P,null,{default:Object(l["Q"])((()=>[Object(l["l"])("div",m,[Object(l["l"])("div",p,[Object(l["l"])(S,{onClick:a[10]||(a[10]=a=>[e.$refs.stepper.next()]),color:"primary","text-color":"secondary",label:3===n.step?"Selesai":"Selanjutnya"},{default:Object(l["Q"])((()=>[3!==n.step?(Object(l["B"])(),Object(l["h"])(_,{key:0,name:"navigate_next"})):Object(l["i"])("",!0)])),_:1},8,["label"]),n.step>1?(Object(l["B"])(),Object(l["h"])(S,{key:0,flat:"",color:"primary",onClick:a[11]||(a[11]=a=>e.$refs.stepper.previous()),label:"Kembali",class:"q-ml-sm"})):Object(l["i"])("",!0)])])])),_:1})])),default:Object(l["Q"])((()=>[Object(l["l"])(k,{name:1,title:"Detail Surat",caption:"Lengkapi detail surat berikut",icon:"assignment",done:n.step>1},{default:Object(l["Q"])((()=>[Object(l["l"])("div",o,[Object(l["l"])("div",r,[Object(l["l"])(g,{clearable:"",standout:"bg-blue-10 text-yellow-14",modelValue:n.surat.noSurat,"onUpdate:modelValue":a[1]||(a[1]=e=>n.surat.noSurat=e),label:"Nomor Surat",dense:"",class:"q-mt-sm",autofocus:""},{prepend:Object(l["Q"])((()=>[Object(l["l"])(_,{name:"tag"})])),_:1},8,["modelValue"]),Object(l["l"])(g,{standout:"bg-blue-10 text-yellow-14",modelValue:n.surat.tglSurat,"onUpdate:modelValue":a[3]||(a[3]=e=>n.surat.tglSurat=e),"shadow-text":""==n.surat.tglSurat?"< Klik ikon kalender untuk pilih tanggal":"","label-slot":"",clearable:"",class:"q-mt-sm cursor-pointer"},{label:Object(l["Q"])((()=>[c])),prepend:Object(l["Q"])((()=>[Object(l["l"])(_,{name:"event",class:"cursor-pointer"},{default:Object(l["Q"])((()=>[Object(l["l"])(f,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:Object(l["Q"])((()=>[Object(l["l"])(h,{modelValue:n.surat.tglSurat,"onUpdate:modelValue":a[2]||(a[2]=e=>n.surat.tglSurat=e),locale:n.localDate,mask:"DD MMMM YYYY"},{default:Object(l["Q"])((()=>[Object(l["l"])("div",s,[Object(l["R"])(Object(l["l"])(S,{label:"Close",color:"primary",flat:""},null,512),[[v]])])])),_:1},8,["modelValue","locale"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","shadow-text"]),Object(l["l"])(g,{clearable:"",standout:"bg-blue-10 text-yellow-14",modelValue:n.surat.kelurahan,"onUpdate:modelValue":a[4]||(a[4]=e=>n.surat.kelurahan=e),label:"Kelurahan PMPTSP",dense:"",class:"q-mt-sm"},{prepend:Object(l["Q"])((()=>[Object(l["l"])(_,{name:"home_work"})])),_:1},8,["modelValue"])]),Object(l["l"])("div",u,[Object(l["l"])(g,{clearable:"",standout:"bg-blue-10 text-yellow-14",modelValue:n.surat.noSPIPP,"onUpdate:modelValue":a[5]||(a[5]=e=>n.surat.noSPIPP=e),label:"No. Surat  Permohonan Izin Penebangan Pohon",dense:"",class:"q-mt-sm"},{prepend:Object(l["Q"])((()=>[Object(l["l"])(_,{name:"tag"})])),_:1},8,["modelValue"]),Object(l["l"])(g,{standout:"bg-blue-10 text-yellow-14",modelValue:n.surat.tanggalTerimaSurat,"onUpdate:modelValue":a[7]||(a[7]=e=>n.surat.tanggalTerimaSurat=e),"shadow-text":""==n.surat.tanggalTerimaSurat?"< Klik ikon kalender untuk pilih tanggal":"","label-slot":"",clearable:"",class:"q-mt-sm"},{label:Object(l["Q"])((()=>[b])),prepend:Object(l["Q"])((()=>[Object(l["l"])(_,{name:"event",class:"cursor-pointer"},{default:Object(l["Q"])((()=>[Object(l["l"])(f,{ref:"qDateProxy","transition-show":"scale","transition-hide":"scale"},{default:Object(l["Q"])((()=>[Object(l["l"])(h,{modelValue:n.surat.tanggalTerimaSurat,"onUpdate:modelValue":a[6]||(a[6]=e=>n.surat.tanggalTerimaSurat=e),locale:n.localDate,mask:"DD MMMM YYYY"},{default:Object(l["Q"])((()=>[Object(l["l"])("div",i,[Object(l["R"])(Object(l["l"])(S,{label:"Close",color:"primary",flat:""},null,512),[[v]])])])),_:1},8,["modelValue","locale"])])),_:1},512)])),_:1})])),_:1},8,["modelValue","shadow-text"]),Object(l["l"])(g,{clearable:"",standout:"bg-blue-10 text-yellow-14",modelValue:n.surat.namaKaUnit,"onUpdate:modelValue":a[8]||(a[8]=e=>n.surat.namaKaUnit=e),label:"Nama Ka Unit",dense:"",class:"q-mt-sm"},{prepend:Object(l["Q"])((()=>[Object(l["l"])(_,{name:"account_box"})])),_:1},8,["modelValue"])]),Object(l["l"])("div",d,[Object(l["l"])(g,{clearable:"",filled:"",modelValue:n.surat.alamatPohon,"onUpdate:modelValue":a[9]||(a[9]=e=>n.surat.alamatPohon=e),label:"Alamat Pemohon / Lokasi Pohon",dense:"",class:"q-mt-sm",type:"textarea"},{prepend:Object(l["Q"])((()=>[Object(l["l"])(_,{name:"place"})])),_:1},8,["modelValue"])])])])),_:1},8,["done"]),Object(l["l"])(k,{name:2,title:"Detail Lampiran",caption:"Masukan detail laporan",icon:"create_new_folder",done:n.step>2},{default:Object(l["Q"])((()=>[Object(l["l"])(y)])),_:1},8,["done"]),Object(l["l"])(k,{name:3,title:"Finish",caption:"Download Laporan",icon:"download"},{default:Object(l["Q"])((()=>[Object(l["l"])(Q)])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["onSubmit"])}var O=t("ded3"),_=t.n(O),g=(t("e6cf"),t("b3fe")),S=t("1431"),h=t("dc59"),f=t("7e43"),k=t("5ed0"),y={components:{Step2:f["a"],Step3:k["a"]},setup(){const e=Object(g["a"])(),a=(Object(l["G"])(),Object(l["F"])({namaPohon:"",namaLatin:"",daun:"",batang:"",akar:"",kecepatanAngin:"",lokasi:"",zona:"",segmen:"",layer1:"",layer2:"",hasil:"",imagelayer1:""})),t=Object(l["F"])({surat_id:0,noSurat:"",tglSurat:"",kelurahan:"",noSPIPP:"",namaKaUnit:"",alamatPohon:"",tanggalTerimaSurat:"",jumlahLampiran:"",laporan:[{namaPohon:"",namaLatin:"",daun:"",batang:"",akar:"",kecepatanAngin:"",lokasi:"",zona:"",segmen:"",layer1:"",layer2:"",hasil:"",imagelayer1:""}]}),n=Object(l["G"])([]),o=async()=>{n.value.push(_()({},a)),t.laporan.push(_()({},a)),console.log(t.laporan)},r=()=>{const e=h["a"].collection("surat").doc("count").onSnapshot((e=>{const a={surat_id:e.data().surat_id+1};t.surat_id=a.surat_id}));return e},c=async()=>{try{await Object(S["a"])(_()({},t)),h["a"].collection("surat").doc("count").update({surat_id:t.surat_id}).then((()=>{console.log("sukses")})).catch((e=>{console.log(e)})),e.notify("berhasil disimpan")}catch(a){console.log(a)}},s=async()=>{try{await Object(S["a"])(_()({},t)),t.id="",t.surat_id="",t.noSurat="",t.tglSurat="",t.kelurahan="",t.noSPIPP="",t.namaKaUnit="",t.alamatPohon="",t.tanggalTerimaSurat="",t.jumlahLampiran=""}catch(e){console.log(e)}};return Object(l["z"])((()=>{r()})),{lampiran:n,laporan:a,tambahLampiran:o,surat:t,onSubmit:s,step:Object(l["G"])(1),submitSurat:c,currentId:r,localDate:{days:"Minggu_Senin_Selasa_Rabu_Kamis_Jum'at_Sabtu".split("_"),daysShort:"Minggu_Senin_Selasa_Rabu_Kamis_Jum'at_Sabtu".split("_"),months:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),monthsShort:"Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),firstDayOfWeek:1}}}},Q=t("f09f"),P=t("27f9"),V=t("9c40"),w=t("0378"),v=t("f531"),q=t("87fe"),J=t("0016"),x=t("7cbe"),D=t("52ee"),M=t("b19c"),U=t("7f67"),K=t("eebe"),T=t.n(K);y.render=j;var L=y;T()(y,"components",{QCard:Q["a"],QInput:P["a"],QBtn:V["a"],QForm:w["a"],QStepper:v["a"],QStep:q["a"],QIcon:J["a"],QPopupProxy:x["a"],QDate:D["a"],QStepperNavigation:M["a"]}),T()(y,"directives",{ClosePopup:U["a"]});var I={components:{InputLaporanBaru:L}},Y=t("9989");I.render=n;a["default"]=I;T()(I,"components",{QPage:Y["a"]})}}]);