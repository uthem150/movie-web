Server : nodeJS  
Client : React  
Database : MongoDB

라이브러리 : ANTD (ANT Design)

```
movie-web-1
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ HEAD
│  │           └─ main
│  ├─ objects
│  │  ├─ 0a
│  │  │  └─ 08da44121c1000fe51faa61b34621b5fb14e34
│  │  ├─ 11
│  │  │  └─ 487bbc2de070fed9622b1470119716ef769a38
│  │  ├─ 2c
│  │  │  └─ 296232792435a548388f095d21518ef6260f68
│  │  ├─ 38
│  │  │  └─ 6578c655d0997b0c38520fe4a4c7def3949ab6
│  │  ├─ 54
│  │  │  └─ df2758dc0ab34b0f58f4ce4069b840ea7a52c0
│  │  ├─ 58
│  │  │  └─ 6d631c192601d29edf3cf8eb29609d724a925e
│  │  ├─ 59
│  │  │  └─ 764b8ab5449abe1b2c2fe4f1c1fc6bc55a03df
│  │  ├─ 61
│  │  │  └─ bef4c3d82d3b065b33c7a40674a8405c10f3ed
│  │  ├─ 6b
│  │  │  └─ adfd4a5ebb406fff55f192975e6fe02e810244
│  │  ├─ 71
│  │  │  └─ cc73f62cc7a50f1f65ca4ae57ec12665398e21
│  │  ├─ 81
│  │  │  └─ 83b7a035cd993823085d61994e4bc9b2f41824
│  │  ├─ 85
│  │  │  └─ 50a9fe69a7bed4ef3fb222e5c52f0f6aae0e25
│  │  ├─ 92
│  │  │  └─ 079ed7c6a173f304d315349d95fce0336cf4f4
│  │  ├─ 97
│  │  │  └─ 36417593f4cfae92b312a21c3b329b10573a36
│  │  ├─ a0
│  │  │  └─ 7e610af08b4ad105e9c2082b509247d2bf99a4
│  │  ├─ a1
│  │  │  └─ b1b7bb443a30c0a790a71bff8802675d3e47eb
│  │  ├─ ad
│  │  │  └─ b301d74e23fd029fd2afd28b7e4f73f53a187d
│  │  ├─ b7
│  │  │  └─ 4229f12175c47fe56628cddef8ce7a197fe8c0
│  │  ├─ c5
│  │  │  └─ 659a4eefe3d14701cefde7aae9da40b37a1ef2
│  │  ├─ cf
│  │  │  └─ f8a789729e42a92f89429c022d5dc64b32eb16
│  │  ├─ e2
│  │  │  └─ bb38d5db28dc13a80862b4779baafc74c3b481
│  │  ├─ e5
│  │  │  └─ c774e4889d8a5877ca449fffc1f8c7fd001afc
│  │  ├─ f6
│  │  │  └─ 47d311a141c19c7fe1b4816bbe281ae8ac31e2
│  │  ├─ fc
│  │  │  └─ 0db322d6487e219f84b8e1ed0db3f16244bf8f
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-47092a15eb2fe584be7f6259774187dbceb64128.idx
│  │     ├─ pack-47092a15eb2fe584be7f6259774187dbceb64128.pack
│  │     └─ pack-47092a15eb2fe584be7f6259774187dbceb64128.rev
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ client
│  ├─ .github
│  │  └─ workflows
│  │     └─ deploy.yml
│  ├─ .gitignore
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  └─ manifest.json
│  ├─ README.md
│  ├─ src
│  │  ├─ components
│  │  │  ├─ App.js
│  │  │  ├─ Config.js
│  │  │  └─ views
│  │  │     ├─ commons
│  │  │     │  └─ GridCards.js
│  │  │     ├─ FavoritePage
│  │  │     │  ├─ favoritePage.css
│  │  │     │  └─ FavoritePage.js
│  │  │     ├─ Footer
│  │  │     │  └─ Footer.js
│  │  │     ├─ LandingPage
│  │  │     │  ├─ LandingPage.js
│  │  │     │  └─ Sections
│  │  │     │     └─ MainImage.js
│  │  │     ├─ LoginPage
│  │  │     │  └─ LoginPage.js
│  │  │     ├─ MovieDetail
│  │  │     │  ├─ MovieDetail.js
│  │  │     │  └─ Sections
│  │  │     │     ├─ Favorite.js
│  │  │     │     ├─ MovieInfo.js
│  │  │     │     └─ PersonDetail.js
│  │  │     ├─ NavBar
│  │  │     │  ├─ NavBar.js
│  │  │     │  └─ Sections
│  │  │     │     ├─ LeftMenu.js
│  │  │     │     ├─ Navbar.css
│  │  │     │     └─ RightMenu.js
│  │  │     └─ RegisterPage
│  │  │        └─ RegisterPage.js
│  │  ├─ hoc
│  │  │  └─ auth.js
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ serviceWorker.js
│  │  ├─ setupProxy.js
│  │  ├─ _actions
│  │  │  ├─ types.js
│  │  │  └─ user_actions.js
│  │  └─ _reducers
│  │     ├─ index.js
│  │     └─ user_reducer.js
│  └─ yarn.lock
├─ package-lock.json
├─ package.json
├─ README.md
└─ server
   ├─ config
   │  ├─ key.js
   │  └─ prod.js
   ├─ index.js
   ├─ middleware
   │  └─ auth.js
   ├─ models
   │  ├─ Favorite.js
   │  └─ User.js
   └─ routes
      ├─ favorite.js
      └─ users.js

```

