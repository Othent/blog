const blogEntries = [
  {
    id: 1,
    url: 'introducing-othent',
    favicon: '/blog/introducing-othent/favicon.svg',
    blogImg: '/blog/introducing-othent/hero-img.png',
    category: 'Announcements',
    date: '14th June 2023',
    duration: '3 min read',
    title: 'Introducing Othent',
    transactionID: 'XXXXX',
    teaserContent: 'Introducing Othent, a protocol bridging traditional authentication over to Web3 to lower the barrier entry to blockchains and create stronger authentication services for Web3...',
    content: `
## Introduction
&nbsp;  
Introducing Othent, a protocol bridging traditional authentication over to Web3 to lower the barrier entry to blockchains and create stronger authentication services for Web3. 
&nbsp;  
&nbsp;  
&nbsp; 
&nbsp; 
Web3 has been a very tough thing for many companies/people to understand, early adopters curious about a new technology were able to quickly wrap their heads around tokens specifically with the help of things like centralized exchanges which then prompted users to experiment with dApps like Uniswap and projects like MetaMask.
&nbsp;  
&nbsp;  
&nbsp; 
&nbsp; 
But not everyone gets the thrill or adrenaline from using dApps, humans are very conservative in their beliefs and often only want to use something depending on whether it improves their life instantaneously or not, for Web3 it currently doesn't.
&nbsp;  
&nbsp;  
&nbsp; 
&nbsp; 
This has lead to a very closed off industry that has only had playful short lived hints of product market fit in the real world, there has always been a mentality of us and them (Web3 vs Web2). In my mind the smartest thing to do would be to break down the barrier of us and them and start highlighting the benefits of using blockchain to end users and companies so they want to use this technology rather than forcing them.
&nbsp;  
&nbsp;  
&nbsp; 
&nbsp; 
But in order for that to happen we as a industry need to welcome the idea of not everyone is ready to jump straight in with hardcore decentralization, just like many of us weren't when we first bought Bitcoin on a dodgey exchange in 2018.
&nbsp;  
&nbsp;  
&nbsp; 
&nbsp; 
Othent pairs the convenience of Web2 login services like Google, Twitter, GitHub, and Microsoft with the power and security of dApps. It achieves this by generating unique RS-256 JSON Web Tokens (JWTs), which serve as fungible keys to individual smart contract wallets, enabling secure transactions with dApps that anyone with a social media account can make.
&nbsp;  
&nbsp;  
![othent gif](/blog/introducing-othent/othent-gif.gif)

&nbsp;  
## The Problem
&nbsp;  
In Web3, private keys play a crucial role in ensuring the security and integrity of transactions. They serve as unique digital signatures that authenticate and authorize users to perform various actions in blockchains. However, the management of private keys can be challenging and risky.
&nbsp;  
&nbsp;  
![how keys work](/blog/introducing-othent/how-keys-work.png)
&nbsp;  
If you lose or compromise a single private key, there is no backup to recover your funds.  Imagine misplacing the keys to a safety deposit box that's thrown into the ocean - there's simply no way to retrieve it. 
&nbsp;  
&nbsp;  
If someone else gets hold of your private key, it's like giving them complete and total access to your safety deposit box, this can be very daunting to initial users in Web3 and often a extreme deterrent to use dApps.
&nbsp;  
&nbsp;  
![current key storage](/blog/introducing-othent/current-key-storage.png)
&nbsp;  
&nbsp;  
**User managed private keys,** provide direct and complete control over your wallet and rely solely on the users own security measures.
&nbsp;  
&nbsp;  
**Custodial private keys,** managed by a third party, require you to give control over your funds and trust in the custodian's security measures. 
&nbsp;  
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
Many companies are already used to this widespread authentication technology and will have no problem integrating into their existing services. Enabling them instead of having to spend a year revamping their whole tech stack to support key storage and forcing their users to understand wallets.
&nbsp;  
&nbsp;  
They can just simply connect to a Web3 dApp/chain/service and leverage it to improve their product/service instead of trying to change it.
&nbsp;  
&nbsp;  
![othent transaction flow](/blog/introducing-othent/othent-tx-flow.png)
&nbsp;  
Our authentication flow cuts out more than 50 steps compared to traditional wallets, so users can quickly and securely log in and interact with dApps, simplifying the process encourages more people to use dApps.
&nbsp;  
&nbsp;  
Here's how it works:
&nbsp;  
&nbsp;  
![othents solution](/blog/introducing-othent/othents-solution.webp)
&nbsp;  
### Othent Smart Contract Transactions
&nbsp;  
When a user authenticates with their Web2 account, Othent assigns them a unique smart contract wallet. This smart contract wallet can only be accessed via a JWT, signed by their Web2 account, transactions can then be made on chain via the users smart contract wallet just like normal private key transactions.
&nbsp;  
&nbsp;  
A key part of this approach is its flexibility, while a user initially uses their Web2 account for authentication, they can later choose to disconnect their Web2 account and use a private key with their smart contract wallet instead. This gives users the freedom to switch to more traditional blockchain interactions if they prefer, without sacrificing the benefits of Othent's authentication system.
&nbsp;  
&nbsp;  
&nbsp;  
### Othent Data Transactions to Arweave
&nbsp;  
In addition to facilitating secure transactions, Othent also supports data uploads to the Arweave blockchain, a decentralized permanent data storage network. 

&nbsp; 
&nbsp; 


To ensure data integrity, Othent uses hashes from the user's data in the JWT as unique verifiable identifiers. The hash of the data is then embedded within the JWT, creating a verifiable link between the user and the uploaded data in an onchain transaction providing an on chain proof.
&nbsp;  
&nbsp;  
&nbsp;  
## Our Vision
&nbsp;  
Othent's goal is to make blockchain technology more accessible to all. By simplifying the authentication process, we aim to encourage greater adoption of blockchain and inspire further innovation throughout the whole of the Web3 ecosystem.
&nbsp;  
&nbsp;  
![web2 companies](/blog/introducing-othent/web2-companies.png)
&nbsp;  

Everyone’s journey into the decentralized app world begins somewhere. Many hardcore users of dApps likely started with more user friendly platforms like Coinbase or Binance. These platforms provided an entry point to blockchain technologies, even if they don't embody the fully decentralized experience of dApps. 
&nbsp;  
&nbsp;  
Othent follows a similar philosophy: creating a path for users to transition comfortably and securely from Web2 to Web3 environments and then later enables its users to back up their smart contract wallets with private keys and remove Web2 if they so wish.
&nbsp;  
&nbsp;  
&nbsp;  
## Get Started with Othent
&nbsp;  
Developers interested in integrating Othent can find developer docs at [docs.othent.io](https://docs.othent.io). To create an Othent account, visit [othent.io/signup](https://othent.io/signup). For any inquiries or feedback, feel free to email us at hello@othent.io.
`,

  },
];

export default blogEntries;
