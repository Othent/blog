const blogEntries = [
  {
    id: 1,
    url: 'introducing-othent',
    favicon: '/blog/introducing-othent/favicon.svg',
    blogImg: '/blog/introducing-othent/hero-img.png',
    category: 'Announcements',
    date: '14th June 2023',
    duration: '7 min read',
    title: 'Introducing Othent',
    transactionID: 'Qoz79hVnMtqbGfoeXjkrvCEiHMRpIFvYAF2YoxUb8U4',
    teaserContent: 'Introducing Othent. A protocol that brings traditional authentication to Web3 to lower the barrier of entry to blockchains  to create stronger authentication services for Web2 companies and users looking to leverage Web3 technology.',
    content: `
## Introduction
&nbsp;  
Introducing Othent. A protocol that brings traditional authentication to Web3 to lower the barrier of entry to blockchains  to create stronger authentication services for Web2 companies and users looking to leverage Web3 technology.
&nbsp;  
&nbsp;  
&nbsp; 
&nbsp; 
Web3 has been a very tough concept for many companies/people to understand; early adopters curious about a new technology were able to quickly wrap their heads around tokens thanks to products like centralized exchanges, which then prompted users to experiment with dApps like Uniswap and projects like MetaMask.
&nbsp;  
&nbsp;  
&nbsp; 
&nbsp; 
But not everyone gets the thrill or adrenaline from using dApps, as humans can take time to adopt new technologies and often we only want to use something depending on whether it improves their life instantaneously or not.
&nbsp;  
&nbsp;  
&nbsp; 
&nbsp; 
This has led to a very closed-off industry that has only had playful, short-lived hints of product market fit in the real world with a strong “us versus them” mentality (Web3 us vs Web2 them). We believe the smartest thing to do would be to break down the barrier between us and them by starting to highlight the benefits of using blockchain to end users and companies. 
&nbsp;  
&nbsp;  
&nbsp; 
&nbsp; 
So they want to use this technology due to its inherent ease of use and other benefits with things like security, decentralization, censorship resistance, community governance, tokenization and better monetization Web3 brings.
&nbsp;  
&nbsp;  
&nbsp; 
&nbsp; 
But in order for that to happen, we as an industry need to welcome the idea that not everyone is ready to jump straight in with hardcore decentralization, just like many of us weren't when we first bought Bitcoin on a dodgy exchange in 2018.  
&nbsp;  
&nbsp; 
![othent gif](/blog/introducing-othent/othent-gif.gif)
&nbsp;  
&nbsp; 
Othent pairs the convenience of Web2 login services like Google, Twitter, GitHub, and Microsoft with the power and security of dApps. It achieves this by generating unique RS-256 JSON Web Tokens (JWTs), which serve as fungible keys to individual smart contract wallets. Enabling secure transactions with dApps that anyone with a social media account can make, bringing the barrier to entry down to have literally anyone in the world the ability to access blockchains!
&nbsp;  
&nbsp; 
&nbsp;  
Our authentication flow cuts out more than 50 steps compared to traditional wallets.  Users can quickly and securely log in and interact with dApps, which simplifies the process and encourages more people to use dApps.   
&nbsp; 
&nbsp;  
&nbsp;  
## The Problem
&nbsp;  
In Web3, private keys play a crucial role in ensuring the security and integrity of transactions. They serve as unique digital signatures that authenticate and authorize users to perform various actions on blockchains. However, the management of private keys can be challenging, risky, and very confusing.  
&nbsp;  
![how keys work](/blog/introducing-othent/how-keys-work.png)
&nbsp;  
If you lose or compromise a single private key, there is no backup to recover your funds. You could compare this to misplacing the keys to a safety deposit box that's thrown into the ocean; there's simply no way to retrieve it.  
&nbsp;  
If someone else gets hold of your private key, it's like giving them complete and total access to your safety deposit box, which can be very daunting to initial users in Web3 and often a extreme deterrent to use dApps.  
&nbsp;  
![current key storage](/blog/introducing-othent/current-key-storage.png)
&nbsp;  
**User managed private keys,** provide direct and complete control over your wallet and rely solely on the users own security measures.  
&nbsp;  
**Custodial private keys,** managed by a third party, require you to give control over your funds and trust in the custodian's security measures.  
&nbsp;  
**Multi-Party Computation (MPC) private keys,** where multiple parties cooperate to manage the key, adding complexity and potential for coordination failure on early startups.  
&nbsp;  
&nbsp;  
&nbsp;  
## The solution
&nbsp;  
Othent offers a more accessible approach to blockchain transactions by leveraging Web2 login credentials and JWTs. 
&nbsp;  
&nbsp;  
Many companies are already used to this widespread authentication technology and it will be easy to integrate Othent into their existing services.  Othent is positioned to save them years of revamping their whole tech stack to support key storage and forcing their users to learn the complexities of wallets.  
&nbsp;  
Simply connect to a Web3 dApp/chain/service and leverage it to improve their product/service instead of trying to change it.  
&nbsp;  
Othent solves these problems by leveraging Web2 login credentials and JWTs, here's how it works:
&nbsp;  
&nbsp;  
![othents solution](/blog/introducing-othent/othents-solution.webp)
&nbsp;  
### Othent Smart Contract Transactions
&nbsp;  
When a user authenticates with their Web2 account, Othent assigns them a unique smart contract wallet. This smart contract wallet can only be accessed via a JWT, signed by their Web2 account. Transactions can then be made onchain via the user's smart contract wallet just like normal private key transactions.  
&nbsp;  
A key part of this approach is its flexibility. While a user initially uses their Web2 account for authentication, they can later choose to disconnect their Web2 account and use a private key with their smart contract wallet instead. This gives users the freedom to switch to more traditional blockchain interactions down the road, without sacrificing the benefits of Othent's authentication system.  
&nbsp;  
&nbsp;  
### Othent Data Transactions to Arweave
&nbsp;  
In addition to facilitating secure transactions, Othent also supports data uploads to Arweave, a decentralized permanent data storage network.
&nbsp; 
&nbsp; 
To ensure data integrity, Othent uses hashes from the user's data in the JWT as unique verifiable identifiers. The hash of the data is then embedded within the JWT, creating a verifiable link between the user and the uploaded data in an on chain transaction providing an on chain proof.  
&nbsp;  
&nbsp;  
&nbsp;  

## Our Vision
&nbsp;  
Everyone’s journey into the decentralized app world begins somewhere. Many hardcore users of dApps started with more user friendly platforms like Coinbase or Binance. These platforms provided an entry point to blockchain technologies, even if they don't embody the fully decentralized experience of dApps.  
&nbsp;  
Othent follows a similar philosophy: create a path for users to transition comfortably and securely from Web2 to Web3 environments by enabling users to back up their smart contract wallets with private keys and control the ability to access their Othent account with a social log in at any point if they so wish. 
&nbsp;  
&nbsp;  
![web2 companies](/blog/introducing-othent/web2-companies.png)
&nbsp;  

Othent's goal is to make blockchain technology more accessible to all. By simplifying the authentication process, we aim to encourage greater adoption of blockchain and inspire further innovation throughout the whole of the Web3 ecosystem.  
&nbsp;  
&nbsp;  
&nbsp;  
## Get Started with Othent
&nbsp;  
Developers interested in integrating Othent can find developer docs at [docs.othent.io](https://docs.othent.io). To create an Othent account, visit [othent.io/signup](https://othent.io/signup). For any inquiries or feedback, feel free to email us at hello@othent.io.
`
  },






  {
    id: 2,
    url: 'manage-othent',
    favicon: '/blog/manage-othent/favicon.svg',
    blogImg: '/blog/manage-othent/hero.png',
    category: 'Features',
    date: '26th June 2023',
    duration: '5 min read',
    title: 'Manage Othent',
    transactionID: 'bnr7xCL6IdjafhSq2lBFVCcIEY6qwP6HRuyiFEdzjQE',
    teaserContent: 'Adoption of Web3 has been a very slow process, partly due to lack of developer infrastructure. But an even bigger problem no one really talks about has been the lack of authentication infrastructure.',
    content: `
Adoption of Web3 has been a very slow process, partly due to lack of developer infrastructure. But an even bigger problem no one really talks about has been the lack of authentication infrastructure. 
&nbsp;  
&nbsp;  
I personally define authentication infrastructure as things like:
&nbsp;  
&nbsp;  
&nbsp;  
- User management 
- Easy to use CRM
- SSO soloutions
- Management APIs
- Analytics on users/growth
&nbsp;  

&nbsp;  
I strongly believe that just because a user is using a decentralized app shouldn't mean years of tooling already tried and tested is lost.


&nbsp;  
![Etherscan and Indexer](/blog/manage-othent/etherscan-indexer.png)
&nbsp;  
Many startups have tried to solve this problem by creating new advanced analytics tools like blockchain explorers and indexing APIs, which provide an extremely good overview of blockchains. 
&nbsp;  
&nbsp;  
But this can be daunting to many companies, with the problem of too much data of the blockchain itself and not enough analytics on just how their dApp/service is performing.


&nbsp;  
![Etherscan and Indexer](/blog/manage-othent/get-the-data.png)
&nbsp;  
At Othent we are aiming to solve the daunting problem and make it extremely easy for any company to integrate solutions with authentication with what they already know and love.
&nbsp;  
&nbsp;  
Manage.othent.io is a tool companies can now use with their dApp while using Othent to get the data they need to be able to instantly see their dApp at scale and how the users are progressing as a whole. 
&nbsp;  
&nbsp;  
This is extremely important to both new and established companies to see how their product/service is performing with legacy and new features they offer.
&nbsp;  
&nbsp;  

&nbsp;  
![Etherscan and Othent](/blog/manage-othent/etherscan-othent.png)
&nbsp;  


Rather than spending hours on a blockchain explorer like etherscan we give you a comprehensive overview:
&nbsp;  
&nbsp;  
&nbsp;  
- Who are your users? We show you 
- How many transactions do certain users make? We show you
- Launched a new feature? We show you
- What is your most popular service? We show you 
- What are people not using? We show you 
- What should you be spending more time on? We show you 


&nbsp;  
![Othent ecosystem](/blog/manage-othent/othent-ecosystem.png)
&nbsp;  
 
Othent is the glue between dApps and their users, whether it's authentication or user management, we want to be in the heart of your project and make it easy to scale your dApp to the people that love it.
&nbsp;  
&nbsp;  
You can integrate our SDK right now at [docs.othent.io/developers/sdk](https://docs.othent.io/developers/sdk) and use [manage.othent.io](https://manage.othent.io) at no extra cost by signing into the dashboard with the same account your API ID is linked to!
`
},





{
  id: 3,
  url: 'othent-mobile',
  favicon: '/blog/othent-mobile/favicon.svg',
  blogImg: '/blog/othent-mobile/hero.png',
  category: 'Announcements',
  date: '17th August 2023',
  duration: '4 min read',
  title: 'Othent Mobile',
  transactionID: '',
  teaserContent: 'Today we’re launching Othent Mobile - a simple way to use Arweave apps from your phone. We designed Othent Mobile for two reasons...',
  content: `
##### DISCLAIMER: Othent Mobile is in Beta. It is not recommended to use Othent Mobile as your main Arweave wallet at this time.

&nbsp;  
## Arweave in your pocket
&nbsp;  
Today we’re launching Othent Mobile - a simple way to use Arweave apps from your phone. We designed Othent Mobile for two reasons: 

&nbsp;  

- To make onboarding into the ecosystem frictionless on the most widely used platforms, mobile and Google.
- To seamlessly enable Arweave apps on mobile without developers needing to make any modifications.
&nbsp;  
&nbsp;  
&nbsp; 
![Othent mobile UI](/blog/othent-mobile/sample-UI.png)
&nbsp; 
## For users
&nbsp; 

Clicking links to apps like Alex or Permapages from your phone now just work. No more getting stuck on landing pages. No more pulling out your computer to transfer $U tokens or trade on the Universal Content Marketplace.

&nbsp; 
&nbsp; 


Now, you can download Othent Mobile by going to [mobile.othent.io.](https://mobile.othent.io/?utm_source=Othent+Blog&utm_medium=Post&utm_campaign=Othent+Mobile+Launch+-+Download&utm_id=Othent+Mobile+Launch) Bam. You’re in.

&nbsp; 
&nbsp; 


Once you have downloaded Othent Mobile, here are some things you can do on the Permaweb with your new powers:
&nbsp; 
&nbsp; 

&nbsp; 
- [Store an image permanently on Arweave](https://weavetransfer.othent.io/?utm_source=Othent+Blog&utm_medium=Post&utm_campaign=Othent+Mobile+Launch+-+Download&utm_id=Othent+Mobile+Launch)
&nbsp; 
- [Publish a Permapage](https://permapages.app)
&nbsp; 
- [Contribute to an Alex Pool](https://alex.arweave.dev)
&nbsp; 
- [(For our new mobile degens), create a UDL Licensed Atomic Asset](https://img.arweave.dev)

&nbsp; 

Power your Arweave journey with Othent and claim free $U tokens for a limited time at [u.othent.io!](https://u.othent.io/?utm_source=Othent+Blog&utm_medium=Post&utm_campaign=Othent+Mobile+Launch+-+U+Faucet&utm_id=Othent+Mobile+Launch)

&nbsp; 

![ArConnect and Othent](/blog/othent-mobile/arconnect-othent.png)


&nbsp; 
## For developers

&nbsp; 

Starting today, your integration with ArConnect just became an integration for mobile devices. There’s nothing you need to do; it just works. Your users can now onboard through desktop with ArConnect or mobile with Othent. 

&nbsp; 

Our goal at Othent is to make Arweave accessible to the masses. We can’t wait to see what you do on the Permaweb through your phone!

&nbsp; 

To integrate Othent Mobile, refer to the the ArConnect docs at [docs.arconnect.io](https://docs.arconnect.io/?utm_source=Othent+Blog&utm_medium=Post&utm_campaign=Othent+Mobile+Launch+-+U+Faucet&utm_id=Othent+Mobile+Launch)!
`
}






];

export default blogEntries;
