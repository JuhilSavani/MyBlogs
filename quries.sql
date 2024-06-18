create table my_blogs(
    id serial primary key,
    title text NOT NULL,
    content text NOT NULL,
    date varchar(20) NOT NULL,
    tag varchar(30) NOT NULL
);

insert into my_blogs (id, title, content, date, tag) 
values (1, 'How DeFi is Redefining the Financial Landscape', 
'Decentralized Finance (DeFi) is revolutionizing the financial landscape by leveraging blockchain technology to create an open and permissionless financial system. Unlike traditional finance, DeFi eliminates intermediaries, offering users direct access to financial services like lending, borrowing, and trading through smart contracts. This democratization of finance empowers individuals with greater control over their assets and introduces innovative financial products that are accessible globally. As DeFi continues to grow, it promises to enhance financial inclusion and reshape the future of banking.',
'Feb 19, 2024', 'Finance'
);

insert into my_blogs (id, title, content, date, tag) 
values (2, 'From Art to Real Estate: The Rise of NFT', 
'Non-Fungible Tokens (NFTs) are digital assets that represent ownership or proof of authenticity of unique items or digital content, such as art, collectibles, or virtual real estate, on a blockchain. Each NFT is distinct and cannot be replicated, making it one-of-a-kind and verifiable. NFTs have gained popularity for their ability to tokenize ownership and create scarcity in the digital realm, enabling creators to monetize their work and collectors to own exclusive digital assets. With the potential to revolutionize ownership and commerce in the digital age, NFTs have sparked a wave of creativity and innovation across various industries.',
'Apr 09, 2024', 'Art'
);

insert into my_blogs (id, title, content, date, tag) 
values (3, 'The Rise of Web3: User Control and Privacy in the Digital Age', 
'Web3 represents the next evolution of the internet, emphasizing decentralization, user control, and privacy. Unlike Web2, where centralized platforms dominate and user data is often exploited, Web3 aims to empower individuals by giving them ownership and control over their data and digital identities through blockchain technology. In a Web3 ecosystem, users interact with decentralized applications (dApps) built on blockchain networks, enabling peer-to-peer transactions, secure data storage, and censorship-resistant communication. By decentralizing power and promoting trustless interactions, Web3 has the potential to foster a more equitable and inclusive digital economy, where users are no longer mere consumers but active participants in shaping the future of the internet.',
'Apr 13, 2024', 'Tech'
);

