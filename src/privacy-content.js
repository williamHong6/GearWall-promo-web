export const privacyCopy = {
  zh: {
    title: "隐私政策",
    updated: "最后更新：2026 年 10 月 14 日",
    intro: "这份政策说明 GearWall App 与 gearwall.app 官网如何处理信息。GearWall 以本地使用为基础：你可以不登录使用装备功能；主动选择登录时，账户认证需要联网。登录与可选使用分析是两件独立的事。",
    back: "返回 GearWall",
    contents: "本页内容",
    summaryTitle: "先了解这几件事",
    summary: [
      "无需登录即可使用本地装备功能。可选登录支持 Google、Apple 和邮箱验证码。",
      "App 使用分析为自愿参与；拒绝不会影响 App 功能。",
      "当前版本不会因登录而上传装备索引或照片；登录不是装备云备份。我们不出售装备数据，也不使用跨 App 广告追踪。"
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
          "当前版本尚未接入账户装备索引同步或照片云备份。登录、退出和切换账户不会自动上传或迁移本机装备，也不会把装备图片发送给登录提供方。App 的货币换算使用内置汇率表；语言、显示和统计同意等偏好保存在设备上。",
          "本地内容会保留至你删除相关内容、删除 App 或设备上的数据被清除。GearWall 无法从服务器找回已删除的本地装备资料；更换设备或删除 App 前，请先按需导出备份。"
        ]
      },
      {
        id: "accounts",
        title: "可选登录与账户信息",
        paragraphs: [
          "你可以跳过登录，也可以在账户页面主动选择 Google、Apple 或邮箱验证码登录。GearWall 使用 Supabase Auth 创建和管理账户、验证登录、保存会话及处理账户删除。认证服务会处理账户标识、邮箱、登录方式、身份验证令牌，以及必要的请求和安全信息，例如 IP 地址、登录时间和错误记录。登录不是匿名行为。",
          "Google 登录会按授权页显示的范围向 Supabase 提供 Google 账户标识、邮箱及基本个人资料，例如名称和头像信息。GearWall 用这些信息完成身份认证和账户管理，不请求读取 Gmail 邮件、通讯录、Google Drive 或 Google Photos。我们不会取得你的 Google 密码，也不会把 Google 登录资料用于广告、出售或传入 Firebase 使用分析。",
          "Apple 登录使用 Apple 提供的账户标识和你同意共享的邮箱；如果使用“隐藏邮件地址”，会收到 Apple 中继邮箱。App 不主动请求 Apple 姓名。我们不会取得你的 Apple 密码。",
          "邮箱登录不要求设置 GearWall 密码。你提交的邮箱交由 Supabase 处理，验证码邮件通过 Resend 从 login@gearwall.app 发送。邮件服务会处理收件地址、验证码邮件内容和投递状态等必要信息。请勿把验证码或登录令牌发给他人。",
          "登录会话凭据保存在设备的系统钥匙串中，用于保留登录状态。当前版本不会仅因打开 App 或显示登录页而发起认证请求；用户主动登录、验证、退出或删除账户时可能发起请求。离线时本地装备功能仍可使用，但新登录、验证码验证和服务器账户删除需要网络。",
          "中国大陆用户也可以主动选择联网登录；这不会启用中国大陆商店的 Firebase 分析。账户服务使用位于美国的 Supabase 项目；Google、Apple、Resend 及相关基础设施可能在你所在国家或地区以外处理认证或邮件数据。不愿使用这些联网服务时，可以不登录继续使用本地功能。"
        ],
        links: [
          { label: "Supabase 隐私说明", href: "https://supabase.com/privacy" },
          { label: "Google 隐私政策", href: "https://policies.google.com/privacy" },
          { label: "Apple 隐私政策", href: "https://www.apple.com/legal/privacy/" },
          { label: "Resend 隐私政策", href: "https://resend.com/legal/privacy-policy" }
        ]
      },
      {
        id: "account-deletion",
        title: "退出、切换与删除账户",
        paragraphs: [
          "你可以在 App 的账户页面退出登录或切换账户。退出会清除设备上的 GearWall 登录凭据，并在网络可用时尝试撤销服务器上的当前会话。退出不等于删除账户；也不清空本机装备或照片。",
          "如需删除登录账户，请在账户页面选择“删除账户”并确认。App 会联网验证当前身份，再请求删除对应 Supabase 账户。使用 Apple 登录的账户可能需要重新授权，以核验身份并撤销关联。请求失败时不会把账户标记为已删除。删除 GearWall 账户不会删除你的 Google 或 Apple 账户。",
          "账户记录会保留到删除请求成功处理；服务提供方的安全日志、邮件投递记录及备份可能按其保留规则继续保存，不承诺即时抹除全部副本。删除登录账户后，本机装备和照片仍保留；如需一并移除，请在 App 或设备中另行删除。已经分享、导出或备份的副本也需分别管理。",
          "你也可以在 Google 或 Apple 的账户设置中撤销 GearWall 的授权；撤销提供方授权不等于删除 Supabase 中的 GearWall 账户。需要账户数据访问、更正、删除或隐私方面的帮助时，请通过本页末尾的联系邮箱提出请求。"
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
          "GearWall 不向 Firebase 设置账户 User ID，不把登录邮箱或 Google／Apple 身份关联到使用分析；登录不代表同意统计。GearWall 不使用 IDFA、IDFV、广告个性化或跨 App 广告追踪，也不出售你的装备数据。Google 对相关数据的处理说明见下方链接。"
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
        id: "contact",
        title: "联系我们",
        paragraphs: [
          "GearWall 由 Leiyi Hong 提供。如对账户信息或本政策有疑问，或希望申请访问、更正、删除账户数据，请联系 williamhong0503@gmail.com。为防止他人冒用，我们可能需要核验你的账户身份；请不要发送密码、验证码或登录令牌。"
        ],
        links: [{ label: "联系 GearWall", href: "mailto:williamhong0503@gmail.com" }]
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
    updated: "Last updated: October 14, 2026",
    intro: "This policy explains how the GearWall app and gearwall.app handle information. GearWall is local-first: you can use local gear features without an account. If you choose to sign in, account authentication requires a connection. Sign-in and optional usage analytics are separate choices.",
    back: "Back to GearWall",
    contents: "On this page",
    summaryTitle: "A few things to know",
    summary: [
      "No sign-in is required for local gear features. Optional sign-in supports Google, Apple, and email verification codes.",
      "App usage analytics is optional. Declining does not affect app features.",
      "The current version does not upload your gear index or photos when you sign in. Sign-in is not a cloud backup. We do not sell gear data or use cross-app advertising tracking."
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
          "The current version does not implement account-based gear index sync or photo cloud backup. Signing in, signing out, or switching accounts does not automatically upload or migrate local gear or send gear photos to a sign-in provider. Currency conversion uses a bundled table. Language, appearance, and analytics preferences are stored on your device.",
          "Local content remains until you delete it, delete the app, or clear the device’s data. GearWall cannot recover deleted local gear content from a server. Export a backup before changing devices or deleting the app if you want to keep it."
        ]
      },
      {
        id: "accounts",
        title: "Optional sign-in and account information",
        paragraphs: [
          "You can skip sign-in or choose Google, Apple, or an email verification code from the account page. GearWall uses Supabase Auth to create and manage accounts, authenticate users, maintain sessions, and process account deletion. Authentication processes account identifiers, email addresses, sign-in providers, authentication tokens, and necessary request and security information such as IP addresses, sign-in times, and error records. Sign-in is not anonymous.",
          "As shown on its consent screen, Google sign-in provides Supabase with your Google account identifier, email address, and basic profile information such as your name and profile picture information. GearWall uses this information for authentication and account management, not to read Gmail messages, contacts, Google Drive, or Google Photos. We do not receive your Google password, sell Google sign-in data, use it for advertising, or send it to Firebase usage analytics.",
          "Apple sign-in uses the account identifier and email address you agree to share. If you choose Hide My Email, Apple supplies a relay address. The app does not request your Apple name, and we do not receive your Apple password.",
          "Email sign-in does not require a GearWall password. Supabase processes the email address you enter, and Resend delivers verification codes from login@gearwall.app. The email service processes necessary information such as the recipient address, verification email content, and delivery status. Do not share verification codes or sign-in tokens.",
          "Session credentials are stored in the device’s system Keychain to retain sign-in state. The current version does not make authentication requests merely because the app opens or a sign-in page appears. Explicit account actions such as sign-in, verification, sign-out, or deletion may send requests. Local gear features remain usable offline; new sign-ins, code verification, and server account deletion require a connection.",
          "Users in mainland China can also choose online sign-in. This does not enable Firebase analytics for mainland China storefronts. Account services use a Supabase project hosted in the United States. Google, Apple, Resend, and related infrastructure may process authentication or email data outside your country or region. You can continue using local features without signing in if you do not want to use these online services."
        ],
        links: [
          { label: "Supabase Privacy Policy", href: "https://supabase.com/privacy" },
          { label: "Google Privacy Policy", href: "https://policies.google.com/privacy" },
          { label: "Apple Privacy Policy", href: "https://www.apple.com/legal/privacy/" },
          { label: "Resend Privacy Policy", href: "https://resend.com/legal/privacy-policy" }
        ]
      },
      {
        id: "account-deletion",
        title: "Sign-out, switching, and account deletion",
        paragraphs: [
          "You can sign out or switch accounts on the app’s account page. Sign-out clears local GearWall credentials and attempts to revoke the current server session when a connection is available. It does not delete your account or erase local gear and photos.",
          "To delete your sign-in account, select Delete account and confirm on the account page. The app verifies your identity online before requesting deletion of the corresponding Supabase account. Apple sign-in accounts may require reauthorization to verify identity and revoke the association. Failed requests are not treated as successful deletion. Deleting a GearWall account does not delete your Google or Apple account.",
          "Account records are retained until a deletion request succeeds. Providers may retain security logs, email delivery records, and backups under their retention rules; immediate erasure of every copy is not promised. Local gear and photos remain after account deletion and must be removed separately in the app or on the device if desired. Previously shared, exported, and backed-up copies also require separate management.",
          "You may revoke GearWall access in your Google or Apple account settings. Revoking provider access does not itself delete the GearWall account stored in Supabase. For account access, correction, deletion, or privacy assistance, contact us using the address below."
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
          "GearWall does not set an account User ID in Firebase or link your sign-in email or Google/Apple identity to usage analytics. Signing in does not opt you into analytics. GearWall does not use IDFA, IDFV, ad personalization, or cross-app advertising tracking, and does not sell your gear data. See the links below for Google’s information about its data processing."
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
        id: "contact",
        title: "Contact us",
        paragraphs: [
          "GearWall is provided by Leiyi Hong. For questions about account information or this policy, or to request access, correction, or deletion of account data, contact williamhong0503@gmail.com. We may need to verify your account identity to prevent impersonation. Do not send passwords, verification codes, or sign-in tokens."
        ],
        links: [{ label: "Contact GearWall", href: "mailto:williamhong0503@gmail.com" }]
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