```
movie-web-1
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ gh-pages
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ gh-pages
│  │           ├─ HEAD
│  │           └─ main
│  ├─ objects
│  │  ├─ 0a
│  │  │  └─ 08da44121c1000fe51faa61b34621b5fb14e34
│  │  ├─ 11
│  │  │  └─ 487bbc2de070fed9622b1470119716ef769a38
│  │  ├─ 1c
│  │  │  └─ ae6964999f6aab0ed2b3ecc80385dc44c9b4ea
│  │  ├─ 23
│  │  │  └─ 9e186eecd57ee403504a57887fc855b333a4f3
│  │  ├─ 2c
│  │  │  └─ 296232792435a548388f095d21518ef6260f68
│  │  ├─ 38
│  │  │  └─ 6578c655d0997b0c38520fe4a4c7def3949ab6
│  │  ├─ 3b
│  │  │  └─ 19974c51e5414f35cdb0c9d9990a440c95ef9b
│  │  ├─ 54
│  │  │  └─ df2758dc0ab34b0f58f4ce4069b840ea7a52c0
│  │  ├─ 58
│  │  │  └─ 6d631c192601d29edf3cf8eb29609d724a925e
│  │  ├─ 59
│  │  │  └─ 764b8ab5449abe1b2c2fe4f1c1fc6bc55a03df
│  │  ├─ 5b
│  │  │  └─ 8363f716a50efe7e0f25a2344fbbc1549ebb3e
│  │  ├─ 61
│  │  │  └─ bef4c3d82d3b065b33c7a40674a8405c10f3ed
│  │  ├─ 64
│  │  │  └─ 01f409d57da3f23a26821dfab661c0fb726243
│  │  ├─ 6a
│  │  │  └─ 7d2f2c2b122277378eefb45182478ee0db615a
│  │  ├─ 6b
│  │  │  └─ adfd4a5ebb406fff55f192975e6fe02e810244
│  │  ├─ 71
│  │  │  └─ cc73f62cc7a50f1f65ca4ae57ec12665398e21
│  │  ├─ 7b
│  │  │  └─ ff04f6c28aecd72a5b6b76bf9209f8ef8025be
│  │  ├─ 81
│  │  │  └─ 83b7a035cd993823085d61994e4bc9b2f41824
│  │  ├─ 85
│  │  │  └─ 50a9fe69a7bed4ef3fb222e5c52f0f6aae0e25
│  │  ├─ 92
│  │  │  └─ 079ed7c6a173f304d315349d95fce0336cf4f4
│  │  ├─ 97
│  │  │  └─ 36417593f4cfae92b312a21c3b329b10573a36
│  │  ├─ a0
│  │  │  └─ 7e610af08b4ad105e9c2082b509247d2bf99a4
│  │  ├─ a1
│  │  │  └─ b1b7bb443a30c0a790a71bff8802675d3e47eb
│  │  ├─ ad
│  │  │  ├─ b301d74e23fd029fd2afd28b7e4f73f53a187d
│  │  │  └─ fac31eb1ea556e1b8d850693edfd0f7afe58f1
│  │  ├─ b7
│  │  │  ├─ 4229f12175c47fe56628cddef8ce7a197fe8c0
│  │  │  └─ b0dcbd424b4667a637a0bc6a3c64df69859abf
│  │  ├─ c5
│  │  │  └─ 659a4eefe3d14701cefde7aae9da40b37a1ef2
│  │  ├─ c8
│  │  │  └─ 72e9b3cc1bc99ddf7f04a584ccf9f7fc3cffed
│  │  ├─ cf
│  │  │  └─ f8a789729e42a92f89429c022d5dc64b32eb16
│  │  ├─ e2
│  │  │  └─ bb38d5db28dc13a80862b4779baafc74c3b481
│  │  ├─ e5
│  │  │  └─ c774e4889d8a5877ca449fffc1f8c7fd001afc
│  │  ├─ f6
│  │  │  └─ 47d311a141c19c7fe1b4816bbe281ae8ac31e2
│  │  ├─ fc
│  │  │  └─ 0db322d6487e219f84b8e1ed0db3f16244bf8f
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-47092a15eb2fe584be7f6259774187dbceb64128.idx
│  │     ├─ pack-47092a15eb2fe584be7f6259774187dbceb64128.pack
│  │     └─ pack-47092a15eb2fe584be7f6259774187dbceb64128.rev
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ gh-pages
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ gh-pages
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ client
│  ├─ .github
│  │  └─ workflows
│  │     └─ deploy.yml
│  ├─ .gitignore
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  └─ manifest.json
│  ├─ README.md
│  ├─ src
│  │  ├─ components
│  │  │  ├─ App.js
│  │  │  ├─ Config.js
│  │  │  └─ views
│  │  │     ├─ commons
│  │  │     │  └─ GridCards.js
│  │  │     ├─ FavoritePage
│  │  │     │  ├─ favoritePage.css
│  │  │     │  └─ FavoritePage.js
│  │  │     ├─ Footer
│  │  │     │  └─ Footer.js
│  │  │     ├─ LandingPage
│  │  │     │  ├─ LandingPage.js
│  │  │     │  └─ Sections
│  │  │     │     └─ MainImage.js
│  │  │     ├─ LoginPage
│  │  │     │  └─ LoginPage.js
│  │  │     ├─ MovieDetail
│  │  │     │  ├─ MovieDetail.js
│  │  │     │  └─ Sections
│  │  │     │     ├─ Favorite.js
│  │  │     │     ├─ MovieInfo.js
│  │  │     │     └─ PersonDetail.js
│  │  │     ├─ NavBar
│  │  │     │  ├─ NavBar.js
│  │  │     │  └─ Sections
│  │  │     │     ├─ LeftMenu.js
│  │  │     │     ├─ Navbar.css
│  │  │     │     └─ RightMenu.js
│  │  │     └─ RegisterPage
│  │  │        └─ RegisterPage.js
│  │  ├─ hoc
│  │  │  └─ auth.js
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ serviceWorker.js
│  │  ├─ setupProxy.js
│  │  ├─ _actions
│  │  │  ├─ types.js
│  │  │  └─ user_actions.js
│  │  └─ _reducers
│  │     ├─ index.js
│  │     └─ user_reducer.js
│  └─ yarn.lock
├─ package-lock.json
├─ package.json
├─ README.md
└─ server
   ├─ config
   │  ├─ key.js
   │  └─ prod.js
   ├─ index.js
   ├─ middleware
   │  └─ auth.js
   ├─ models
   │  ├─ Favorite.js
   │  └─ User.js
   └─ routes
      ├─ favorite.js
      └─ users.js

```

