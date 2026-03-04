const database = {
        games: [
            { name: "Minecraft PE", desc: "🔥🎮Minecraft Pocket Edition Latest Mobile Version.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBw9g6jfRMqOerLIjz4rhmQK5-V3D19bbjdw&s", link: "#" },
            { name: "Minecraft Java", desc: "🔥🎮Minecraft Java Edition", img: "https://assetsio.gnwcdn.com/ar1or8.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", link: "#" }, 
            { name: "GTA San Andreas", desc: "🔥🎮GTA San Andreas original for Mobile and PCs!", img: "https://i.ytimg.com/vi/T7PGAEgq6kY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDf2zXwrjin7Zqg710xj1KS2_ArAg", link: "#" },
            { name: "GTA V Mobile", desc: "🔥🎮Enjoy the GTA V optimized on your Mobile!", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRreCCbv6GO8pQmxsPAsDbTrm483mX16VtEKA&s", link: "#" },
            { name: "GTA VI fanmade", desc: "🔥🎮Enjoy the GTA VI fanmade on your Mobile!", img: "https://www.rockstargames.com/VI/_next/image?url=%2FVI%2F_next%2Fstatic%2Fmedia%2FJason_and_Lucia_01_With_Logos_landscape.8596f77a.jpg&w=3840&q=75", link: "#" },
            { name: "GTA III", desc: "🔥🎮A gta game", img: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1546970/ss_56f78f530f5bfea0395380ba23cc67cbc0fdc0b0.1920x1080.jpg?t=1741117830", link: "#" },  
            { name: "GTA LCS", desc: "🔥🎮A gta story game", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBx4T1Kpk-x9uti-_q-dmlQFj9ZnaSCl_gA&s", link: "#" }, 
            { name: "Grand Mobile", desc: "🔥🎮An Ultimate Game of crime virtualworld.", img: "https://techleez.com/wp-content/uploads/2025/07/unnamed-2025-07-27T152006.120.webp", link: "#" },
            { name: "Free City", desc: "🔥🎮An openworld GTA game from Garena.", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvxx9tclDprvdQDWE0oZUaNXepNZWd9D5a6g&s", link: "#" },
            { name: "Mad Out 2", desc: "🔥🎮Action Openworld game", img: "https://cdn.aptoide.com/imgs/1/b/4/1b461e3ac06eefe4862da13adba0bade_screen.jpg?w=325", link: "#" },
            { name: "Car X street", desc: "🔥🎮Unlimited 💵💰Money MOD APK", img: "https://i.ytimg.com/vi/BW7VYvChIig/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDvr0AfNgDKUMcF8Z819bXR_2ijdA", link: "#" },
            { name: "Asphalt 8: Airbrone", desc: "🔥🎮Race with the racing beasts!", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGvaUoAxAXGfTgIsowRR6UPrub_iuVWRFFg&s", link: "#" },
            { name: "Asphalt 9: Legends", desc: "🔥🎮An Ultimate Realistic Racing World!", img: "https://static.wikia.nocookie.net/asphalt/images/e/ef/A9_v1.5_icon.png/revision/latest/smart/width/250/height/250?cb=20190410200039", link: "#" },
            { name: "Extreme Car Driving", desc: "🔥🎮Arcade and race", img: "https://danifm.com/wp-content/uploads/2023/06/carrusel-3.jpg.webp", link: "#" },
            { name: "Hill Climb Racing", desc: "🔥🎮2D racing fun Unlimited Coins MOD APK", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDB4Vy1AvhaTowjJ8y19el-LxrzRX4XZg9tw&s", link: "#" },
            { name: "Hill Climb Racing 2", desc: "🔥🎮2D racing fun MOD APK", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRH6PNKh73_mFWMWAQTa0VNUqeOer0ZqcsG0w&s", link: "#" },
            { name: "FreeFire MAX", desc: "🔥🎮Action Shotter game", img: "https://i0.wp.com/www.nenow.in/wp-content/uploads/2022/03/free-fire-max-redeem-code-.jpg?fit=1920%2C1200&ssl=1", link: "#" },
            { name: "BGMI", desc: "🔥🎮Battle Grounds Mobile India", img: "https://img.mathrubhumi.com/view/acePublic/alias/contentid/1kjs4qcn8offnb3lzzr/1/bgmi-jpg.webp?$p=f162f31&f=16:9&w=1080&q=0.8", link: "#" },
            { name: "Fornite", desc: "🔥🎮Action Shooter game", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Roblox", desc: "🔥🎮Sandbox game", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Stumble Guys", desc: "🔥🎮Sandbox multiplayer game", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "PK XD", desc: "🔥🎮Sandbox multiplayer game", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Poppy Playtime Ch:4", desc: "🔥👻Poppy Playtime Horror game", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGXCXREPZHy5mSN9966DZ4tQU9eeQbhC4LqQ&s", link: "#"},
            { name: "Poppy Playtime Ch:3", desc: "🔥👻Poppy Playtime Horror game", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSykWvI7Msz36kh78dUl1eA7qEmj3jBJFLGpg&s", link: "#"},
            { name: "Poppy Playtime Ch:2", desc: "🔥👻Poppy Playtime Horror game", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRek6lYx87KGMFniWQQIGncp-hOBETsyMhbfQ&s", link: "#"},
            { name: "Poppy Playtime Ch:1", desc: "🔥👻Poppy Playtime Horror game", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw9aD9hz9Sg8frpGuIIr6b9k_S3l1nBojJAQ&s", link: "#"},
            { name: "Granny: Horror", desc: "🔥👻Horror game", img: "https//via.placeholder.com/300x140", link: "#" },
            { name: "Evil Nun", desc: "Horror game", img: "https//via.placeholder.com/300x140", link: "#" },
            { name: "Ice Scream: Horror", desc: "Horror game", img: "https//via.placeholder.com/300x140", link: "#" },
            { name: "FNAF :Horror", desc: "Horror Escape", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Hello Neighbour", desc: "Escaping Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Need For Speed", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Drift Max Pro", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Warframe Mobile", desc: "Action RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Tomb Raider™ (2026 Port)", desc: "Action Adventure", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Balatro", desc: "Roguelike Card", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Rainbow Six Mobile", desc: "Tactical Shooter", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Reigns: The Witcher", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Subnautica Below Zero", desc: "Survival", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Dragon Rise", desc: "Idle RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Oceanhorn 3: Legend of the Shadow Sea", desc: "Adventure", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Truck Masters: World Sim", desc: "Simulation", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Silt", desc: "Puzzle Adventure", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Dave the Diver", desc: "Adventure Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Black Border 3", desc: "Simulation", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Iron Roads", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Pocket Golf Tournament", desc: "Sports", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Destiny: Rising", desc: "FPS RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Max Payne Mobile", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Grand Theft Auto: Liberty City Stories", desc: "Open World", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Grand Theft Auto: Chinatown Wars", desc: "Open World", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Shadowgun Legends (Pro)", desc: "FPS", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Neon Shadow", desc: "Cyberpunk FPS", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Space Marshals 1, 2 & 3", desc: "Tactical Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Xenowerk", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Midnight Star: Renegade", desc: "Shooter", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "JYDGE", desc: "Top-down Shooter", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Tesla vs Lovecraft", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Total War: MEDIEVAL II", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Total War: ROME", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Total War: EMPIRE", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "XCOM: Enemy Within", desc: "Tactical", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Tropico: The People's Demo", desc: "City Builder", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Prison Architect: Mobile", desc: "Management", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "The Escapists: Walking Dead", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Kingdom: New Lands", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Kingdom: Two Crowns", desc: "Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Northgard", desc: "Viking Strategy", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Final Fantasy VII", desc: "JRPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Final Fantasy VIII Remastered", desc: "JRPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Final Fantasy IX", desc: "JRPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Final Fantasy Tactics: WotL", desc: "Tactical RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Star Wars: KOTOR", desc: "RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Dragon Quest VIII", desc: "JRPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Neverwinter Nights: EE", desc: "RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Baldur's Gate II: EE", desc: "RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Grimvalor", desc: "Action RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Pascal's Wager", desc: "Souls-like RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "The Room: Old Sins", desc: "Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Layton: Curious Village", desc: "Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Geometry Dash", desc: "Action Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Layton: Pandora's Box", desc: "Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Layton: Lost Future", desc: "Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Monument Valley: Panoramic", desc: "Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Gris", desc: "Artistic Adventure", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Florence", desc: "Story", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Gorogoa", desc: "Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Framed 1 & 2", desc: "Noir Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Mini Metro", desc: "Puzzle", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Alien: Isolation", desc: "Survival Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Five Nights at Freddy's: SL", desc: "Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Five Nights at Freddy's: HW", desc: "Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Bendy and the Ink Machine", desc: "Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Little Nightmares", desc: "Puzzle Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Fran Bow Chapter 1-5", desc: "Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Forgotten Memories", desc: "Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Garten of Banban 1-8", desc: "Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "The Baby in Yellow (Ad-Free Free Premium)", desc: "☠👻Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Poppy Playtime Chapter 3", desc: "☠👻Horror", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "GRID Autosport", desc: "🏎🏁 Racing Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Wreckfest", desc: "🏎🏁 Racing", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Rush Rally 3", desc: "🏎🏁 Rally", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Need for Speed: Most Wanted", desc: "🏎🏁 Racing", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "F1 Manager 2026", desc: "🏁🏎Sports Management", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "NBA 2K26 Mobile", desc: "Sports", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "FC Mobile", desc: "⚽sports", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Football Manager 2026 Mobile", desc: "⚽Sports", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Wrestling Empire (Pro)", desc: "Sports", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "True Skate", desc: "Sports", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Skate Party 3", desc: "Sports", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Stardew Valley", desc: "👨‍🌾 Farming Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Terraria", desc: "Sandbox", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Pocket City 2", desc: "🏗 City Builder", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Construction Simulator 4", desc: "🏗 Construction Simulation", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Farming Simulator 25", desc: "👨‍🌾 Simulation", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Indian Train Simulator", desc: "🚂 Train Simulator", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Bus Simulator Indonesia", desc: "🚍🚌 Bus Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "The Sims Free Free PremiumPlay (VIP)", desc: "Life Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Papers, Please", desc: "Dystopian Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "This War of Mine", desc: "Survival Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Graveyard Keeper", desc: "RPG Sim", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Dead Cells: Medley of Endeavors", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Vampire Survivors (Free Premium DLC)", desc: "Roguelike", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Brotato: Free Premium", desc: "Arena Shooter", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Hollow Knight (Mobile Port)", desc: "Metroidvania", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Cuphead Mobile", desc: "Boss-Rush", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Streets of Rage 4", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Katana ZERO", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "ScourgeBringer", desc: "Action", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Loop Hero", desc: "Strategy RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Dicey Dungeons", desc: "Roguelike", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Dysmantle", desc: "Survival", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Don't Starve: Pocket Edition", desc: "Survival", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Crashlands 2", desc: "Adventure RPG", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Oceanhorn: Monster of Uncharted Seas", desc: "Adventure", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Mr.Meat", desc: "Horror game.", img: "https://picsum.photos/300/140?random=1", link: "#" }
        ],
        soft: [
            { name: "CapCut Pro", desc: "No watermark,pro features unlocked.", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Filmora Pro", desc: "Pro unlocked", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Adobe Premier Pro", desc: "Special Software", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Adobe Photoshop", desc: "Industry standard PC Photo Editor", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Adobe Lightroom", desc: "Mobile Photo Editor with AI", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Adobe Express", desc: "AI Thumbnail Maker & Editor", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Canva Pro", desc: "Simple Thumbnail Maker & Editor", img: "https//picsum.photos/300/140?random=1", link: "#" },
            { name: "Photoshop CC", desc: "Portable version.", img: "https://picsum.photos/300/140?random=1", link: "#" }
        ],
        os: [
            { name: "Windows 11 Pro ", desc: "Ultra fast stripped OS. 💹Fully Activated*!", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Windows 10 Pro ", desc: "Ultra fast stripped OS. 💹Fully Activated*!", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "Windows 8.1 Pro", desc: "Ultra fast stripped OS. 💹Fully Activated*!", img: "https://picsum.photos/300/140?random=1", link: "#" },
            { name: "windows 7 Pro" , desc: "Ultra fast stripped OS. 💹Fully Activated*!", img: "https://picsum.photos/300/140?random=1", link: "#" }
        ],
        pdf: [
            { name: "Atomic Habits", desc: "a pdf", img: "https://picsum.photos/300/140?random=1", link: "#" }
        ]  
 
    };

    function render(data, gridId) {
        const grid = document.getElementById(gridId);
        if(!grid) return;
        grid.innerHTML = data.map(item => {
     // Generates random rating between 4.1 and 5.0
        const randomRating = (Math.random() * (5.0 - 4.1) + 4.1).toFixed(1);
        
        // Generates random downloads between 1 and 23.6
        const randomDownloads = Math.floor(Math.random() * 13) + 1;

        return `
            <div class="card">
                <div class="card-header">
                    <span>${randomDownloads}M+📥Downloads</span> 
                    <span class="rating">⭐ ${randomRating} nice</span>
                </div>
                <div class="card-image-container">
            <img src=${item.img}" alt="${item.name}" class="card-img">
        </div>
                    <div class="card-body">
                    <h3>${item.name}</h3>
                    <p>${item.desc}</p>
                    <a href="${item.link}" class="dl-btn"> 📥 Download Now</a>
                </div>
                <div id="loadingScreen" style="display: none; text-align: center;">
    <div class="ad-placeholder">Ads (Propeller)</div>
    
    <div class="loader-container">
        <span class="rocket">🚀</span>
        <p>Loading...</p>
        <div class="progress-bar">
            <div id="fill"></div>
        </div>
        <div id="percentage">0%</div>
    </div>
</div>
            </div>
        `;
    }).join('');
}

// This is the DOM code that triggers your render function
document.addEventListener('DOMContentLoaded', () => {
    render(database.games, 'grid-games');
    render(database.soft, 'grid-soft');
    render(database.os, 'grid-os');
    render(database.pdf, 'grid-pdf');

    // This calls the function you already created
    renderBitManiac(); 
    
    console.log("DOM fully loaded and games rendered!");
});

