'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9cd599a3523898e6a12e13ec787da50a",
".git/config": "d7d29f9cbc3df9f45aecf9052a3d2b06",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "d41d8cd98f00b204e9800998ecf8427e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "4e09e4ca277460d7d02a879c937babce",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "74213f6751d00c0f23bf8852c6259199",
".git/logs/refs/heads/main": "134f776e60ec5f696302d46ee435fca6",
".git/logs/refs/remotes/origin/main": "b22e829cd727ad8f3a786e5d7edfb15f",
".git/objects/39/6eaefe2e530e0c490525cc6095d2b324d71f61": "66a30d78d1b1c6a0f0d5c5f9f50c64b5",
".git/objects/3b/6ed11f30a1b110c3196b960bcfcb084fb9f34e": "95bcdc396c263db334341f38066280e6",
".git/objects/54/2bd82707b8c2ccd43287e788404ff6cf6f81bf": "4ebda4502fb0bfb1d3581cc0d3c971d7",
".git/objects/5c/6b91abfddb70d91e61bb35a01dc64e49f1d4db": "c4b3a2db163b6b375dca7b200e97931c",
".git/objects/66/9d9e87ec9a83dcccbcc8ead9cba64bf48d7e11": "fd54315fb4cf1fa9f08e93dea51039ee",
".git/objects/71/be7861cecaa96fcc730850ae3e5a4c3213f395": "c4a77539fe7d69a1d92e7b8fdcbd8a0a",
".git/objects/76/bad118aa9ed9cdfb2d9017a301394ee75c2f6f": "ac02a0e770a9f30690f116e8f4e74dfc",
".git/objects/80/a1f60ca691f53d0e1f0ba64bb42020017ff153": "66c84cdd56a776958decefdb5ed861ab",
".git/objects/82/80a7ec6997bd29856ab14d6963d371e92362f4": "2a9dbe6d0ea596ebf90a4a0f6d4e5ece",
".git/objects/82/efab4e9b936f8336c7ac92ba443476fed4fc93": "d987015f9f18fef2a1d34a16be131cd6",
".git/objects/91/23ca9fde3eb99b6f15f8b58a20a2b0e53f7633": "359dcb9c565595ada4bb8aba67401e6b",
".git/objects/98/a023276cecf1cdbf3e9b4beb12bc7196405a2c": "cd8b011ce38b5a80a519af4dd7d38a2f",
".git/objects/b0/c44c6e6fc68810036567297b22f122d302e9c3": "d12481007a069cfa4227a12f62e374f3",
".git/objects/b6/94132a58a709c245eeef1fe6528beba1bf46a2": "61dcb11ab3b1a5f5fd6709feca0003d4",
".git/objects/b6/b92020704c44358cf5363eb31b2d512de0185d": "d8edbdbaefd37acaa54a425d1dd9d04c",
".git/objects/bb/2735a200995f4cffc046ab2d88eb750f2f44a0": "f777215b81c54383ce6ce5b13553f38d",
".git/objects/c5/2981f689faea330e04801a0229c442db8365a6": "c06f229eda0334133e3def07cb6366f0",
".git/objects/c6/fa9d7699865eb099dbf3ae21f7264270735fe7": "c5a8de5e7985ccbd985d36fd1c97a67a",
".git/objects/c9/e2681a166a814914f229fcf16780b34348a818": "11d9295eaf55473c4e2827e933809983",
".git/objects/cf/169104903bb8f98ae7b0af1384902c3c5d227a": "1a411b10a04475c1fa32652719534a1c",
".git/objects/d2/ad28cdce0d47372b07715cee02405eacb0ed1f": "15ed25e6997a4ae62a84cb38ff02e54b",
".git/objects/d3/bd0bb040757e075bd2e7dfc3647a732d7a06e3": "1536c563e9aba1279fd1c449b51f1bef",
".git/objects/da/bad221571cd504cf69d6093ed4e84282cc766c": "19e8374768115f1018b7671c25b2200a",
".git/objects/f1/351cdf2996844a8ebc0784e8b9964791aeabff": "9dbea363c651da6b6f963d20882c13bc",
".git/objects/f3/b7edf056e2bb03b9cb7774cb67576198981251": "e1443a4faf166ab2bc67ab232ace5997",
".git/objects/fe/a3a4d2b9265bb0517d13414362c0d585f3ebd5": "b3b022f93f5c6127bece20f7c5fd883a",
".git/refs/heads/main": "e89a856e27d9c94684af642f6cd31bc2",
".git/refs/remotes/origin/main": "9976c67b34f7d0688554d3b47e287648",
"404.html": "76a4ff599c9f316f8556287d66305a8e",
"assets/AssetManifest.json": "9bfc1fb41c4f3d1d3793a0ffc93a856a",
"assets/assets/images/portfolio_logo.png": "66f9a9b8681f0aae929c84d9cfa403f1",
"assets/assets/translations/en.json": "403f61e66f0f75e413f14eb8642ec029",
"assets/FontManifest.json": "13a826883971e5493399d93d37ea8c55",
"assets/NOTICES": "b8af16cfa95252bd98d04d06607cca58",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en-US.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/easy_localization/i18n/en.json": "5f5fda8715e8bf5116f77f469c5cf493",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b00363533ebe0bfdb95f3694d7647f6d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "0a94bab8e306520dc6ae14c2573972ad",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "9cda082bd7cc5642096b56fa8db15b45",
"favicon.ico": "6d5a276123bcfe8633a98266d29fa9e1",
"icons/Icon-192.png": "f7bb9db69340c5df9dbaffd0e45bb10d",
"icons/Icon-512.png": "1c45c0fbce43d005981a03d1521257fd",
"index.html": "7bc1c053e20b3c2483c3a747b982791f",
"/": "7bc1c053e20b3c2483c3a747b982791f",
"main.dart.js": "a73aacc171e96872ed1b27e73269a9e2",
"main.dart.js_1.part.js": "b994b089e2d930630a201f3f46ef1269",
"main.dart.js_10.part.js": "5fe0f7f995e08b636a9fd15ebaf6d900",
"main.dart.js_11.part.js": "d3118b70a41aa8e00e49621a35290b74",
"main.dart.js_12.part.js": "19ebab27637aca38e4c7b8ccecae601b",
"main.dart.js_13.part.js": "cfde157869fb375696f26ab3aa1a8021",
"main.dart.js_14.part.js": "6481eb48efac4e7f6a764657a7413653",
"main.dart.js_15.part.js": "dfe542f9ea524d450423ccf499752e77",
"main.dart.js_16.part.js": "527d2e8c1ab9506587a26816ab95de8b",
"main.dart.js_17.part.js": "2b8d4a03887186002bd52c3a24597219",
"main.dart.js_18.part.js": "5d2262f03209412a1db5304643267152",
"main.dart.js_19.part.js": "ad98ac13119b01103c7b9d8f590d11d8",
"main.dart.js_2.part.js": "ec4a87f44205833e0736a89ef07a6dc9",
"main.dart.js_20.part.js": "c11ecba9633a5628ef52285eca2374de",
"main.dart.js_21.part.js": "98b219dc386346c778b7c08c73c86ceb",
"main.dart.js_22.part.js": "12531c872ccac08f23e597c79dede67b",
"main.dart.js_23.part.js": "3b0297d9914a482a08106aa097376c61",
"main.dart.js_24.part.js": "6026651f057142647e6a83c94fef6414",
"main.dart.js_25.part.js": "f1127fee731f469a68973f38b1c5ea3a",
"main.dart.js_26.part.js": "71a578684485173648c901f1d9f766e0",
"main.dart.js_27.part.js": "c836c896ad29e1b1c3ee98c87cd5066e",
"main.dart.js_28.part.js": "04cfdc7eb0a8f54a726b8137da62923e",
"main.dart.js_29.part.js": "fb4f67b290e63d19d8c65bd1c2af51c4",
"main.dart.js_3.part.js": "814a7f8df4d3d2ef72599a0bd53f72ef",
"main.dart.js_30.part.js": "dd465e5714e9587d4c1d6b28315a8f51",
"main.dart.js_31.part.js": "f6848a3ef2a467efa52f933d5d94bafd",
"main.dart.js_32.part.js": "6950eb75a6a000327014ec5d82c6a937",
"main.dart.js_33.part.js": "1ad1567fbbe85c22acfa16b23f89f3c4",
"main.dart.js_34.part.js": "e1fec77e1ce2504ce5c1e02dffef80ed",
"main.dart.js_35.part.js": "04486d178b562d5959913d30f0229421",
"main.dart.js_36.part.js": "86e1f6d8651e664ef5d563ac11ecbe87",
"main.dart.js_4.part.js": "53805113c82b176048ceb671d30001ba",
"main.dart.js_5.part.js": "5453e8b3fde2e6edb693802252fcb41d",
"main.dart.js_6.part.js": "b4361b62349f4edf7eb9622ab0aaae9b",
"main.dart.js_7.part.js": "6ce4792a1789dea1ffe2aef84943d09d",
"main.dart.js_8.part.js": "0271bd207293a60e7f4941b1c8c8348c",
"main.dart.js_9.part.js": "03d46f146472e09492fbbf41d89f0bd1",
"manifest.json": "0bfb143bb7dc9cec0d1a26f2ee298bb3",
"portfolio_logo.png": "66f9a9b8681f0aae929c84d9cfa403f1",
"robots.txt": "b4f69ecb96fa2a15e3fb24b5e80899e5",
"sitemap.xml": "04fdfaa446ac51b14021895185f0f4ab",
"splash/img/portfolio_logo.png": "66f9a9b8681f0aae929c84d9cfa403f1",
"splash/splash.js": "123c400b58bea74c1305ca3ac966748d",
"splash/style.css": "361089ba6d3427a73e6799b4c996d4f5",
"version.json": "5cd7d58c186c123b8e38f0b9ac10c5bb"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