```
movie-web-1
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ gh-pages
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ gh-pages
│  │           ├─ HEAD
│  │           └─ main
│  ├─ objects
│  │  ├─ 0a
│  │  │  └─ 08da44121c1000fe51faa61b34621b5fb14e34
│  │  ├─ 11
│  │  │  └─ 487bbc2de070fed9622b1470119716ef769a38
│  │  ├─ 1c
│  │  │  └─ ae6964999f6aab0ed2b3ecc80385dc44c9b4ea
│  │  ├─ 23
│  │  │  └─ 9e186eecd57ee403504a57887fc855b333a4f3
│  │  ├─ 2c
│  │  │  └─ 296232792435a548388f095d21518ef6260f68
│  │  ├─ 38
│  │  │  └─ 6578c655d0997b0c38520fe4a4c7def3949ab6
│  │  ├─ 3b
│  │  │  └─ 19974c51e5414f35cdb0c9d9990a440c95ef9b
│  │  ├─ 54
│  │  │  └─ df2758dc0ab34b0f58f4ce4069b840ea7a52c0
│  │  ├─ 58
│  │  │  └─ 6d631c192601d29edf3cf8eb29609d724a925e
│  │  ├─ 59
│  │  │  └─ 764b8ab5449abe1b2c2fe4f1c1fc6bc55a03df
│  │  ├─ 5b
│  │  │  └─ 8363f716a50efe7e0f25a2344fbbc1549ebb3e
│  │  ├─ 61
│  │  │  └─ bef4c3d82d3b065b33c7a40674a8405c10f3ed
│  │  ├─ 64
│  │  │  └─ 01f409d57da3f23a26821dfab661c0fb726243
│  │  ├─ 6a
│  │  │  └─ 7d2f2c2b122277378eefb45182478ee0db615a
│  │  ├─ 6b
│  │  │  └─ adfd4a5ebb406fff55f192975e6fe02e810244
│  │  ├─ 71
│  │  │  └─ cc73f62cc7a50f1f65ca4ae57ec12665398e21
│  │  ├─ 7b
│  │  │  └─ ff04f6c28aecd72a5b6b76bf9209f8ef8025be
│  │  ├─ 81
│  │  │  └─ 83b7a035cd993823085d61994e4bc9b2f41824
│  │  ├─ 85
│  │  │  └─ 50a9fe69a7bed4ef3fb222e5c52f0f6aae0e25
│  │  ├─ 92
│  │  │  └─ 079ed7c6a173f304d315349d95fce0336cf4f4
│  │  ├─ 97
│  │  │  └─ 36417593f4cfae92b312a21c3b329b10573a36
│  │  ├─ a0
│  │  │  └─ 7e610af08b4ad105e9c2082b509247d2bf99a4
│  │  ├─ a1
│  │  │  └─ b1b7bb443a30c0a790a71bff8802675d3e47eb
│  │  ├─ ad
│  │  │  ├─ b301d74e23fd029fd2afd28b7e4f73f53a187d
│  │  │  └─ fac31eb1ea556e1b8d850693edfd0f7afe58f1
│  │  ├─ b7
│  │  │  ├─ 4229f12175c47fe56628cddef8ce7a197fe8c0
│  │  │  └─ b0dcbd424b4667a637a0bc6a3c64df69859abf
│  │  ├─ c5
│  │  │  └─ 659a4eefe3d14701cefde7aae9da40b37a1ef2
│  │  ├─ c8
│  │  │  └─ 72e9b3cc1bc99ddf7f04a584ccf9f7fc3cffed
│  │  ├─ cf
│  │  │  └─ f8a789729e42a92f89429c022d5dc64b32eb16
│  │  ├─ e2
│  │  │  └─ bb38d5db28dc13a80862b4779baafc74c3b481
│  │  ├─ e5
│  │  │  └─ c774e4889d8a5877ca449fffc1f8c7fd001afc
│  │  ├─ f6
│  │  │  └─ 47d311a141c19c7fe1b4816bbe281ae8ac31e2
│  │  ├─ fc
│  │  │  └─ 0db322d6487e219f84b8e1ed0db3f16244bf8f
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-47092a15eb2fe584be7f6259774187dbceb64128.idx
│  │     ├─ pack-47092a15eb2fe584be7f6259774187dbceb64128.pack
│  │     └─ pack-47092a15eb2fe584be7f6259774187dbceb64128.rev
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ gh-pages
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ gh-pages
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ client
│  ├─ .github
│  │  └─ workflows
│  │     └─ deploy.yml
│  ├─ .gitignore
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  └─ manifest.json
│  ├─ README.md
│  ├─ src
│  │  ├─ components
│  │  │  ├─ App.js
│  │  │  ├─ Config.js
│  │  │  └─ views
│  │  │     ├─ commons
│  │  │     │  └─ GridCards.js
│  │  │     ├─ FavoritePage
│  │  │     │  ├─ favoritePage.css
│  │  │     │  └─ FavoritePage.js
│  │  │     ├─ Footer
│  │  │     │  └─ Footer.js
│  │  │     ├─ LandingPage
│  │  │     │  ├─ LandingPage.js
│  │  │     │  └─ Sections
│  │  │     │     └─ MainImage.js
│  │  │     ├─ LoginPage
│  │  │     │  └─ LoginPage.js
│  │  │     ├─ MovieDetail
│  │  │     │  ├─ MovieDetail.js
│  │  │     │  └─ Sections
│  │  │     │     ├─ Favorite.js
│  │  │     │     ├─ MovieInfo.js
│  │  │     │     └─ PersonDetail.js
│  │  │     ├─ NavBar
│  │  │     │  ├─ NavBar.js
│  │  │     │  └─ Sections
│  │  │     │     ├─ LeftMenu.js
│  │  │     │     ├─ Navbar.css
│  │  │     │     └─ RightMenu.js
│  │  │     └─ RegisterPage
│  │  │        └─ RegisterPage.js
│  │  ├─ hoc
│  │  │  └─ auth.js
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ serviceWorker.js
│  │  ├─ setupProxy.js
│  │  ├─ _actions
│  │  │  ├─ types.js
│  │  │  └─ user_actions.js
│  │  └─ _reducers
│  │     ├─ index.js
│  │     └─ user_reducer.js
│  └─ yarn.lock
├─ package-lock.json
├─ package.json
├─ README.md
└─ server
   ├─ config
   │  ├─ key.js
   │  └─ prod.js
   ├─ index.js
   ├─ middleware
   │  └─ auth.js
   ├─ models
   │  ├─ Favorite.js
   │  └─ User.js
   └─ routes
      ├─ favorite.js
      └─ users.js

```

