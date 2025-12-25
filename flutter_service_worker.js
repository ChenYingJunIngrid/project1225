'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "64ee18b595d695bf275a76ef73493071",
"assets/AssetManifest.bin.json": "fa24f014354de0bfc5e377cfe4ce8966",
"assets/assets/aback.mp3": "d9f55e945a3ae1f50a83e6a00a454380",
"assets/assets/aback.png": "96eed55b2fb4ba6486bd8fcbfcd3d701",
"assets/assets/abandon.mp3": "9c33a04c04163144baf18dc96be1eec9",
"assets/assets/abandon.png": "994cf5dafa711205a34caf9c423af651",
"assets/assets/abandonment.jpg": "9e839e68db34a752d01996372ea4f06b",
"assets/assets/abandonment.mp3": "f95693327f6e5f03e56e14066d06a6b5",
"assets/assets/abandonment.png": "0081fa319a031d2bb2a93803e2979cff",
"assets/assets/abash.mp3": "1f484763afd057df89c599fba734a0d3",
"assets/assets/abash.png": "2e63c329cd11652cd6c90bae9cc254bd",
"assets/assets/abbreviation.mp3": "1b8996705c4d81866c79934123e5047d",
"assets/assets/abbreviation.png": "bd3c4ff14061d0e9a5ba476f3de9a81d",
"assets/assets/abdominal.jpg": "7a693e99803732544c09321fafd156f7",
"assets/assets/abdominal.png": "57ff097b08f521a02b00db16e14574dc",
"assets/assets/abduction.mp3": "ce9a3188f81b76e43a106eab146cd016",
"assets/assets/abduction.png": "331eaada75a67096df62596297b77b42",
"assets/assets/abide.mp3": "6d96c649b18356d5a26cc19117781555",
"assets/assets/abide.png": "66ee33da24c81287fbbd5f07e43b88a1",
"assets/assets/ability.mp3": "5c1a09f2201dcf67882f0a254b0e3932",
"assets/assets/ability.png": "d8c12fe9bcb10a77c6c37c92feb34717",
"assets/assets/able.mp3": "280f77cf7e1c759ac70d2610f2aaa2e7",
"assets/assets/able.png": "5638e7c59a966d51db6c0806bd6730af",
"assets/assets/abnormal.mp3": "5b93c741a1629085d371fb83e968e792",
"assets/assets/abnormal.png": "f3ee91615197719356f3df56de11e53e",
"assets/assets/aboard.mp3": "f54c9919329a6ebacded89fd2f42a8b6",
"assets/assets/aboard.png": "4c5e86565969a148be4db32f877fd11f",
"assets/assets/abodminal.mp3": "7503055ac733bacc2ef2f69561e0ebd7",
"assets/assets/abodminal.png": "57ff097b08f521a02b00db16e14574dc",
"assets/assets/abolish.mp3": "c8a73e25a0e8944fef328d2987c65403",
"assets/assets/abolish.png": "17cc996f68cba3ed07e3f790725a2274",
"assets/assets/abolishment.mp3": "0686b7f4586f0dc86952a551c40dfbed",
"assets/assets/abolishment.png": "b15795e7caaadd96917e8e8fd172c654",
"assets/assets/abolition.mp3": "bbb366f7fd72d630bbef2453f5436624",
"assets/assets/abolition.png": "6af022ea0342894784d3501419d60fb2",
"assets/assets/aboriginal.jpg": "3b5896d4e5aa4b7c59a95b829c924d54",
"assets/assets/aboriginal.mp3": "15d473c67c595cee00b771df3ef00ce5",
"assets/assets/aboriginal.png": "4e2dec949f30b9cb0067121278261ec0",
"assets/assets/abort.mp3": "5480351a3a38124def1ed25ce1f44ddd",
"assets/assets/abort.png": "28f3f0d181ad51eb59f408838c0f62d9",
"assets/assets/abortion.mp3": "19906c446951f07f470c13e7daad2a45",
"assets/assets/abortion.png": "59498107958cf9ae13e83db756928c8b",
"assets/assets/abounding.mp3": "6dd8c7d692b1a79a99b7c40af01c10a9",
"assets/assets/abounding.png": "f5c7d1f88d816d1a6900e34ca6fd9908",
"assets/assets/about.mp3": "c777ed9fe653cae1b93a2df084fe14bd",
"assets/assets/about.png": "5902542e0c2de8da598ff6f50a57a51a",
"assets/assets/above-average.mp3": "bf090f0968fed44a683e86e6ea4675fb",
"assets/assets/above-average.png": "09aff9d3a11545395d1ac04111bed92c",
"assets/assets/above.mp3": "a41f37d67bc3d9a37e59af3edbd328d9",
"assets/assets/above.png": "a54773b5e578ae4eafd0b737a87a4903",
"assets/assets/abrasion.mp3": "c2e6bb44f6607476ae4695a801b0fd6e",
"assets/assets/abrasion.png": "c2b7f35ec75650adcfbcc884030f33d2",
"assets/assets/abrasive.mp3": "a95e15d82138be8249520f941ecc7f03",
"assets/assets/abrasive.png": "3ba2738ea8573bb5688e978d7440e7ca",
"assets/assets/abroad.mp3": "74a1e1f1ebd65fee9c5d49ba01f4d5a6",
"assets/assets/abroad.png": "e0c0a46a407fcb6f14e16f6899930071",
"assets/assets/absent.mp3": "90b37c11b343f7fb46af646b9b029407",
"assets/assets/absent.png": "86f3a54c83d9814b1837224f63aaecd9",
"assets/assets/absolutely.mp3": "495e44d94c863a2ad7883e997da3684b",
"assets/assets/absolutely.png": "fc0da41960613a660d6f82382fc3be13",
"assets/assets/absorb.mp3": "ea822877c0efa62884d71cdd816edf0d",
"assets/assets/absorb.png": "51cbf7a54230b0e7180d5c042a35b352",
"assets/assets/absurd.mp3": "62f87e5bf8fafca45d8c931cbdd029d4",
"assets/assets/absurd.png": "bd6ee89dc595d76de31ee715f48c6aa3",
"assets/assets/aburd.png": "44eaec5200ce8efe9ee9e241cb09b2b2",
"assets/assets/accent.mp3": "c9f41bd776145a3f34e7079e4139328a",
"assets/assets/accent.png": "1ddea06b57573dff722a5e272e2bdb9d",
"assets/assets/accept.mp3": "ba9a578b0dd968a47eda60adb323d6e0",
"assets/assets/accept.png": "dd1ca0057b17bf08d7f9c372133aff7e",
"assets/assets/acceptant.mp3": "d72999c8fd2086beefe7e715370632a5",
"assets/assets/acceptant.png": "dff6959d0c41554e09061052b4b3e6b6",
"assets/assets/accessary.mp3": "4ed6efff7fa29248fc1d3ba55299494d",
"assets/assets/accessary.png": "4a62c52a11ddf70dde3060ad159f3d70",
"assets/assets/accident.mp3": "84bed3e66904b5fc1e824b3d6b491af6",
"assets/assets/accident.png": "e924d4269c41df8335dbffc22bbd18e6",
"assets/assets/accord.mp3": "6b6a16dfb0949e4a0169368dac7c6367",
"assets/assets/accord.png": "45187eae076f0f03d7d4cd44af133d0c",
"assets/assets/account.mp3": "b8a857b117e99341b6c34ef7ff1a59cc",
"assets/assets/account.png": "e526a7dd511f461094a8ea60ea4a2561",
"assets/assets/accountant.mp3": "4cb760fa2f650c27b24439b04e131b8e",
"assets/assets/accountant.png": "a69da4c93a5c939c8efaa2df116e8762",
"assets/assets/accurate.mp3": "55ce077949abb4eeeabc4f15b077c7e1",
"assets/assets/accurate.png": "9592a4f236ab2d2b3885f611c0c3b421",
"assets/assets/accuse.mp3": "7ad4d413c7cc7b5d51ab40e0960191af",
"assets/assets/accuse.png": "f463a3b1bfb3e4833abadda9ee28cd95",
"assets/assets/ache.mp3": "ce46af9c4ecb4c6e4f7304b270805c03",
"assets/assets/ache.png": "b2e061a895d92ce73d6309120cb9dc04",
"assets/assets/achieve.mp3": "da753bcf2517caebab7e43b46d8e1646",
"assets/assets/achieve.png": "45d3a0e9c4ced470834a29beb1eb1cb4",
"assets/assets/achievement.png": "e81f1dbcc37e4e4d7e2e9a1fd5cdd124",
"assets/assets/across.png": "c15a466bae22e1e2e1159c00adde9f42",
"assets/assets/act.png": "f3b315f2db7a3f78fb74abcf0eb976a7",
"assets/assets/action.png": "01ac4cad4ed69fbdea16715819063e7f",
"assets/assets/active.png": "2824177bba540382c2b035a023c4b551",
"assets/assets/activity.png": "2407e822a21f24136e4a933953c30250",
"assets/assets/actor.png": "462611d97520b9f29de48d5fd8f4f315",
"assets/assets/actress.png": "42cdaff5f2187519fc5aca47d248c223",
"assets/assets/actual.png": "02663bdddab4347e0bd776e6ce0681a3",
"assets/assets/actually.png": "a9a8978bd9f4fa5bf22841598f414dca",
"assets/assets/adapt.png": "676fe2125ac7355829b56d7c7b9efecc",
"assets/assets/add.png": "614c7777765a25aa22a9cbc02136a623",
"assets/assets/address.png": "b4716d4604338865e5310c4e7d64a016",
"assets/assets/admire.png": "d303316467a82e824dcb3470acd43a51",
"assets/assets/admit.png": "c87bfd2143a40857ae16c674068d3a93",
"assets/assets/adopt.png": "ce51703bb482ca357c047aebadc4db43",
"assets/assets/advance.png": "57acb30b28adfb3f855409d32442007d",
"assets/assets/advantage.png": "75bec7ee0311c56514c0012beb814ca4",
"assets/assets/advertise.png": "112252543535fa872408d8af6b3b3701",
"assets/assets/advertisement.png": "2d41d819237d39e4e673e23b4a1ffec6",
"assets/assets/advice.png": "0dff2cfb9d9ecfb000e683a15ba6554c",
"assets/assets/advise.png": "e99274607b575b0ce381f67fb6aa78a1",
"assets/assets/affair.png": "1a3baee6e4bc04082eb0b15c09d6c631",
"assets/assets/affect.png": "2447777889ff20fc06cad04340177426",
"assets/assets/after.png": "b6335850b20e314e8acf314f6eefd38c",
"assets/assets/again.png": "c19d30bfa8b548d1f6e88231d09907ae",
"assets/assets/against.png": "051be2c869078544f32805153d0fe916",
"assets/assets/age.png": "c0f6e36761958434406c01cbf4c52043",
"assets/assets/ago.mp3": "55ba13d087b4b98a2312f65c61412c91",
"assets/assets/ago.png": "5f465ca98688b9286381639ba25fafa0",
"assets/assets/background.png": "de3589dc1d90f58315523f3f5cac913e",
"assets/assets/combo_doll_jacket1_doll.png": "b5418c782284fb0fb5c17a5c03e2d8de",
"assets/assets/combo_doll_jacket1_wand1.png": "30e9b4ca31fb8ebd95afd920146b5dd9",
"assets/assets/combo_doll_jacket1_wand2.png": "30e9b4ca31fb8ebd95afd920146b5dd9",
"assets/assets/combo_doll_jacket1_wand3.png": "09205ed0b4e85055d7e8cdec9a5988d5",
"assets/assets/combo_doll_jacket1_wand4.png": "ca4bc2b523ccdcbf650e57836e003094",
"assets/assets/combo_doll_wand1.png": "6a76a15dee6c8d21503bbadfa14a637b",
"assets/assets/combo_doll_wand2.png": "95fdc76946d2128df984c2a05fecff9e",
"assets/assets/combo_doll_wand3.png": "26c4cbe253129c5acba68d685d68ce69",
"assets/assets/combo_doll_wand4.png": "15bf670e865c5352da3a7725a73f2ae0",
"assets/assets/combo_jacket1_wand1.png": "30e9b4ca31fb8ebd95afd920146b5dd9",
"assets/assets/combo_jacket1_wand2.png": "9d40c9dce948e976c4f520397d996554",
"assets/assets/combo_jacket1_wand3.png": "09205ed0b4e85055d7e8cdec9a5988d5",
"assets/assets/combo_jacket1_wand4.png": "ca4bc2b523ccdcbf650e57836e003094",
"assets/assets/combo_jacket2_doll.png": "68fa8822e4ba1205764ba3755bf8e209",
"assets/assets/combo_jacket2_wand1.png": "a4533d888bfcf789e3c212d85778c4b3",
"assets/assets/combo_jacket2_wand2.png": "a03698e18022c1c6949c32211b4d27e3",
"assets/assets/combo_jacket2_wand3.png": "dd9c6a1e6eb02261d8a998dde3b9688d",
"assets/assets/combo_jacket2_wand4.png": "80fe9ec14e30de821919f242706ff579",
"assets/assets/combo_jacket3_doll.png": "2e77e48cc669b730ce2c2a73eb3ef6e6",
"assets/assets/combo_jacket3_wand1.png": "c612a728260fb7f8add5e5a6ceaea8e0",
"assets/assets/combo_jacket3_wand2.png": "7d585207eafeb6dd741a4717354e9eeb",
"assets/assets/combo_jacket3_wand3.png": "cfe4487571435a6d6033c0afb84920a6",
"assets/assets/combo_jacket3_wand4.png": "15bf670e865c5352da3a7725a73f2ae0",
"assets/assets/combo_jacket4_doll.png": "5fed76ae6c3a4709e31cdd5d6637e044",
"assets/assets/combo_jacket4_wand1.png": "bdce67e4bad593d31dfe9e384500731d",
"assets/assets/combo_jacket4_wand2.png": "cd293271b97d516c86c6aba7d0e65a02",
"assets/assets/combo_jacket4_wand3.png": "4e68f28ec55bf4dfda6f68c8f889ca44",
"assets/assets/combo_jacket4_wand4.png": "3ba9e02e43b33dfdf9d60c9be9ba8c6b",
"assets/assets/combo_jacket5_doll.png": "6aeedb6c6ff81319dbd24be0d327940c",
"assets/assets/combo_jacket5_wand1.png": "e9112ec10e7bdc8558019481dc17d75b",
"assets/assets/combo_jacket5_wand2.png": "c26efc0baee1092bb24e3a0eb37f9e61",
"assets/assets/combo_jacket5_wand3.png": "dd6b61108cf4734f052990707397e994",
"assets/assets/combo_jacket5_wand4.png": "ac3162c329153432a39a1f37767458c8",
"assets/assets/doll.png": "0fa9582572b4a703fccf38a458c847b4",
"assets/assets/home.png": "66629f0e3d2f9f652062e0594afb2985",
"assets/assets/IMG_5126.png": "1c744750540970c52baaabea9e6d8d50",
"assets/assets/jacket0.png": "e6c3f3df2222bf3506737f8e5e223526",
"assets/assets/jacket1.png": "b5418c782284fb0fb5c17a5c03e2d8de",
"assets/assets/jacket2.png": "68fa8822e4ba1205764ba3755bf8e209",
"assets/assets/jacket3.png": "2e77e48cc669b730ce2c2a73eb3ef6e6",
"assets/assets/jacket4.png": "5fed76ae6c3a4709e31cdd5d6637e044",
"assets/assets/jacket5.png": "4a00a48ecfc3305c6d6134aaf278132b",
"assets/assets/m1_g.png": "2b4b5f64a1fd0957c3b55d6f45f6d632",
"assets/assets/m1_l.png": "721b80d6d6224ff76282f84b660a9e6c",
"assets/assets/m1_w.png": "2b4b5f64a1fd0957c3b55d6f45f6d632",
"assets/assets/m2_g.png": "134f071c564c8171f25510fe78f7ddf9",
"assets/assets/m2_l.png": "3b51dbf8649f4e306ecab8d2489f7abe",
"assets/assets/m2_w.png": "d6be18df21727d07e6d6b73530cdfb82",
"assets/assets/m3_g.png": "a8e26ba6ae1259ceb32da6ad568aa692",
"assets/assets/m3_l.png": "733b36434111bff935da78773689c538",
"assets/assets/m3_w.png": "9d089d82571cd3760aa5ce508c327e46",
"assets/assets/magic1.jpg": "bc86861ffeaa370701001904c3e5e405",
"assets/assets/magic1.png": "bc86861ffeaa370701001904c3e5e405",
"assets/assets/magic3.png": "8ae8a8d08784dfda29d786fa8232fdb5",
"assets/assets/magic6.png": "ae731c1a3bc0eaf5b9a93a18029c20b3",
"assets/assets/magic9.png": "35117fef4e15b90a1030546b8609429c",
"assets/assets/mb_g.png": "b816813bf57f79afa76cbf3a54c39e52",
"assets/assets/mb_l.png": "86dfbe0d9fae469144e5b0682eb88c0c",
"assets/assets/mb_w.png": "5a70dd90edd4550073e2623ddb781564",
"assets/assets/settings.png": "bad76d3c5edb83b91a02398161ed0b0d",
"assets/assets/stats.png": "e8fa67c6d4d0a12ab642de37b0bdaf12",
"assets/assets/store.png": "920545eac384091d249f0d28a6e6f587",
"assets/assets/time1.png": "7e04284a17b04d44746b0ca9cdab2fa1",
"assets/assets/time3.png": "476e30958fc3ab0911b05dc442d96fde",
"assets/assets/time6.png": "3badedfcc53e86c434c356323721e351",
"assets/assets/time9.png": "5370da7e7d7e939221a3dd06f57e692b",
"assets/assets/wand1.png": "9bae2115fb8087f81ac0c3c470dd4049",
"assets/assets/wand2.png": "29105d90eca15b2dbdebaf0d8be89768",
"assets/assets/wand3.png": "59d207f7afda3e30270c006ab337c6e3",
"assets/assets/wand4.png": "9ba4aa9d8b4d64706b1a74211e91fe73",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "60f60b48f6cab1ef75091ef215a611ee",
"assets/NOTICES": "58994975d178d348b5e6fb7a49cb71b8",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"flutter_bootstrap.js": "a3afe726ddb5b0c7b6ed934625e27fb9",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bc6d48089dd96aa72b43ed6e777f5371",
"/": "bc6d48089dd96aa72b43ed6e777f5371",
"main.dart.js": "3873eb2121ff95385137abfc613b80f3",
"manifest.json": "cbe87f798f81e2b9a4f32bd1df2f138d",
"version.json": "c0571f192d49f2042b65ab6faf69625e"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
