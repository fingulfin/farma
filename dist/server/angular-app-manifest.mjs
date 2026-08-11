
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/farma/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/farma/admin",
    "route": "/farma"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EZBWY65S.js"
    ],
    "route": "/farma/home"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-EZBWY65S.js"
    ],
    "redirectTo": "/farma",
    "route": "/farma/home/**"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-74GITV7Q.js",
      "chunk-XJDG3XMQ.js"
    ],
    "route": "/farma/auth"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-74GITV7Q.js",
      "chunk-XJDG3XMQ.js"
    ],
    "route": "/farma/auth/forgot-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-74GITV7Q.js",
      "chunk-XJDG3XMQ.js"
    ],
    "route": "/farma/auth/reset-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-74GITV7Q.js",
      "chunk-XJDG3XMQ.js"
    ],
    "route": "/farma/auth/sign-in"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-74GITV7Q.js",
      "chunk-XJDG3XMQ.js"
    ],
    "route": "/farma/auth/sign-up"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "redirectTo": "/farma/admin/dashboards/project",
    "route": "/farma/admin/dashboards"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/dashboards/project"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/dashboards/analytics"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/dashboards/finance"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/academy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/academy/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/contacts"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/contacts/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/file-manager"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/file-manager/folders/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/help-center"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/help-center/faq"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/help-center/support"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "redirectTo": "/farma/admin/help-center/guides/getting-started",
    "route": "/farma/admin/help-center/guides"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/help-center/guides/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/notes"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/notes/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/tasks"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/tasks/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/settings"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/settings/account"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/settings/security"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/settings/plan-and-billing"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/settings/notifications"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/settings/team"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/notifications"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/error"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/error/404"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/documentation"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "redirectTo": "/farma/admin/documentation/getting-started/introduction",
    "route": "/farma/admin/documentation/getting-started"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/documentation/getting-started/installation"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/documentation/getting-started/development"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/documentation/getting-started/building"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/documentation/changelog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "route": "/farma/admin/404"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-OJP633RN.js",
      "chunk-WLZDSCFS.js",
      "chunk-D52GVA27.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-42UEQBPF.js",
      "chunk-MY25FVJC.js"
    ],
    "redirectTo": "/farma/admin/404",
    "route": "/farma/admin/**"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-FQJN7EUE.js",
      "chunk-PBQN2UYG.js"
    ],
    "route": "/farma/coming-soon"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 31601, hash: '02166d26895859232971d8c81ceff9a429b3e9156550397438413d2b79845499', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2447, hash: '29d08f61d6f34563c2841ce4372fa75efea651d7d49253942ee87f3eafba4646', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-XC4XFAOR.css': {size: 114437, hash: '0mJjWt3H8Os', text: () => import('./assets-chunks/styles-XC4XFAOR_css.mjs').then(m => m.default)}
  },
};