```
movie-web-1
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ gh-pages
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ gh-pages
│  │           ├─ HEAD
│  │           └─ main
│  ├─ objects
│  │  ├─ 0a
│  │  │  └─ 08da44121c1000fe51faa61b34621b5fb14e34
│  │  ├─ 11
│  │  │  └─ 487bbc2de070fed9622b1470119716ef769a38
│  │  ├─ 1c
│  │  │  └─ ae6964999f6aab0ed2b3ecc80385dc44c9b4ea
│  │  ├─ 23
│  │  │  └─ 9e186eecd57ee403504a57887fc855b333a4f3
│  │  ├─ 2c
│  │  │  └─ 296232792435a548388f095d21518ef6260f68
│  │  ├─ 38
│  │  │  └─ 6578c655d0997b0c38520fe4a4c7def3949ab6
│  │  ├─ 3b
│  │  │  └─ 19974c51e5414f35cdb0c9d9990a440c95ef9b
│  │  ├─ 54
│  │  │  └─ df2758dc0ab34b0f58f4ce4069b840ea7a52c0
│  │  ├─ 58
│  │  │  └─ 6d631c192601d29edf3cf8eb29609d724a925e
│  │  ├─ 59
│  │  │  └─ 764b8ab5449abe1b2c2fe4f1c1fc6bc55a03df
│  │  ├─ 5b
│  │  │  └─ 8363f716a50efe7e0f25a2344fbbc1549ebb3e
│  │  ├─ 61
│  │  │  └─ bef4c3d82d3b065b33c7a40674a8405c10f3ed
│  │  ├─ 64
│  │  │  └─ 01f409d57da3f23a26821dfab661c0fb726243
│  │  ├─ 6a
│  │  │  └─ 7d2f2c2b122277378eefb45182478ee0db615a
│  │  ├─ 6b
│  │  │  └─ adfd4a5ebb406fff55f192975e6fe02e810244
│  │  ├─ 71
│  │  │  └─ cc73f62cc7a50f1f65ca4ae57ec12665398e21
│  │  ├─ 7b
│  │  │  └─ ff04f6c28aecd72a5b6b76bf9209f8ef8025be
│  │  ├─ 81
│  │  │  └─ 83b7a035cd993823085d61994e4bc9b2f41824
│  │  ├─ 85
│  │  │  └─ 50a9fe69a7bed4ef3fb222e5c52f0f6aae0e25
│  │  ├─ 92
│  │  │  └─ 079ed7c6a173f304d315349d95fce0336cf4f4
│  │  ├─ 97
│  │  │  └─ 36417593f4cfae92b312a21c3b329b10573a36
│  │  ├─ a0
│  │  │  └─ 7e610af08b4ad105e9c2082b509247d2bf99a4
│  │  ├─ a1
│  │  │  └─ b1b7bb443a30c0a790a71bff8802675d3e47eb
│  │  ├─ ad
│  │  │  ├─ b301d74e23fd029fd2afd28b7e4f73f53a187d
│  │  │  └─ fac31eb1ea556e1b8d850693edfd0f7afe58f1
│  │  ├─ b7
│  │  │  ├─ 4229f12175c47fe56628cddef8ce7a197fe8c0
│  │  │  └─ b0dcbd424b4667a637a0bc6a3c64df69859abf
│  │  ├─ c5
│  │  │  └─ 659a4eefe3d14701cefde7aae9da40b37a1ef2
│  │  ├─ c8
│  │  │  └─ 72e9b3cc1bc99ddf7f04a584ccf9f7fc3cffed
│  │  ├─ cf
│  │  │  └─ f8a789729e42a92f89429c022d5dc64b32eb16
│  │  ├─ e2
│  │  │  └─ bb38d5db28dc13a80862b4779baafc74c3b481
│  │  ├─ e5
│  │  │  └─ c774e4889d8a5877ca449fffc1f8c7fd001afc
│  │  ├─ f6
│  │  │  └─ 47d311a141c19c7fe1b4816bbe281ae8ac31e2
│  │  ├─ fc
│  │  │  └─ 0db322d6487e219f84b8e1ed0db3f16244bf8f
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-47092a15eb2fe584be7f6259774187dbceb64128.idx
│  │     ├─ pack-47092a15eb2fe584be7f6259774187dbceb64128.pack
│  │     └─ pack-47092a15eb2fe584be7f6259774187dbceb64128.rev
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ gh-pages
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ gh-pages
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ client
│  ├─ .github
│  │  └─ workflows
│  │     └─ deploy.yml
│  ├─ .gitignore
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  └─ manifest.json
│  ├─ README.md
│  ├─ src
│  │  ├─ components
│  │  │  ├─ App.js
│  │  │  ├─ Config.js
│  │  │  └─ views
│  │  │     ├─ commons
│  │  │     │  └─ GridCards.js
│  │  │     ├─ FavoritePage
│  │  │     │  ├─ favoritePage.css
│  │  │     │  └─ FavoritePage.js
│  │  │     ├─ Footer
│  │  │     │  └─ Footer.js
│  │  │     ├─ LandingPage
│  │  │     │  ├─ LandingPage.js
│  │  │     │  └─ Sections
│  │  │     │     └─ MainImage.js
│  │  │     ├─ LoginPage
│  │  │     │  └─ LoginPage.js
│  │  │     ├─ MovieDetail
│  │  │     │  ├─ MovieDetail.js
│  │  │     │  └─ Sections
│  │  │     │     ├─ Favorite.js
│  │  │     │     ├─ MovieInfo.js
│  │  │     │     └─ PersonDetail.js
│  │  │     ├─ NavBar
│  │  │     │  ├─ NavBar.js
│  │  │     │  └─ Sections
│  │  │     │     ├─ LeftMenu.js
│  │  │     │     ├─ Navbar.css
│  │  │     │     └─ RightMenu.js
│  │  │     └─ RegisterPage
│  │  │        └─ RegisterPage.js
│  │  ├─ hoc
│  │  │  └─ auth.js
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ serviceWorker.js
│  │  ├─ setupProxy.js
│  │  ├─ _actions
│  │  │  ├─ types.js
│  │  │  └─ user_actions.js
│  │  └─ _reducers
│  │     ├─ index.js
│  │     └─ user_reducer.js
│  └─ yarn.lock
├─ package-lock.json
├─ package.json
├─ README.md
└─ server
   ├─ config
   │  ├─ key.js
   │  └─ prod.js
   ├─ index.js
   ├─ middleware
   │  └─ auth.js
   ├─ models
   │  ├─ Favorite.js
   │  └─ User.js
   └─ routes
      ├─ favorite.js
      └─ users.js

```
```
movie-web-1
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ gh-pages
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ gh-pages
│  │           ├─ HEAD
│  │           └─ main
│  ├─ objects
│  │  ├─ 0a
│  │  │  └─ 08da44121c1000fe51faa61b34621b5fb14e34
│  │  ├─ 11
│  │  │  └─ 487bbc2de070fed9622b1470119716ef769a38
│  │  ├─ 1c
│  │  │  └─ ae6964999f6aab0ed2b3ecc80385dc44c9b4ea
│  │  ├─ 23
│  │  │  └─ 9e186eecd57ee403504a57887fc855b333a4f3
│  │  ├─ 2c
│  │  │  └─ 296232792435a548388f095d21518ef6260f68
│  │  ├─ 38
│  │  │  └─ 6578c655d0997b0c38520fe4a4c7def3949ab6
│  │  ├─ 3b
│  │  │  └─ 19974c51e5414f35cdb0c9d9990a440c95ef9b
│  │  ├─ 54
│  │  │  └─ df2758dc0ab34b0f58f4ce4069b840ea7a52c0
│  │  ├─ 58
│  │  │  └─ 6d631c192601d29edf3cf8eb29609d724a925e
│  │  ├─ 59
│  │  │  └─ 764b8ab5449abe1b2c2fe4f1c1fc6bc55a03df
│  │  ├─ 5b
│  │  │  └─ 8363f716a50efe7e0f25a2344fbbc1549ebb3e
│  │  ├─ 61
│  │  │  └─ bef4c3d82d3b065b33c7a40674a8405c10f3ed
│  │  ├─ 64
│  │  │  └─ 01f409d57da3f23a26821dfab661c0fb726243
│  │  ├─ 6a
│  │  │  └─ 7d2f2c2b122277378eefb45182478ee0db615a
│  │  ├─ 6b
│  │  │  └─ adfd4a5ebb406fff55f192975e6fe02e810244
│  │  ├─ 71
│  │  │  └─ cc73f62cc7a50f1f65ca4ae57ec12665398e21
│  │  ├─ 7b
│  │  │  └─ ff04f6c28aecd72a5b6b76bf9209f8ef8025be
│  │  ├─ 81
│  │  │  └─ 83b7a035cd993823085d61994e4bc9b2f41824
│  │  ├─ 85
│  │  │  └─ 50a9fe69a7bed4ef3fb222e5c52f0f6aae0e25
│  │  ├─ 92
│  │  │  └─ 079ed7c6a173f304d315349d95fce0336cf4f4
│  │  ├─ 97
│  │  │  └─ 36417593f4cfae92b312a21c3b329b10573a36
│  │  ├─ a0
│  │  │  └─ 7e610af08b4ad105e9c2082b509247d2bf99a4
│  │  ├─ a1
│  │  │  └─ b1b7bb443a30c0a790a71bff8802675d3e47eb
│  │  ├─ ad
│  │  │  ├─ b301d74e23fd029fd2afd28b7e4f73f53a187d
│  │  │  └─ fac31eb1ea556e1b8d850693edfd0f7afe58f1
│  │  ├─ b7
│  │  │  ├─ 4229f12175c47fe56628cddef8ce7a197fe8c0
│  │  │  └─ b0dcbd424b4667a637a0bc6a3c64df69859abf
│  │  ├─ c5
│  │  │  └─ 659a4eefe3d14701cefde7aae9da40b37a1ef2
│  │  ├─ c8
│  │  │  └─ 72e9b3cc1bc99ddf7f04a584ccf9f7fc3cffed
│  │  ├─ cf
│  │  │  └─ f8a789729e42a92f89429c022d5dc64b32eb16
│  │  ├─ e2
│  │  │  └─ bb38d5db28dc13a80862b4779baafc74c3b481
│  │  ├─ e5
│  │  │  └─ c774e4889d8a5877ca449fffc1f8c7fd001afc
│  │  ├─ f6
│  │  │  └─ 47d311a141c19c7fe1b4816bbe281ae8ac31e2
│  │  ├─ fc
│  │  │  └─ 0db322d6487e219f84b8e1ed0db3f16244bf8f
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-47092a15eb2fe584be7f6259774187dbceb64128.idx
│  │     ├─ pack-47092a15eb2fe584be7f6259774187dbceb64128.pack
│  │     └─ pack-47092a15eb2fe584be7f6259774187dbceb64128.rev
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ gh-pages
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ gh-pages
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ client
│  ├─ .github
│  │  └─ workflows
│  │     └─ deploy.yml
│  ├─ .gitignore
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  └─ manifest.json
│  ├─ README.md
│  ├─ src
│  │  ├─ components
│  │  │  ├─ App.js
│  │  │  ├─ Config.js
│  │  │  └─ views
│  │  │     ├─ commons
│  │  │     │  └─ GridCards.js
│  │  │     ├─ FavoritePage
│  │  │     │  ├─ favoritePage.css
│  │  │     │  └─ FavoritePage.js
│  │  │     ├─ Footer
│  │  │     │  └─ Footer.js
│  │  │     ├─ LandingPage
│  │  │     │  ├─ LandingPage.js
│  │  │     │  └─ Sections
│  │  │     │     └─ MainImage.js
│  │  │     ├─ LoginPage
│  │  │     │  └─ LoginPage.js
│  │  │     ├─ MovieDetail
│  │  │     │  ├─ MovieDetail.js
│  │  │     │  └─ Sections
│  │  │     │     ├─ Favorite.js
│  │  │     │     ├─ MovieInfo.js
│  │  │     │     └─ PersonDetail.js
│  │  │     ├─ NavBar
│  │  │     │  ├─ NavBar.js
│  │  │     │  └─ Sections
│  │  │     │     ├─ LeftMenu.js
│  │  │     │     ├─ Navbar.css
│  │  │     │     └─ RightMenu.js
│  │  │     └─ RegisterPage
│  │  │        └─ RegisterPage.js
│  │  ├─ hoc
│  │  │  └─ auth.js
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ serviceWorker.js
│  │  ├─ setupProxy.js
│  │  ├─ _actions
│  │  │  ├─ types.js
│  │  │  └─ user_actions.js
│  │  └─ _reducers
│  │     ├─ index.js
│  │     └─ user_reducer.js
│  └─ yarn.lock
├─ package-lock.json
├─ package.json
├─ README.md
└─ server
   ├─ config
   │  ├─ key.js
   │  └─ prod.js
   ├─ index.js
   ├─ middleware
   │  └─ auth.js
   ├─ models
   │  ├─ Favorite.js
   │  └─ User.js
   └─ routes
      ├─ favorite.js
      └─ users.js

```
```
movie-web-1
├─ .git
│  ├─ COMMIT_EDITMSG
│  ├─ config
│  ├─ description
│  ├─ FETCH_HEAD
│  ├─ HEAD
│  ├─ hooks
│  │  ├─ applypatch-msg.sample
│  │  ├─ commit-msg.sample
│  │  ├─ fsmonitor-watchman.sample
│  │  ├─ post-update.sample
│  │  ├─ pre-applypatch.sample
│  │  ├─ pre-commit.sample
│  │  ├─ pre-merge-commit.sample
│  │  ├─ pre-push.sample
│  │  ├─ pre-rebase.sample
│  │  ├─ pre-receive.sample
│  │  ├─ prepare-commit-msg.sample
│  │  ├─ push-to-checkout.sample
│  │  ├─ sendemail-validate.sample
│  │  └─ update.sample
│  ├─ index
│  ├─ info
│  │  └─ exclude
│  ├─ logs
│  │  ├─ HEAD
│  │  └─ refs
│  │     ├─ heads
│  │     │  ├─ gh-pages
│  │     │  └─ main
│  │     └─ remotes
│  │        └─ origin
│  │           ├─ gh-pages
│  │           ├─ HEAD
│  │           └─ main
│  ├─ objects
│  │  ├─ 0a
│  │  │  └─ 08da44121c1000fe51faa61b34621b5fb14e34
│  │  ├─ 11
│  │  │  └─ 487bbc2de070fed9622b1470119716ef769a38
│  │  ├─ 1c
│  │  │  └─ ae6964999f6aab0ed2b3ecc80385dc44c9b4ea
│  │  ├─ 23
│  │  │  └─ 9e186eecd57ee403504a57887fc855b333a4f3
│  │  ├─ 2c
│  │  │  └─ 296232792435a548388f095d21518ef6260f68
│  │  ├─ 38
│  │  │  └─ 6578c655d0997b0c38520fe4a4c7def3949ab6
│  │  ├─ 3b
│  │  │  └─ 19974c51e5414f35cdb0c9d9990a440c95ef9b
│  │  ├─ 54
│  │  │  └─ df2758dc0ab34b0f58f4ce4069b840ea7a52c0
│  │  ├─ 58
│  │  │  └─ 6d631c192601d29edf3cf8eb29609d724a925e
│  │  ├─ 59
│  │  │  └─ 764b8ab5449abe1b2c2fe4f1c1fc6bc55a03df
│  │  ├─ 5b
│  │  │  └─ 8363f716a50efe7e0f25a2344fbbc1549ebb3e
│  │  ├─ 61
│  │  │  └─ bef4c3d82d3b065b33c7a40674a8405c10f3ed
│  │  ├─ 64
│  │  │  └─ 01f409d57da3f23a26821dfab661c0fb726243
│  │  ├─ 6a
│  │  │  └─ 7d2f2c2b122277378eefb45182478ee0db615a
│  │  ├─ 6b
│  │  │  └─ adfd4a5ebb406fff55f192975e6fe02e810244
│  │  ├─ 71
│  │  │  └─ cc73f62cc7a50f1f65ca4ae57ec12665398e21
│  │  ├─ 7b
│  │  │  └─ ff04f6c28aecd72a5b6b76bf9209f8ef8025be
│  │  ├─ 81
│  │  │  └─ 83b7a035cd993823085d61994e4bc9b2f41824
│  │  ├─ 85
│  │  │  └─ 50a9fe69a7bed4ef3fb222e5c52f0f6aae0e25
│  │  ├─ 92
│  │  │  └─ 079ed7c6a173f304d315349d95fce0336cf4f4
│  │  ├─ 97
│  │  │  └─ 36417593f4cfae92b312a21c3b329b10573a36
│  │  ├─ a0
│  │  │  └─ 7e610af08b4ad105e9c2082b509247d2bf99a4
│  │  ├─ a1
│  │  │  └─ b1b7bb443a30c0a790a71bff8802675d3e47eb
│  │  ├─ ad
│  │  │  ├─ b301d74e23fd029fd2afd28b7e4f73f53a187d
│  │  │  └─ fac31eb1ea556e1b8d850693edfd0f7afe58f1
│  │  ├─ b7
│  │  │  ├─ 4229f12175c47fe56628cddef8ce7a197fe8c0
│  │  │  └─ b0dcbd424b4667a637a0bc6a3c64df69859abf
│  │  ├─ c5
│  │  │  └─ 659a4eefe3d14701cefde7aae9da40b37a1ef2
│  │  ├─ c8
│  │  │  └─ 72e9b3cc1bc99ddf7f04a584ccf9f7fc3cffed
│  │  ├─ cf
│  │  │  └─ f8a789729e42a92f89429c022d5dc64b32eb16
│  │  ├─ e2
│  │  │  └─ bb38d5db28dc13a80862b4779baafc74c3b481
│  │  ├─ e5
│  │  │  └─ c774e4889d8a5877ca449fffc1f8c7fd001afc
│  │  ├─ f6
│  │  │  └─ 47d311a141c19c7fe1b4816bbe281ae8ac31e2
│  │  ├─ fc
│  │  │  └─ 0db322d6487e219f84b8e1ed0db3f16244bf8f
│  │  ├─ info
│  │  └─ pack
│  │     ├─ pack-47092a15eb2fe584be7f6259774187dbceb64128.idx
│  │     ├─ pack-47092a15eb2fe584be7f6259774187dbceb64128.pack
│  │     └─ pack-47092a15eb2fe584be7f6259774187dbceb64128.rev
│  ├─ ORIG_HEAD
│  ├─ packed-refs
│  └─ refs
│     ├─ heads
│     │  ├─ gh-pages
│     │  └─ main
│     ├─ remotes
│     │  └─ origin
│     │     ├─ gh-pages
│     │     ├─ HEAD
│     │     └─ main
│     └─ tags
├─ .gitignore
├─ client
│  ├─ .github
│  │  └─ workflows
│  │     └─ deploy.yml
│  ├─ .gitignore
│  ├─ package-lock.json
│  ├─ package.json
│  ├─ public
│  │  ├─ favicon.ico
│  │  ├─ index.html
│  │  └─ manifest.json
│  ├─ README.md
│  ├─ src
│  │  ├─ components
│  │  │  ├─ App.js
│  │  │  ├─ Config.js
│  │  │  └─ views
│  │  │     ├─ commons
│  │  │     │  └─ GridCards.js
│  │  │     ├─ FavoritePage
│  │  │     │  ├─ favoritePage.css
│  │  │     │  └─ FavoritePage.js
│  │  │     ├─ Footer
│  │  │     │  └─ Footer.js
│  │  │     ├─ LandingPage
│  │  │     │  ├─ LandingPage.js
│  │  │     │  └─ Sections
│  │  │     │     └─ MainImage.js
│  │  │     ├─ LoginPage
│  │  │     │  └─ LoginPage.js
│  │  │     ├─ MovieDetail
│  │  │     │  ├─ MovieDetail.js
│  │  │     │  └─ Sections
│  │  │     │     ├─ Favorite.js
│  │  │     │     ├─ MovieInfo.js
│  │  │     │     └─ PersonDetail.js
│  │  │     ├─ NavBar
│  │  │     │  ├─ NavBar.js
│  │  │     │  └─ Sections
│  │  │     │     ├─ LeftMenu.js
│  │  │     │     ├─ Navbar.css
│  │  │     │     └─ RightMenu.js
│  │  │     └─ RegisterPage
│  │  │        └─ RegisterPage.js
│  │  ├─ hoc
│  │  │  └─ auth.js
│  │  ├─ index.css
│  │  ├─ index.js
│  │  ├─ serviceWorker.js
│  │  ├─ setupProxy.js
│  │  ├─ _actions
│  │  │  ├─ types.js
│  │  │  └─ user_actions.js
│  │  └─ _reducers
│  │     ├─ index.js
│  │     └─ user_reducer.js
│  └─ yarn.lock
├─ package-lock.json
├─ package.json
├─ README.md
└─ server
   ├─ config
   │  ├─ key.js
   │  └─ prod.js
   ├─ index.js
   ├─ middleware
   │  └─ auth.js
   ├─ models
   │  ├─ Favorite.js
   │  └─ User.js
   └─ routes
      ├─ favorite.js
      └─ users.js

```