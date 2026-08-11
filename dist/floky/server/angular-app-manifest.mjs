
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/floky/',
  locale: undefined,
  routes: [
  {
    "renderMode": 0,
    "redirectTo": "/floky/admin",
    "route": "/floky"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2D6NGJUV.js"
    ],
    "route": "/floky/home"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-2D6NGJUV.js"
    ],
    "redirectTo": "/floky",
    "route": "/floky/home/**"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CESEZQEZ.js",
      "chunk-THXGXUOD.js"
    ],
    "route": "/floky/auth"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CESEZQEZ.js",
      "chunk-THXGXUOD.js"
    ],
    "route": "/floky/auth/forgot-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CESEZQEZ.js",
      "chunk-THXGXUOD.js"
    ],
    "route": "/floky/auth/reset-password"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CESEZQEZ.js",
      "chunk-THXGXUOD.js"
    ],
    "route": "/floky/auth/sign-in"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-CESEZQEZ.js",
      "chunk-THXGXUOD.js"
    ],
    "route": "/floky/auth/sign-up"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "redirectTo": "/floky/admin/dashboards/project",
    "route": "/floky/admin/dashboards"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/dashboards/project"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/dashboards/analytics"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/dashboards/finance"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/academy"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/academy/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/contacts"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/contacts/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/file-manager"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/file-manager/folders/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/help-center"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/help-center/faq"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/help-center/support"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "redirectTo": "/floky/admin/help-center/guides/getting-started",
    "route": "/floky/admin/help-center/guides"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/help-center/guides/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/notes"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/notes/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/tasks"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/tasks/*"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/settings"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/settings/account"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/settings/security"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/settings/plan-and-billing"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/settings/notifications"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/settings/team"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/notifications"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/error"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/error/404"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/documentation"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "redirectTo": "/floky/admin/documentation/getting-started/introduction",
    "route": "/floky/admin/documentation/getting-started"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/documentation/getting-started/installation"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/documentation/getting-started/development"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/documentation/getting-started/building"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/documentation/changelog"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "route": "/floky/admin/404"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-ADRDXMWB.js",
      "chunk-WLZDSCFS.js",
      "chunk-OIUOQAIY.js",
      "chunk-5KNOYC3Z.js",
      "chunk-25RE2TK4.js",
      "chunk-WQAYP64Q.js",
      "chunk-S45TBVKX.js",
      "chunk-KDSWV22H.js",
      "chunk-3PV3FV7U.js",
      "chunk-BEZE2M73.js"
    ],
    "redirectTo": "/floky/admin/404",
    "route": "/floky/admin/**"
  },
  {
    "renderMode": 0,
    "preload": [
      "chunk-YSW2POM6.js",
      "chunk-5IZO4XV6.js"
    ],
    "route": "/floky/coming-soon"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 31692, hash: 'ca68c431917708ad3c6b9651000d8a93bef7a6f3faa6f78d18f3e3238fe34a57', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 2446, hash: '48c04afded3669b9d902c4220174d7fc92c219ac282797d6a5db21f75babdc47', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-ZIWLUP4N.css': {size: 115041, hash: 'fnIashFIKTY', text: () => import('./assets-chunks/styles-ZIWLUP4N_css.mjs').then(m => m.default)}
  },
};
