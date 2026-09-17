export const privacyCopy = {
  zh: {
    title: "隐私政策",
    updated: "最后更新：2026 年 9 月 17 日",
    intro: "这份政策说明 GearWall App 与 gearwall.app 官网如何处理信息，以及你可以作出的选择。你的装备内容保存在设备本地；在提供使用分析功能的版本中，分析需要满足地区条件并获得你的主动同意。",
    back: "返回 GearWall",
    contents: "本页内容",
    summaryTitle: "先了解这几件事",
    summary: [
      "使用 GearWall 无需创建账号，装备记录和照片保存在设备本地。",
      "App 使用分析为自愿参与；拒绝不会影响 App 功能。",
      "GearWall 不提供装备云同步，不出售你的装备数据，也不使用跨 App 广告追踪。"
    ],
    sections: [
      {
        id: "scope",
        title: "适用范围",
        paragraphs: [
          "本政策适用于 GearWall App 和 gearwall.app 官网。App 用于整理个人装备、记录使用情况，以及制作和分享装备墙。官网提供产品介绍与交互演示。",
          "不同版本可能提供不同功能。下文的可选使用分析说明适用于提供该功能的版本；是否能开启分析，还取决于 App Store 商店地区、功能配置和你的选择。通过系统分享、备份或外部链接访问的第三方服务，同时适用其自身的隐私政策。"
        ]
      },
      {
        id: "local-data",
        title: "装备内容与本地存储",
        paragraphs: [
          "GearWall 不要求你注册账号或登录。你添加的装备名称、价格、备注、标签、使用记录、布局和图片等内容保存在设备上的 App 本地容器中，用于展示、编辑、计算和导出你的装备资料。",
          "GearWall 不提供装备云同步，也不会通过使用统计上传这些具体记录或图片。App 的货币换算使用内置汇率表，不需要向汇率服务发送数据。语言、显示和统计同意等偏好也保存在设备上。",
          "本地内容会保留至你删除相关内容、删除 App 或设备上的数据被清除。GearWall 无法从服务器找回已删除的本地装备资料；更换设备或删除 App 前，请先按需导出备份。"
        ]
      },
      {
        id: "photos",
        title: "照片、相机与设备权限",
        paragraphs: [
          "只有当你主动选择图片、拍照或保存图片时，GearWall 才会使用对应的系统照片选择器、相机或照片保存权限。这些功能用于把你选择或拍摄的内容加入装备资料，或将你生成的图片保存到相册。你可以在 iOS 设置中管理相关权限；拒绝某项权限可能使对应功能无法使用。",
          "照片抠图使用设备上的 Apple Vision 功能处理，不会为抠图把照片发送到 GearWall 服务器或云端 AI 服务。如果你选择的 iCloud 照片尚未下载到设备，系统可能需要联网获取它。"
        ]
      },
      {
        id: "sharing-backups",
        title: "分享、导出与系统备份",
        paragraphs: [
          "当你主动分享装备墙或导出备份时，GearWall 会生成所选图片或文件，并通过系统功能交给你选择的应用、接收者或存储位置。备份可能包含装备详情、照片、价格、标签、使用记录和布局；分享前请检查内容与接收对象。",
          "你可以通过“文件”、iCloud Drive、AirDrop 或其他方式转移导出的备份。这是你主动发起的文件转移，不是 GearWall 自动进行的装备云同步。",
          "根据你的 iOS 设置，本地 App 数据可能包含在设备备份或 iCloud 备份中。删除 App 内的内容不会同时删除已经导出、分享或备份的副本；这些副本需要在对应应用、设备或服务中另行管理。GearWall 无法检查或代你删除这些系统备份与外部副本。"
        ]
      },
      {
        id: "analytics",
        title: "自愿参与的使用分析",
        paragraphs: [
          "在提供使用分析功能的版本中，只有当 App Store 商店地区确认为美国或加拿大，而且你主动同意后，GearWall 才会初始化 Google Firebase Analytics 并启用统计。中国大陆商店、地区未知及其他商店地区不启用该服务。商店地区是 Apple 账号的 App Store 地区，不代表你的实际所在地。",
          "分析用于了解添加和编辑装备、选择“其他”、填写价格、调整洞洞板、使用贴纸和固定器、删除或分享等功能的使用情况，以及页面访问、返回操作和前台停留时长。参数限于固定类别、是否填写等状态和时长。例如，可以记录是否填写了价格，但不记录输入的金额；自定义类别统一归为“其他”。",
          "GearWall 不会通过统计上传装备名称、具体价格、搜索词、图片、图片文件名、标签、备注、其他自由文本、姓名、邮箱或 GPS 位置，也不自行生成或提交设备唯一标识。",
          "Firebase 会使用安装实例标识，处理首次打开、会话等基础事件，以及设备、操作系统和 App 的基本信息。联网时，Google 可能从 IP 地址推导大致地区。因此，这些数据并非完全匿名或完全不含标识信息。",
          "GearWall 不设置用户账号 ID，不使用 IDFA、IDFV、广告个性化或跨 App 广告追踪，也不出售你的装备数据。Google 对相关数据的处理说明见下方链接。"
        ],
        links: [
          { label: "Firebase 隐私与安全说明", href: "https://firebase.google.com/support/privacy" },
          { label: "Google 隐私政策", href: "https://policies.google.com/privacy" }
        ]
      },
      {
        id: "choices-retention",
        title: "你的选择、保留与删除",
        paragraphs: [
          "是否参与统计由你决定，拒绝不会影响 App 功能。你可以在“设置 → 隐私 → 帮助改进 GearWall”中关闭统计并撤回同意。未同意期间或不符合地区条件时的操作，不会保留以待之后补报。已同意且符合地区条件时，Firebase 可能在设备上暂存统计事件，并在联网后自行安排发送。",
          "撤回同意或不再符合地区条件时，GearWall 会停止后续采集并重置设备上的统计数据。已经发出的请求无法撤回，已经被 Google 接收的历史数据不会因此自动删除。删除本地装备或删除 App，也不等于删除远端统计历史。",
          "本地装备数据由你通过 App 管理和删除。已上传的统计数据根据分析服务的保留设置及 Google 的适用处理规则保存；不应把关闭统计理解为立即清除所有历史数据。",
          "若你删除装备，GearWall 会移除对应的本地记录和关联图片；仍被其他内容引用的共享图片可能继续保留。已经导出、分享或进入系统备份的副本需分别处理。"
        ]
      },
      {
        id: "website",
        title: "官网访问与网络数据",
        paragraphs: [
          "gearwall.app 通过 Cloudflare 提供网站托管与网络交付。访问网站时，网络基础设施可能处理 IP 地址、请求的网址、时间、浏览器信息和响应状态等必要请求数据，用于发送页面、维持服务和防范滥用。这与 App 中需要主动同意的 Firebase 使用分析不同。",
          "官网启用了 Cloudflare Web Analytics，通过浏览器中的统计脚本了解页面访问、来源、浏览器及加载性能，帮助改善网站。根据 Cloudflare 的说明，这项统计不使用 Cookie、localStorage 或个人指纹来识别访客。网站统计独立于 App 中的 Firebase 分析，App 内的统计开关不控制官网统计。",
          "装备墙演示中的拖放状态、语言和币种选择用于当前页面交互；我们没有为这些演示操作添加单独的行为事件上报。官网不要求填写账号信息或上传个人装备照片。",
          "Cloudflare 对网络数据、网站统计和必要技术的使用、保存及保护方式，参见下方说明与隐私政策。通过官网打开其他网站后，相关网站会按自己的政策处理访问数据。"
        ],
        links: [
          { label: "Cloudflare Web Analytics 说明", href: "https://www.cloudflare.com/web-analytics/" },
          { label: "Cloudflare 隐私政策", href: "https://www.cloudflare.com/privacypolicy/" }
        ]
      },
      {
        id: "security-children",
        title: "数据安全与未成年人",
        paragraphs: [
          "GearWall 通过本地存储、系统权限和限制统计内容来减少不必要的数据处理。但任何设备、网络或存储方式都不能保证绝对安全。请保护设备访问权限，妥善保管导出的备份，并谨慎选择分享对象。",
          "GearWall 不要求提供年龄或儿童身份信息。儿童及未成年人使用时，建议由监护人协助管理设备权限、统计选择以及照片和文件的对外分享，避免在装备记录或分享内容中加入不必要的个人信息。"
        ]
      },
      {
        id: "updates",
        title: "本政策的更新",
        paragraphs: [
          "当功能或信息处理方式变化时，我们会更新本页并调整顶部的更新日期。对于需要你作出新的同意选择的处理，更新政策本身不会替代你的主动同意。请结合你正在使用的 App 版本及其中的隐私设置阅读本政策。"
        ]
      }
    ]
  },
  en: {
    title: "Privacy Policy",
    updated: "Last updated: September 17, 2026",
    intro: "This policy explains how the GearWall app and gearwall.app handle information and the choices available to you. Your gear content stays on your device. In versions that offer usage analytics, analytics requires an eligible storefront and your explicit consent.",
    back: "Back to GearWall",
    contents: "On this page",
    summaryTitle: "A few things to know",
    summary: [
      "No GearWall account is required. Gear records and photos are stored locally on your device.",
      "App usage analytics is optional. Declining does not affect app features.",
      "GearWall does not provide gear cloud sync, sell your gear data, or use cross-app advertising tracking."
    ],
    sections: [
      {
        id: "scope",
        title: "What this policy covers",
        paragraphs: [
          "This policy applies to the GearWall app and gearwall.app. The app helps you organize personal gear, record its use, and create and share a gear wall. The website provides product information and an interactive demo.",
          "Features may differ between versions. The optional analytics described below applies to versions that offer it. Availability also depends on your App Store storefront, the feature configuration, and your choice. Third-party services you use through sharing, backups, or external links also have their own privacy policies."
        ]
      },
      {
        id: "local-data",
        title: "Gear content and local storage",
        paragraphs: [
          "GearWall does not require registration or sign-in. Gear names, prices, notes, tags, usage records, layouts, and images you add are stored in the app’s local container on your device to display, edit, calculate, and export your gear information.",
          "GearWall does not provide gear cloud sync or upload these records and images through usage analytics. Currency conversion uses a table included in the app without sending data to an exchange-rate service. Preferences, including language, appearance, and analytics consent, are also stored on your device.",
          "Local content remains until you delete it, delete the app, or clear the device’s data. GearWall cannot recover deleted local gear content from a server. Export a backup before changing devices or deleting the app if you want to keep it."
        ]
      },
      {
        id: "photos",
        title: "Photos, camera, and permissions",
        paragraphs: [
          "GearWall uses the relevant system photo picker, camera, or photo-saving permission when you choose to select, take, or save an image. These features add your chosen content to gear records or save images you generate. You can manage permissions in iOS Settings; denying a permission may make the corresponding feature unavailable.",
          "Background removal uses Apple Vision on your device. Photos are not sent to a GearWall server or cloud AI service for background removal. If a selected iCloud photo is not already on your device, the system may need an internet connection to download it."
        ]
      },
      {
        id: "sharing-backups",
        title: "Sharing, exports, and backups",
        paragraphs: [
          "When you choose to share a wall or export a backup, GearWall generates the selected image or file and passes it through system features to your chosen app, recipient, or storage location. Backups may contain gear details, photos, prices, tags, usage records, and layouts. Review the content and recipient before sharing.",
          "You can transfer exported backups through Files, iCloud Drive, AirDrop, or another method. This is a file transfer you initiate, rather than automatic gear cloud sync provided by GearWall.",
          "Depending on your iOS settings, local app data may be included in device or iCloud backups. Deleting content in the app does not delete previously exported, shared, or backed-up copies. Manage those copies separately in the relevant app, device, or service. GearWall cannot inspect or delete these system backups and external copies for you."
        ]
      },
      {
        id: "analytics",
        title: "Optional usage analytics",
        paragraphs: [
          "In versions that offer usage analytics, GearWall initializes Google Firebase Analytics only after your App Store storefront is confirmed as the United States or Canada and you explicitly agree. It is not enabled for mainland China, unknown, or other storefronts. Storefront means your Apple account’s App Store region, not your physical location.",
          "Analytics helps us understand actions such as adding and editing gear, choosing Other, entering prices, adjusting pegboards, using stickers and bindings, deleting, and sharing. It also measures page visits, back actions, and foreground time on pages. Parameters are limited to fixed categories, states, and durations. For example, an event can indicate whether a price was entered without including the amount. Custom categories are mapped to Other.",
          "GearWall does not send gear names, exact prices, search terms, images, image filenames, tags, notes, other free text, names, email addresses, or GPS location through analytics. We do not create or submit our own unique device identifier.",
          "Firebase uses an app-instance identifier and processes basic events such as first opens and sessions, plus basic device, operating-system, and app information. During network communication, Google may derive an approximate region from the IP address. This data is therefore not entirely anonymous or identifier-free.",
          "GearWall does not set an account User ID or use IDFA, IDFV, ad personalization, or cross-app advertising tracking. We do not sell your gear data. See the links below for Google’s information about its data processing."
        ],
        links: [
          { label: "Privacy and security in Firebase", href: "https://firebase.google.com/support/privacy" },
          { label: "Google Privacy Policy", href: "https://policies.google.com/privacy" }
        ]
      },
      {
        id: "choices-retention",
        title: "Choices, retention, and deletion",
        paragraphs: [
          "Participation is your choice, and declining does not affect app features. You can turn analytics off and withdraw consent in Settings → Privacy → Help improve GearWall. Activity without consent or outside eligible storefronts is not retained for later reporting. While consent and storefront requirements are met, Firebase may temporarily store analytics events on the device and schedule their upload when a connection is available.",
          "Withdrawing consent or becoming ineligible stops future collection and resets analytics data on the device. Requests already sent cannot be recalled, and historical data already received by Google is not automatically deleted. Deleting local gear or the app also does not delete remote analytics history.",
          "You manage and delete local gear data through the app. Uploaded analytics data is retained according to the analytics service’s retention settings and Google’s applicable processing rules. Turning analytics off should not be understood as immediately erasing all historical data.",
          "Deleting gear removes the corresponding local record and associated images. Shared images still referenced by other content may remain. Exported files, shared copies, and system backups must be managed separately."
        ]
      },
      {
        id: "website",
        title: "Website visits and network data",
        paragraphs: [
          "gearwall.app uses Cloudflare for website hosting and delivery. Network infrastructure may process necessary request data, including IP addresses, requested URLs, timestamps, browser information, and response status, to deliver pages, operate the service, and prevent abuse. This is separate from the app’s optional Firebase analytics.",
          "The website uses Cloudflare Web Analytics. Its browser script measures page visits, referrers, browsers, and loading performance to help improve the site. Cloudflare states that this service does not identify visitors through cookies, localStorage, or individual fingerprinting. Website analytics is separate from the app’s Firebase analytics and is not controlled by the app’s analytics switch.",
          "Gear-wall demo positions, language, and currency choices are used for the current page interaction. We have not added separate behavioral event reporting for those demo actions. The site does not ask for account information or uploads of personal gear photos.",
          "See the links below for Cloudflare’s handling, retention, and protection of network data, website analytics, and necessary technologies. External websites opened from this site handle visits under their own policies."
        ],
        links: [
          { label: "About Cloudflare Web Analytics", href: "https://www.cloudflare.com/web-analytics/" },
          { label: "Cloudflare Privacy Policy", href: "https://www.cloudflare.com/privacypolicy/" }
        ]
      },
      {
        id: "security-children",
        title: "Security and younger users",
        paragraphs: [
          "GearWall reduces unnecessary data processing through local storage, system permissions, and limited analytics content. No device, network, or storage method can guarantee absolute security. Protect access to your device, keep exported backups secure, and choose sharing recipients carefully.",
          "GearWall does not ask for age or information identifying a user as a child. When children or minors use the app, a parent or guardian should help manage device permissions, analytics choices, and external sharing of photos and files. Avoid adding unnecessary personal information to gear records or shared content."
        ]
      },
      {
        id: "updates",
        title: "Updates to this policy",
        paragraphs: [
          "We will update this page and its date when features or information-handling practices change. Updating the policy does not replace your explicit consent where a new choice is required. Read this policy alongside the app version you use and its privacy settings."
        ]
      }
    ]
  }
};
