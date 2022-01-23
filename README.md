
# Famenun SDK

Famenun SDK let's you acess all available APIs for Famenun Apps through high level and well explained SDK APIs.

  - NPM based
  - Well explained APIs and references
  - Open Source

# New Features!

  - Now you can register hooks
  - Some bugs removed

### Installation

Famenun CLI requires [Node.js](https://nodejs.org/) v4+ to run.

Just get your hand on Famenun-CLI from NPM using following command

```sh
$ npm install @famenun/sdk
```
or
```sh
$ npm i @famenun/sdk
```

### Usuage

**While using through NPM**
```
import * as SDK from "@famenun/sdk"
const api = SDK.init(true); // optional to pass boolean | true for debug mode
```
**While using though js file**
```
<script src="./famenun_sdk.js"></script>
<script>
        const api = __famenun__.init(true); // optional to pass boolean | true for debug mode
</script>
```

### APIs

For now Famenun-CLI supports the following commands and we have plans to cover more commands in future very soon

| API | Usuage |
| ------ | ------ |
| **AppGalaxyHandler** | operations releated to famenun apps galaxy |
| **BroadcastHandler** | Generate broadcast request  |
| **ChatroomsHandler** | Start chat with someone  |
| **ClubsHandler** | Get user club info |
| **DeviceHandler** | get user device info  |
| **LinksHandler** | open link or generate deeplink  |
| **NotificationsHandler** | send notifications to user  |
| **PaymentsHandler** | Generate payment request  |
| **ProfileHandler** | Get user profile info and add shortcut to their profile |
| **ToastHandler** | Show some message to the user  |

### Development

Want to contribute? Great!
We need contributers
play with repo and let us know

### Todos

 - Write All Tests
 - Better code
 - Add more functionality realted to project management

### Important Resources

 - [Famenun For Developers](https://developers.famenun.com/)
 - [Famenun App Docs](https://developers.famenun.com/docs)

License
----

MIT


**Free Utility, We all love that!**
