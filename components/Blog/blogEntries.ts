const blogEntries = [

    {
      id: 1,
      url: 'introducing-othent',
      favicon: '/blog/introducing-othent/favicon.svg',
      blogImg: '/blog/introducing-othent/hero-img.png',
      category: 'Announcements',
      date: '19th May 2023',
      duration: '2 min read',
      title: 'Introducing Othent',
      transactionID: 'XXXXX',
      teaserContent: 'Othent, a fusion of Web2 "OAuth" and Web3 "Authentication,” is a protocol designed to improve the user authentication when using Web3 technologies from Web2...',
      content: `
## Introduction
&nbsp; 

&nbsp; 
Othent, a fusion of Web2 "OAuth" and Web3 "Authentication,” is a protocol designed to improve the user authentication when using Web3 technologies from Web2. The protocol uses Web2 login services like Google, Twitter, GitHub, and Microsoft to generate unique RS-256 JSON Web Tokens (JWTs). These JWTs unlock access to individual smart contract wallets, ensuring secure blockchain transactions. In essence, Othent combines the simplicity of Web2 user login methods with the robust security of Web3 authentication.
&nbsp;  

&nbsp;  
<img src="/blog/introducing-othent/othent-tx-flow.png" alt="othent transaction flow">
&nbsp;

&nbsp;  
<img src="/blog/introducing-othent/web2-companies.png" alt="web2 companies">
&nbsp;  

&nbsp;  
## Why 
&nbsp; 

&nbsp;  
The traditional process of accessing blockchain and dApps involves managing complex private keys. This presents a significant entry barrier, especially for non-technical users. Othent addresses this challenge by letting users leverage their familiar Web2 login credentials to interact with blockchain networks and dApps.
&nbsp;  

&nbsp;  
<img src="/blog/introducing-othent/how-keys-work.png" alt="how keys work">
&nbsp;  

&nbsp;  
<img src="/blog/introducing-othent/current-key-storage.png" alt="current key storage">
&nbsp;  

&nbsp;  
This drastically simplifies the entry process and accelerates the adoption of blockchain technologies. Furthermore, Othent ensures a user-friendly experience, facilitating smoother onboarding.
&nbsp;  

&nbsp; 
## The Tech
&nbsp; 

&nbsp; 
The core of Othent's tech lies in its unique use of RS-256 JSON Web Tokens and its innovative method of account abstraction. Each user gets a distinct smart contract wallet, accessible solely with a JWT signed by their Web2 account. This method offers a level of security even Othent does not have access to, ensuring that only the user and their preferred Web2 authentication method can access it.
&nbsp;  

&nbsp;  
For transactions that can't be executed via a smart contract, such as storing data on Arweave, Othent uses hashes of data from the user's JWT to validate data uploads, maintaining data integrity and authenticity.
&nbsp;  

&nbsp;  
<img src="/blog/introducing-othent/othents-solution.webp" alt="othents solution">
&nbsp;  

&nbsp; 
## Get involved
&nbsp; 

&nbsp; 
Othent aims to revolutionize blockchain access, and it invites you to be a part of this exciting journey. With support for 64 social connections and potential access to over 5 billion users with Web3 wallets, the opportunities are vast.
&nbsp;  

&nbsp;  
You can integrate Web2 authentication into your application by visiting [docs.othent.io](https://docs.othent.io). If you wish to create an Othent account, go to [othent.io/signup](https://othent.io/signup). For any queries or if you simply want to reach out, email us at hello@othent.io.
  `,
    },
  ];
  
export default blogEntries;
  


