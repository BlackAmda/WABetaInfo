# NOTICE‼️ - VISIT **[wabetainfo new repo](https://github.com/SL-CODE-LORDS/WABetaInfo)** or **[new NPM library](https://www.npmjs.com/package/@sl-code-lords/wabetainfo)** TO GET THE LATEST VERSION OF THE SCRAPE WITH NEW FEATURES.

## **WABetaInfo** - A Web Scrape NPM package of wabetainfo.com (unofficial)

This is an unofficial scrape of wabetainfo.com and all post credit goes to **[@wabetainfo](https://wabetainfo.com/)**. This project is based on Javascript.

_Coded by: [Black Amda](https://github.com/BlackAmda)_

## Installation
```
npm i wabetainfo
```

## Usage
```js
const wabetainfo = require("wabetainfo")
```

## Methods

### wabetainfo.firstpageposts()
Code:
```js
const posts = await wabetainfo.firstpageposts()
console.log(posts)
```
Output:
```
[ 
    {
        "id": "post-17115",
        "title": "WhatsApp beta for iOS 22.22.0.73: what’s new?",
        "date": "October 19, 2022",
        "platform": "IOS",
        "shortdesc": "WhatsApp has just submitted a new update through the TestFlight beta Program, bringing the version up to 22.22.0.73. The version marked within WhatsApp Settings is 2.22.22.73 and the TestFlight build is 22.22.0 (410477171).\n" + "What’s new in this update? A minor change is available for WhatsApp reactions: up to four reactions now show up within chat bubbles.",
        "url": "https://wabetainfo.com/whatsapp-beta-for-ios-22-22-0-73-whats-new/"
    },
    ... 9 more items
]
```

### wabetainfo.getlatest()
Code:
```js
const latest = await wabetainfo.getlatest();
console.log(latest)
```
Output:
```json
{
    "title": "WhatsApp beta for iOS 22.22.0.73: what’s new?",
    "date": "October 19, 2022",
    "platform": "IOS",
    "url": "https://wabetainfo.com/whatsapp-beta-for-ios-22-22-0-73-whats-new/",
    "image": "https://wabetainfo.com/wp-content/uploads/2022/10/WA_FOUR_REACTIONS_IOS.png",
    "shortdesc": "WhatsApp has just submitted a new update through the TestFlight beta Program, bringing the version up to 22.22.0.73. The version marked within WhatsApp Settings is 2.22.22.73 and the TestFlight build is 22.22.0 (410477171).\n" +
        "What’s new in this update? A minor change is available for WhatsApp reactions: up to four reactions now show up within chat bubbles.",
    "fulldesc": "WhatsApp has just submitted a new update through the TestFlight beta Program, bringing the version up to 22.22.0.73. The version marked within WhatsApp Settings is 2.22.22.73 and the TestFlight build is 22.22.0 (410477171).\n" +
        "What’s new in this update? A minor change is available for WhatsApp reactions: up to four reactions now show up within chat bubbles.In the article about the WhatsApp beta for Android 2.22.22.12 update, we announced a new minor feature available to some beta testers: an additional reaction show up right within chat bubbles. In fact, when a lot of people react to messages in a group, only up to 3 reactions are visible within chat bubbles since it is the maximum number configured from the app. Thanks to the WhatsApp beta for iOS 22.22.0.73 update, the same feature is available to some beta testers on the iOS app:As you can see in this screenshot, the changes are only visible in group chats since it is the only place where a message can receive more than 2 different reactions: thanks to this update, an additional reaction is visible so up to 4 reactions now show up within the chat bubble. In the previous update, visible reactions were limited to 3 emojis.The ability to view up to 4 reactions within chat bubbles is available to some beta testers that install the latest update of WhatsApp beta for iOS from the TestFlight app and it is rolling out to more beta testers over the coming days.Follow WABetaInfo if you would like to discover more about future updates and features of WhatsApp beta for Android, iOS, Web/Desktop, and Windows!",
    "faq": [
        { "question": "Name of the feature?", "answer": "Four reactions" },
        { "question": "Status?", "answer": "Rolling out" },
        {
            "question": "Compatibility?",
            "answer": "WhatsApp beta for iOS 22.22.0.73 is marked as a compatible update but some users may be able to get the same feature after installing the 22.22.0.72 beta build."
        },
        {
            "question": "I have the same version but I don’t have this feature, why?",
            "answer": "This feature may only be available to some beta testers. In this case, please wait for a future update."
        },
        {
            "question": "Thanks:",
            "answer": "SiLent and Thales for testing and reporting."
        },
        {
            "question": "Previous news?",
            "answer": "WhatsApp is rolling out a business tools tab on iOS beta"
        }
    ]
}
```
### wabetainfo.searchpost(url)
Code:
```js
const search = await wabetainfo.searchpost('https://wabetainfo.com/whatsapp-beta-for-ios-22-22-0-73-whats-new/');
console.log(search)
```
Output:
```json
{
    "title": "WhatsApp beta for iOS 22.22.0.73: what’s new?",
    "date": "October 19, 2022",
    "platform": "IOS",
    "url": "https://wabetainfo.com/whatsapp-beta-for-ios-22-22-0-73-whats-new/",
    "image": "https://wabetainfo.com/wp-content/uploads/2022/10/WA_FOUR_REACTIONS_IOS.png",
    "shortdesc": "WhatsApp has just submitted a new update through the TestFlight beta Program, bringing the version up to 22.22.0.73. The version marked within WhatsApp Settings is 2.22.22.73 and the TestFlight build is 22.22.0 (410477171).\n" +
        "What’s new in this update? A minor change is available for WhatsApp reactions: up to four reactions now show up within chat bubbles.",
    "fulldesc": "WhatsApp has just submitted a new update through the TestFlight beta Program, bringing the version up to 22.22.0.73. The version marked within WhatsApp Settings is 2.22.22.73 and the TestFlight build is 22.22.0 (410477171).\n" +
        "What’s new in this update? A minor change is available for WhatsApp reactions: up to four reactions now show up within chat bubbles.In the article about the WhatsApp beta for Android 2.22.22.12 update, we announced a new minor feature available to some beta testers: an additional reaction show up right within chat bubbles. In fact, when a lot of people react to messages in a group, only up to 3 reactions are visible within chat bubbles since it is the maximum number configured from the app. Thanks to the WhatsApp beta for iOS 22.22.0.73 update, the same feature is available to some beta testers on the iOS app:As you can see in this screenshot, the changes are only visible in group chats since it is the only place where a message can receive more than 2 different reactions: thanks to this update, an additional reaction is visible so up to 4 reactions now show up within the chat bubble. In the previous update, visible reactions were limited to 3 emojis.The ability to view up to 4 reactions within chat bubbles is available to some beta testers that install the latest update of WhatsApp beta for iOS from the TestFlight app and it is rolling out to more beta testers over the coming days.Follow WABetaInfo if you would like to discover more about future updates and features of WhatsApp beta for Android, iOS, Web/Desktop, and Windows!",
    "faq": [
        { "question": "Name of the feature?", "answer": "Four reactions" },
        { "question": "Status?", "answer": "Rolling out" },
        {
            "question": "Compatibility?",
            "answer": "WhatsApp beta for iOS 22.22.0.73 is marked as a compatible update but some users may be able to get the same feature after installing the 22.22.0.72 beta build."
        },
        {
            "question": "I have the same version but I don’t have this feature, why?",
            "answer": "This feature may only be available to some beta testers. In this case, please wait for a future update."
        },
        {
            "question": "Thanks:",
            "answer": "SiLent and Thales for testing and reporting."
        },
        {
            "question": "Previous news?",
            "answer": "WhatsApp is rolling out a business tools tab on iOS beta"
        }
    ]
}
```

## Change log
### v1.1.0 [27/01/2023]
- Packages update - Axios@0.27.2 > Axios@1.2.5
- Fix: Test node file.
- Fix: Split error when scraping image in latest post.

## License
This project is protected by the `GNU General Public License v3.0.`

## Disclaimer
`WABetaInfo` name, we have nothing to do with the website officially. If any complains please contact via sl.amdakolla@gmail.com